import '../styles/globals.css'
import type { AppProps } from 'next/app'
import { ReactNode, useState } from 'react';
import { QueryClient, QueryClientProvider } from 'react-query';
import { ReactQueryDevtools } from 'react-query/devtools';
import { queryClientConfig } from '../config/query-client.config';

declare module "react-query/types/react/QueryClientProvider" {
  interface QueryClientProviderProps {
    children?: ReactNode;
  }
}

function MyApp({ Component, pageProps }: AppProps) {

  const [queryClient] = useState(() => new QueryClient(queryClientConfig));

  return (
    <>
    <QueryClientProvider client={queryClient}>
      <Component {...pageProps} />
      <ReactQueryDevtools initialIsOpen={false} />
    </QueryClientProvider>
    </>
    )
}

export default MyApp

