import type { AppProps } from 'next/app';
import { QueryClient, QueryClientProvider } from 'react-query';
import GlobalStyles from 'components/GlobalStyles';
import Head from 'next/head';
import RepositoriesProvider from 'context/RepositoriesContext';
import 'aos/dist/aos.css';

const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      refetchOnWindowFocus: false,
      retry(failureCount) {
        if (failureCount < 2) return true;
        return false;
      },
    },
  },
});

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <>
      <Head>
        <meta
          name="viewport"
          content="width=device-width, initial-scale=1, maximum-scale=1, user-scalable=0"
        />
      </Head>
      <GlobalStyles />
      <QueryClientProvider client={queryClient}>
        <RepositoriesProvider>
          <Component {...pageProps} />
        </RepositoriesProvider>
      </QueryClientProvider>
    </>
  );
}

export default MyApp;
