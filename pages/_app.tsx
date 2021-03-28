import { AppProps } from 'next/app';
import { ThemeProvider } from 'next-themes';
import { useEffect } from 'react';
import { Head } from '@components/common';

import '@styles/global/base.scss';
import '@styles/global/chrome-bug.css';

function App({ Component, pageProps }: AppProps) {
  // Chrome-transition-bug
  useEffect(() => {
    document.body.classList?.remove('loading');
  }, []);

  return (
    <>
      <Head />
      <ThemeProvider
        enableSystem
        enableColorScheme
        defaultTheme="system"
        themes={['light', 'dark']}
      >
        <Component {...pageProps} />
      </ThemeProvider>
    </>
  );
}

export default App;
