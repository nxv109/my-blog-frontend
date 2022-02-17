import Document, {
  DocumentContext,
  Html,
  Head,
  Main,
  NextScript,
} from 'next/document';
import { ServerStyleSheet } from 'styled-components';

class MyDocument extends Document {
  static async getInitialProps(ctx: DocumentContext) {
    const sheet = new ServerStyleSheet();
    const originalRenderPage = ctx.renderPage;

    try {
      ctx.renderPage = () =>
        originalRenderPage({
          enhanceApp: App => props => sheet.collectStyles(<App {...props} />),
        });

      const initialProps = await Document.getInitialProps(ctx);
      return {
        ...initialProps,
        styles: (
          <>
            {initialProps.styles}
            {sheet.getStyleElement()}
          </>
        ),
      };
    } finally {
      sheet.seal();
    }
  }

  render() {
    return (
      <Html lang="en">
        <Head>
          <meta charSet="utf-8" />
          <meta
            name="google-site-verification"
            content="nKt1iz-l5P8hgSAxGvUj11I4HcsvJt513uTLfQ7VYmQ"
          />
          <meta name="robots" content="index,follow"></meta>
          <link
            rel="shortcut icon"
            href="https://i.ibb.co/16FpfZs/small-logo.png"
          />
          <link rel="preconnect" href="https://fonts.gstatic.com" />
          <link
            href="https://fonts.googleapis.com/css2?family=Fira+Sans:ital,wght@0,400;0,500;0,600;0,700;1,400;1,500;1,600;1,700&display=swap"
            rel="stylesheet"
          />
          <link
            href="https://fonts.googleapis.com/icon?family=Material+Icons"
            rel="stylesheet"
          />
          <link
            rel="stylesheet"
            href="https://cdn-uicons.flaticon.com/uicons-regular-rounded/css/uicons-regular-rounded.css"
          />

          {/* <!-- Google Analytics --> */}
          <meta
            name="google-signin-client_id"
            content={`${process.env.NEXT_PUBLIC_GOOGLE_ANALYTICS_CLIENT_ID}`}
          />
          <meta
            name="google-signin-scope"
            content="https://www.googleapis.com/auth/analytics.readonly"
          />
          {/* <!-- Load the JavaScript API client and Sign-in library. --> */}
          {/* <script src="https://apis.google.com/js/client:platform.js" /> */}

          {/* Global site tag (gtag.js) */}
          <script
            async
            src={`https://www.googletagmanager.com/gtag/js?id=${process.env.NEXT_PUBLIC_GOOGLE_ANALYTICS}`}
          />
          <script
            dangerouslySetInnerHTML={{
              __html: `
              window.dataLayer = window.dataLayer || [];
              function gtag(){dataLayer.push(arguments);}
              gtag('js', new Date());

              gtag('config', ${process.env.NEXT_PUBLIC_GOOGLE_ANALYTICS});
            `,
            }}
          />
        </Head>
        <body>
          <Main />
          <NextScript />
        </body>
      </Html>
    );
  }
}

export default MyDocument;
