import { WebViewEventMap } from '../types';

export const FINTOC_WEBVIEW_URL = 'https://webview.fintoc.com/widget.html';
export const FINTOC_WIDGET_URL = 'https://webview.fintoc.com/widget.html';
export const FINTOC_URLS = [FINTOC_WEBVIEW_URL, FINTOC_WIDGET_URL];

export const EVENT_MAP = {
  'fintocwidget://succeeded': 'onSuccess',
  'fintocwidget://exit': 'onExit',
} as WebViewEventMap
