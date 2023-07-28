import { Html, Head, Main, NextScript } from "next/document";
import Script from "next/script";

export default function Document() {
  return (
    <Html lang="en">
      <Head>
        {/* 
          -- One way to handle script --
          <script
            defer
            type="text/javascript"
            src="https://assets.platform.bytandym.com/custom-mapps-assets/tandym-mapps-custom-v1.js?tandym_api_key=185c732e-02f0-4b01-bd57-812d70992a62-42485d6c-c010-42a0-bbc3-bfc650acc791-1689284239728"
          ></script>

         -- Second way to handle the script --
          <Script
            src="https://assets.platform.bytandym.com/custom-mapps-assets/tandym-mapps-custom-v1.js?tandym_api_key=185c732e-02f0-4b01-bd57-812d70992a62-42485d6c-c010-42a0-bbc3-bfc650acc791-1689284239728"
            strategy="lazyOnload"
          /> 
        */}
      </Head>
      <body>
        <Main />
        <NextScript />

        {/* Third way to handle the script */}
        {/* <Script
          src="https://assets.platform.bytandym.com/custom-mapps-assets/tandym-mapps-custom-v1.js?tandym_api_key=185c732e-02f0-4b01-bd57-812d70992a62-42485d6c-c010-42a0-bbc3-bfc650acc791-1689284239728"
          strategy="lazyOnload"
        /> */}
      </body>
    </Html>
  );
}
