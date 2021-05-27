import type { AppProps } from 'next/app';
import { memo } from 'react';
import { Provider } from 'react-redux';
import { ThemeProvider } from 'styled-components';

import { store } from 'redux/store';
import { GlobalStyle } from 'shared/styles/global.styles';
import { mainTheme } from 'shared/styles/theme';

const MyApp = memo(({ Component, pageProps }: AppProps) => (
  <ThemeProvider theme={mainTheme}>
    <GlobalStyle />
    <Provider store={store}>
      <Component {...pageProps} />
    </Provider>
  </ThemeProvider>
));

export default MyApp;
