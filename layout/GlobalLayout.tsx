import Head from 'next/head';
import Aos from 'aos';
import Script from 'next/script';
import { LayoutProps } from '../models';
import { DEFAULT_STYLES } from '../styles';
import { Footer } from '../components';

const GlobalLayout = ({ children }: LayoutProps) => {
  typeof window !== 'undefined' && Aos.init();

  return (
    <>
      <Head>
        <meta name='viewport' content='width=device-width, initial-scale=1' />
        <meta name='theme-color' content='#000000' />
        <meta
          name='description'
          content='I am a front-end developer specialized in building and occasionally designing exceptional digital experiences. Currently, I am focused on building accessible,human-centered products and responsive web pages.'
        />

        <meta
          name='keywords'
          content='Developer, Development, Frontend, React, React Native, NextJs, Mobile, Web'
        />

        <meta name='author' content='Chigbo Ifeanyi James' />

        <meta name='apple-mobile-web-app-capable' content='yes' />
        <meta name='apple-mobile-web-app-status-bar-style' content='black' />
        <meta name='apple-mobile-web-app-title' content='Developer' />
        <link rel='icon' href='favicon.ico' />
        <link rel='manifest' href='manifest.json' />
        <link rel='apple-touch-icon' href='favicon.ico' />

        <Script
          src='https://unpkg.com/aos@2.3.1/dist/aos.js'
          strategy='beforeInteractive'
        />

        <title>Chigbo Ifeanyi James - Front End Developer</title>
      </Head>

      <div
        style={{
          width: DEFAULT_STYLES.fullWidth,
          minHeight: DEFAULT_STYLES.fullHeight,
          display: 'flex',
          flexDirection: 'column',
          backgroundColor: DEFAULT_STYLES.darkColor,
        }}
      >
        {children}
        <Footer />
      </div>
    </>
  );
};

export default GlobalLayout;
