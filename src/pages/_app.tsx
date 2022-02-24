import { DefaultSeo } from 'next-seo';
import SEO from '../../next-seo.config';
import type { AppProps } from 'next/app';
import { QueryClient, QueryClientProvider } from 'react-query';
import GlobalStyles from 'components/GlobalStyles';
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
      <DefaultSeo {...SEO} />
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
