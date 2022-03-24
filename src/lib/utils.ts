import { WebViewMessageEvent } from 'react-native-webview';
import type { FintocWidgetEventHandlers, WebViewEventName } from '../types';
import { EVENT_MAP } from './constants';

export const buildQueryString = (config: Record<string, string>): string => Object.keys(config).map((key) => `${key}=${config[key]}`).join('&');

export const buildMessageHandler = (handlers: FintocWidgetEventHandlers) => (
  (event: WebViewMessageEvent) => {
    const eventName = event.nativeEvent.data as WebViewEventName;
    return handlers[EVENT_MAP[eventName]]();
  }
);
