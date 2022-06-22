import "../styles/globals.css";
import type { AppProps } from "next/app";
import { Hydrate, QueryClientProvider } from "react-query";

import { queryClient } from "../src/api";

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <QueryClientProvider client={queryClient}>
      <Hydrate state={pageProps.dehydratedState}>
        <Component {...pageProps} />
      </Hydrate>
    </QueryClientProvider>
  );
}

export default MyApp;
