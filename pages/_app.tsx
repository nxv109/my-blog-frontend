import { NextComponentType } from 'next';
import type { AppProps } from 'next/app';
import { QueryClientProvider, QueryClient } from 'react-query';

import ThemeProvider from '@/providers/Theme';
import CircleDecor from '@/components/CircleDecor';
import DefaultLayout from '@/components/Layout';
import TransitionLayout from '@/components/Layout/TransitionLayout';

import '../styles/globals.ts';

const queryClient = new QueryClient();

type ComponentTypes = NextComponentType & {
  Layout: any;
};

interface Props extends AppProps {
  Component: ComponentTypes;
}

function MyApp({ Component, pageProps }: Props) {
  const Layout = Component.Layout || DefaultLayout;

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
