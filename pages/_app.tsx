import { AppProps } from 'next/app';
import { ReactNode, useEffect } from 'react';
import { Head } from '@components/common';
import { ManagedUIProvider } from '@lib/context/UIContext';

import '@styles/global/base.scss';
import '@styles/global/chrome-bug.css';
import '@styles/libraries/toastify.scss';

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
      <ManagedUIProvider>
        <Layout>
          <Component {...pageProps} />
        </Layout>
      </ManagedUIProvider>
    </>
  );
}

export default App;
