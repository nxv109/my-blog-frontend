import React from 'react';
import Head from 'next/head';

interface IProps {
  title: string;
  description?: string;
  children?: React.ReactNode;
}

function HeadContainer({ title, description, children }: IProps) {
  return (
    <Head>
      <title>{title ? `${title} - Vinh Nguyen | nxv109` : 'Loading...'}</title>
      <meta name="description" content={description} />
      {children}
    </Head>
  );
}

export default HeadContainer;
