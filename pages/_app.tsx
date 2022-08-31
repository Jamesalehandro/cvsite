import GlobalLayout from '../layout/GlobalLayout';
import type { AppProps } from 'next/app';
import '../styles/globals.css';
import { ChakraProvider } from '@chakra-ui/react';

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <ChakraProvider>
      <GlobalLayout>
        <Component {...pageProps} />
      </GlobalLayout>
    </ChakraProvider>
  );
}

export default MyApp;
