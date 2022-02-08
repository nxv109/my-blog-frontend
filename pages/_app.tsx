import { useEffect } from 'react';
import { NextComponentType } from 'next';
import { useRouter } from 'next/router';
import type { AppProps } from 'next/app';
import { QueryClientProvider, QueryClient } from 'react-query';

import ThemeProvider from '@/providers/Theme';
import CircleDecor from '@/components/CircleDecor';
import DefaultLayout from '@/components/Layout';
import TransitionLayout from '@/components/Layout/TransitionLayout';

import * as ga from '@/utils/ga';
import '../styles/globals.ts';

const queryClient = new QueryClient();

type ComponentTypes = NextComponentType & {
  Layout: any;
};

interface Props extends AppProps {
  Component: ComponentTypes;
}

function MyApp({ Component, pageProps }: Props) {
  const router = useRouter();
  const Layout = Component.Layout || DefaultLayout;

  useEffect(() => {
    const handleRouteChange = (url: string) => {
      ga.pageview(url);
    };
    //When the component is mounted, subscribe to router changes
    //and log those page views
    router.events.on('routeChangeComplete', handleRouteChange);

    // If the component is unmounted, unsubscribe
    // from the event with the `off` method
    return () => {
      router.events.off('routeChangeComplete', handleRouteChange);
    };
  }, [router.events]);

  return (
    <QueryClientProvider client={queryClient}>
      <ThemeProvider>
        <Layout>
          <TransitionLayout>
            <Component {...pageProps} />
          </TransitionLayout>
        </Layout>
        <CircleDecor />
      </ThemeProvider>
    </QueryClientProvider>
  );
}

export default MyApp;
