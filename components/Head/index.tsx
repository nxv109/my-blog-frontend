import React from 'react';
import Head from 'next/head';

interface IProps {
  title: string;
  description?: string;
  ogImage?: string;
  ogUrl?: string;
  children?: React.ReactNode;
}

function HeadContainer({
  title,
  description,
  ogImage = 'https://i.ibb.co/CQbCYsz/news-default.png',
  ogUrl,
  children,
}: IProps) {
  return (
    <Head>
      <title>{title ? `${title} - Vinh Nguyen | nxv109` : 'Loading...'}</title>
      {/* <!-- Primary Meta Tags --> */}
      <meta
        name="title"
        content={title ? `${title} - Vinh Nguyen | nxv109` : ''}
      ></meta>
      <meta name="description" content={description} />

      {/* <!-- Open Graph / Facebook --> */}
      <meta property="og:type" content="website" />
      <meta property="og:url" content={`https://nxv109.com${ogUrl}`} />
      <meta
        property="og:title"
        content={title ? `${title} - Vinh Nguyen | nxv109` : ''}
      />
      <meta property="og:description" content={description} />
      <meta property="og:image" content={ogImage} />
      {children}
    </Head>
  );
}

export default HeadContainer;
