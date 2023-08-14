import "@/styles/globals.css";
import type { AppProps } from "next/app";
import Script from "next/script";

export default function App({ Component, pageProps }: AppProps) {
  return (
    <>
      {/* <Script
        id="tandymScript"
        src="https://assets.platform.bytandym.com/custom-mapps-assets/tandym-mapps-custom-v1.js?tandym_api_key=185c732e-02f0-4b01-bd57-812d70992a62-42485d6c-c010-42a0-bbc3-bfc650acc791-1689284239728"
        async
        strategy="beforeInteractive"
        onLoad={() => console.log("loaded")}
        onError={() => console.log("error")}
      /> */}
      <Component {...pageProps} />
    </>
  );
}
