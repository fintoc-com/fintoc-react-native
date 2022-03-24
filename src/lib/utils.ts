import { WebViewMessageEvent } from 'react-native-webview';
import type { WebViewEventName, FintocWidgetEventHandlers } from '../types';
import { EVENT_MAP } from './constants';


export const buildQueryString = (config: Record<string, string>): string => {
  return Object.keys(config).map(key => key + '=' + config[key]).join('&');
}

export const buildMessageHandler = (handlers: FintocWidgetEventHandlers) => {
  return (event: WebViewMessageEvent) => {
    const eventName = event.nativeEvent.data as WebViewEventName;
    handlers[EVENT_MAP[eventName]]();
  }
}
