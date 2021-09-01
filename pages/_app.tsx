import '@styles/global/base.scss';
import '@styles/global/chrome-bug.css';
import '@styles/libraries/toastify.scss';

import { Head } from '@components/common';
import { ManagedUIProvider } from '@lib/context/UIContext';
import { AppProps } from 'next/app';
import { ReactNode, useEffect } from 'react';
import { CookiesProvider } from 'react-cookie';

type NoopProps = {
  children: ReactNode;
};
const Noop = ({ children }: NoopProps) => <>{children}</>;

function App({ Component, pageProps }: AppProps) {
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const Layout = (Component as any).Layout || Noop;

  // Chrome-transition-bug
  useEffect(() => {
    document.body.classList?.remove('loading');
  }, []);

  return (
    <CookiesProvider>
      <Head />
      <ManagedUIProvider>
        <Layout>
          <Component {...pageProps} />
        </Layout>
      </ManagedUIProvider>
    </CookiesProvider>
  );
}

export default App;
