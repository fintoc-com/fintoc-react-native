import { WebViewMessageEvent } from 'react-native-webview';
import type { FintocWidgetEventHandlers, WebViewEventName } from '../types';
import { EVENT_MAP } from './constants';

const defaultHanlder = () => null;

type QueryValue = string | number | boolean;
interface QueryObject {
  [key: string]: QueryValue | QueryObject | QueryValue[];
}

export const buildQueryString = (config: QueryObject, configKey?: string): string => {
  const pairs: string[] = [];

  Object.entries(config).forEach(([key, value]) => {
    const nestedKey = configKey ? `${configKey}[${encodeURIComponent(key)}]` : encodeURIComponent(key);
    const valueIsObject = typeof value === 'object' && value !== null && !Array.isArray(value);
    const valueIsArray = typeof value === 'object' && value !== null && Array.isArray(value);

    if (valueIsObject) {
      pairs.push(buildQueryString(value as QueryObject, nestedKey));
    } else if (valueIsArray) {
      value.forEach((element) => {
        pairs.push(`${nestedKey}[]=${encodeURIComponent(String(element))}`);
      });
    } else {
      pairs.push(`${nestedKey}=${encodeURIComponent(String(value))}`);
    }
  });

  return pairs.join('&');
};

export const buildMessageHandler = (handlers: FintocWidgetEventHandlers) => (
  (event: WebViewMessageEvent) => {
    const eventName = event.nativeEvent.data as WebViewEventName;
    return (handlers[EVENT_MAP[eventName]] || defaultHanlder)();
  }
);
