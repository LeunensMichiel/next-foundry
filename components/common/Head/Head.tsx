import NextHead from 'next/head';
// import { DefaultSeo } from 'next-seo'
// import config from '@config/seo.json'

const Head = () => (
  <>
    {/* <DefaultSeo {...config} /> */}
    <NextHead>
      <meta name="viewport" content="width=device-width, initial-scale=1" />
      {/* <link
        rel="preload"
        href="/fonts/myFont.woff2"
        as="font"
        type="font/woff2"
        crossOrigin="anonymous"
        ENABLE THIS IF SELF-HOSTING FONTS
      /> */}
      {/* <link rel="manifest" href="/site.webmanifest" key="site-manifest" />
      <link href="/static/favicons/favicon.ico" rel="shortcut icon" />
      <link href="/static/favicons/site.webmanifest" rel="manifest" />
      <link
        href="/static/favicons/apple-touch-icon.png"
        rel="apple-touch-icon"
        sizes="180x180"
      />
      <link
        href="/static/favicons/favicon-32x32.png"
        rel="icon"
        sizes="32x32"
        type="image/png"
      />
      <link
        href="/static/favicons/favicon-16x16.png"
        rel="icon"
        sizes="16x16"
        type="image/png"
      />
      <link
        color="#4a9885"
        href="/static/favicons/safari-pinned-tab.svg"
        rel="mask-icon"
      />
      <meta content="#ffffff" name="theme-color" />
      <meta content="#ffffff" name="msapplication-TileColor" />
      <meta
        content="/static/favicons/browserconfig.xml"
        name="msapplication-config"
      />
      <meta content="14d2e73487fa6c71" name="yandex-verification" />
      <meta
        content="eZSdmzAXlLkKhNJzfgwDqWORghxnJ8qR9_CHdAh5-xw"
        name="google-site-verification"
      /> */}
    </NextHead>
  </>
);

export default Head;
