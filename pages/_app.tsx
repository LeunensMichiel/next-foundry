import { AppProps } from 'next/app';
import { ThemeProvider } from 'next-themes';
import { ReactNode, useEffect } from 'react';
import { Head } from '@components/common';

import '@styles/global/base.scss';
import '@styles/global/chrome-bug.css';

type NoopProps = {
  children: ReactNode;
};
const Noop = ({ children }: NoopProps) => <>{children}</>;

function App({ Component, pageProps }: AppProps) {
  const Layout = (Component as any).Layout || Noop;

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
        <Layout>
          <Component {...pageProps} />
        </Layout>
      </ThemeProvider>
    </>
  );
}

export default App;
