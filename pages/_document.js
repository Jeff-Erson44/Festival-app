import Document, { Html, Head, Main, NextScript} from 'next/document'
import { GA_TRACKING_ID } from '../lib/gtag'
import { ServerStyleSheet } from 'styled-components';



export default class MyDocument extends Document {
  static async getInitialProps(ctx) {
    const sheet = new ServerStyleSheet();
    const originalRenderPage = ctx.renderPage;

    try {
      ctx.renderPage = () =>
        originalRenderPage({
          enhanceApp: (App) => (props) =>
            sheet.collectStyles(<App {...props} />),
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

    const language = "fr-fr";

    return (
      <>

      <Html lang={language}>

        <Head>
          <meta name="description" content="Generated by create next app" />
          <link rel="icon" href="/favicon.ico" />
          <link
            rel="preload"
            href="/fonts/Switzer/Switzer-Regular.woff"
            as="font"
            type="font/woff"
            crossOrigin=""
          />
          <link
            rel="preload"
            href="/fonts/Switzer/Switzer-Semibold.woff"
            as="font"
            type="font/woff"
            crossOrigin=""
          />
          <link 
            href="https://fonts.googleapis.com/css2?family=Cookie&display=swap" 
            rel="stylesheet">
            </link>
      
          {/* Globla site Tag */}
          <script
            async src={`https://www.googletagmanager.com/gtag/js?id=${GA_TRACKING_ID}`}
          />
            <script
              dangerouslySetInnerHTML={{
                __html: `     
                    (function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':
                    new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
                    j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
                    'https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);
                    })(window,document,'script','dataLayer','GTM-TWQHJFJ');
                `,
            }}
            />
            
          <script
            dangerouslySetInnerHTML={{
              __html: `     
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}   
            gtag('js', new Date());
            gtag('config', '${GA_TRACKING_ID}', {  
              page_path: window.location.pathname,
            });
          `,
            }}
          />

        </Head>

        <body>


        <script
            dangerouslySetInnerHTML={{
              __html: `     
                  window.axeptioSettings = {
                    clientId: "62fc18d1949a09b2787c019d",
                    cookiesVersion: "https://festivap-jk.fr",
                  };
                  
                  (function(d, s) {
                    var t = d.getElementsByTagName(s)[0], e = d.createElement(s);
                    e.async = true; e.src = "//static.axept.io/sdk.js";
                    t.parentNode.insertBefore(e, t);
                  })(document, "script");
              `,
                }}
              />
          <script
            async src="https://www.googletagmanager.com/ns.html?id=GTM-TWQHJFJ"
          />
          <Main />

          <NextScript />
        </body>
      </Html>
      </>);
  }
}