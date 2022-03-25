import type { WebViewEventMap } from '../types';

export const FINTOC_WEBVIEW_BASE_URL = 'https://webview.fintoc.com';
export const FINTOC_WIDGET_BASE_URL = 'https://wizard.fintoc.com';
export const FINTOC_WEBVIEW_URL = `${FINTOC_WEBVIEW_BASE_URL}/widget.html`;
export const FINTOC_BASE_URLS = [FINTOC_WEBVIEW_BASE_URL, FINTOC_WIDGET_BASE_URL];

export const EVENT_MAP = {
  'fintocwidget://succeeded': 'onSuccess',
  'fintocwidget://exit': 'onExit',
} as WebViewEventMap;
