import React from 'react';
import { WebView } from 'react-native-webview';
import { View, StyleSheet } from 'react-native';
import type { FintocWidgetWebViewPropsType } from '../types';
import { FINTOC_WEBVIEW_URL, FINTOC_BASE_URLS } from './constants';
import { buildQueryString, buildMessageHandler } from './utils';

export const FintocWidgetWebView = ({ options, handlers }: FintocWidgetWebViewPropsType) => (
  // eslint-disable-next-line no-use-before-define
  <View style={styles.wrapper}>
    <WebView
      source={{ uri: `${FINTOC_WEBVIEW_URL}?${buildQueryString(options)}` }}
      originWhitelist={FINTOC_BASE_URLS}
      onMessage={buildMessageHandler(handlers)}
    />
  </View>
);

const styles = StyleSheet.create({
  wrapper: {
    width: '100%',
    height: '100%',
  },
});
