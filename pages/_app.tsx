import { AppProps } from 'next/app';
import { ThemeProvider } from 'next-themes';

import '@styles/app.scss';

function App({ Component, pageProps }: AppProps) {
  return (
    <ThemeProvider enableSystem enableColorScheme defaultTheme="system" themes={['light', 'dark']}>
      <Component {...pageProps} />
    </ThemeProvider>
  );
}

export default App;
