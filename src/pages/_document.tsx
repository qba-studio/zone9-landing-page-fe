import Document, {
  DocumentContext,
  DocumentInitialProps,
  Head,
  Html,
  Main,
  NextScript,
} from "next/document";
import Script from "next/script";

class MyDocument extends Document {
  static async getInitialProps(
    ctx: DocumentContext
  ): Promise<DocumentInitialProps> {
    const originalRenderPage = ctx.renderPage;
    const initialProps = await Document.getInitialProps(ctx);

    try {
      ctx.renderPage = () =>
        originalRenderPage({
          enhanceApp: (App) => (props) => <App {...props} />,
        });

      return {
        ...initialProps,
        styles: <>{initialProps.styles}</>,
      };
    } catch (error) {
      return initialProps;
    }
  }

  render() {
    return (
      <Html
        data-theme="dark"
        style={{
          colorScheme: "dark",
        }}
      >
        <Head>
          <meta charSet="utf-8" />
          <link rel="icon" href="/Z9-Favicon.png" />
          <meta
            name="description"
            content="An open-world MMO RPG survival game built on Unreal Engine."
          />
          <meta
            name="keywords"
            content="zone9, zombie, blockchain, crypto, nft, game"
          />
          <meta
            property="og:image"
            content="https://zone9survival.com/images/thumbnail.png"
          />
          <meta
            property="og:image:alt"
            content="An open-world MMO RPG survival game built on Unreal Engine."
          />
          <meta property="og:url" content="https://zone9survival.com/" />
          <meta property="og:type" content="website" />
          <meta property="og:site_name" content="Zone9Survival" />
          <meta property="og:title" content="Zone9Survival" />
          <meta
            property="og:description"
            content="An open-world MMO RPG survival game built on Unreal Engine."
          />
          <Script
            src="https://www.googletagmanager.com/gtag/js?id=G-KVRKK8JFQ6"
            strategy="afterInteractive"
          />
          <Script id="google-analytics" strategy="afterInteractive">
            {`
              window.dataLayer = window.dataLayer || [];
              function gtag() {
                dataLayer.push(arguments);
              }
              gtag("js", new Date());

              gtag("config", "G-KVRKK8JFQ6");
            `}
          </Script>
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
