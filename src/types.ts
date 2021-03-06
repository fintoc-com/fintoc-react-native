/**
 * The options used to create the widget. You can read more
 * here: {@link https://docs.fintoc.com/docs/widget}.
 */
export type FintocWidgetOptions = Record<string, any>;

export type WebViewEventName = 'fintocwidget://succeeded' | 'fintocwidget://exit';

/**
 * The event handlers used to handle the View redirections.
 * You can read more here: {@link https://docs.fintoc.com/docs/widget-webview-integration#webview-redirections}.
 */
export interface FintocWidgetEventHandlers {
  onSuccess?: () => void
  onExit?: () => void
}

export type WebViewEventMap = Record<WebViewEventName, keyof FintocWidgetEventHandlers>

/**
 * The props for the Fintoc Widget View.
 */
export type FintocWidgetViewPropsType = FintocWidgetEventHandlers & {
  options: FintocWidgetOptions
}
