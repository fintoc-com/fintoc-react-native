export type FintocWidgetOptions = Record<string, any>;

export type WebViewEventName = 'fintocwidget://succeeded' | 'fintocwidget://exit';

export interface FintocWidgetEventHandlers {
  onSuccess: () => void
  onExit: () => void
}

export type WebViewEventMap = Record<WebViewEventName, keyof FintocWidgetEventHandlers>

export interface FintocWidgetWebViewPropsType {
  options: FintocWidgetOptions
  handlers: FintocWidgetEventHandlers
}
