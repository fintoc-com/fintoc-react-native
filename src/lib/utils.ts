import { WebViewMessageEvent } from 'react-native-webview';
import type { FintocWidgetEventHandlers, WebViewEventName } from '../types';
import { EVENT_MAP } from './constants';

const defaultHanlder = () => null;

interface QueryObject {
  [key: string]: string | number | boolean | QueryObject;
}

export const buildQueryString = (config: QueryObject, configKey?: string): string => {
  const pairs: string[] = [];

  Object.entries(config).forEach(([key, value]) => {
    const nestedKey = configKey ? `${configKey}[${encodeURIComponent(key)}]` : encodeURIComponent(key);
    const valueIsObject = typeof value === 'object' && value !== null && !Array.isArray(value);

    if (valueIsObject) {
      pairs.push(buildQueryString(value as QueryObject, nestedKey));
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
