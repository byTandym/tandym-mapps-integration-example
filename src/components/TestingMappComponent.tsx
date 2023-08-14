// @ts-nocheck
import { useState } from "react";

export const TestingMappComponent = () => {
  const onClickDetectTandymTag = () => {
    (window as any).detectTandymTag();
  };
  const onClickDetectTandymExtraTag = () => {
    (window as any).detectTandymTagExtra();
  };

  const [showIframe, setShowIframe] = useState(false);

  const onClickShowIframe = () => {
    setShowIframe((prevState) => !prevState);
  };

  return (
    <>
      <div
        style={{
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          alignContent: "center",
        }}
      >
        <h1>PDP mApp</h1>
        <button
          onClick={onClickDetectTandymTag}
          style={{
            padding: "10px",
            borderRadius: "1rem",
            fontSize: "16px",
            width: "300px",
          }}
        >
          Call to detectTandymTag function
        </button>
        <tandym-mapps
          data-tandym-widget="PDP"
          data-tandym-product-price="5620"
        ></tandym-mapps>

        <h1>Cart mApp</h1>
        <button
          onClick={onClickDetectTandymExtraTag}
          style={{
            padding: "10px",
            borderRadius: "1rem",
            fontSize: "16px",
            width: "300px",
          }}
        >
          Call to detectTandymExtraTag function
        </button>
        <tandym-mapps-mobile
          data-tandym-widget="CART"
          data-tandym-cart-total="17000"
        ></tandym-mapps-mobile>
      </div>
      <div style={{ width: "500px" }}>
        <h1>Test iFrame</h1>
        <button
          onClick={onClickShowIframe}
          style={{
            padding: "10px",
            borderRadius: "1rem",
            fontSize: "16px",
            width: "300px",
          }}
        >
          Show iFrame
        </button>
        {showIframe && (
          <iframe
            id="iframeTandymStandalone"
            src='https://app.bytandym.com/sdk?apiKey=bcad4546-a610-4811-8f2c-fc0e597d9456-ebcd2b13-ea8e-4af9-80a0-e8e5fea8a8b7-1654567299600&domain=www.twetest2.com&from=about_us&type=standalone&page=standalone/phone&data={"merchantURL":"URL"}'
            width="100%"
            height="800px"
          ></iframe>
        )}
      </div>
    </>
  );
};
