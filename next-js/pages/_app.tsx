import '../styles/globals.css';
import "highlight.js/styles/base16/equilibrium-light.css"
import { ChakraProvider } from '@chakra-ui/react';


export default function ChakraApp({ Component, pageProps }: any) {
  return (
      <ChakraProvider resetCSS={false}>
        <Component {...pageProps} />
      </ChakraProvider>
  );
}
