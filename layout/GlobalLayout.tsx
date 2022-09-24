import Head from 'next/head';
import Footer from '../components/Footer/Footer';
import { LayoutProps } from '../models/LayoutModels';
import { DEFAULT_STYLES } from '../styles/customStyles';

const GlobalLayout = ({ children }: LayoutProps) => {
  return (
    <>
      <Head>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta name="theme-color" content="#000000" />
        <meta
          name="description"
          content="I am a front-end developer specialized in building and occasionally designing exceptional digital experiences. Currently, I am focused on building accessible,human-centered products and responsive web pages."
        />

        <meta name="apple-mobile-web-app-capable" content="yes" />
        <meta name="apple-mobile-web-app-status-bar-style" content="black" />
        <meta name="apple-mobile-web-app-title" content="Developer" />
        <link rel="icon" href="favicon.ico" />
        <link rel="manifest" href="manifest.json" />
        <link rel="apple-touch-icon" href="favicon.ico" />

        <title>Chigbo Ifeanyi James - Front End Developer</title>
      </Head>
      <div
        style={{
          width: DEFAULT_STYLES.fullWidth,
          minHeight: DEFAULT_STYLES.fullHeight,
          display: 'flex',
          flexDirection: 'column',
        }}
      >
        {children}
        <Footer />
      </div>
    </>
  );
};

export default GlobalLayout;
