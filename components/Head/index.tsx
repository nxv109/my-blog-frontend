import React from 'react';
import Head from 'next/head';

interface IProps {
  title: string;
  children?: React.ReactNode;
}

function HeadContainer({ title, children }: IProps) {
  return (
    <Head>
      <title>{title ? `${title} - Xuan Vinh Blog` : 'Loading...'}</title>
      {children}
    </Head>
  );
}

export default HeadContainer;
