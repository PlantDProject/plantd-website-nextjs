"use client";
import Script from "next/script";


const HotJar = () => {
  let HOTJAR_ID = '5237847' //test.plantd.life HOTJAR_ID
  if (process.env.NEXT_PUBLIC_ENV === "production") {
    HOTJAR_ID = "3904986"  //plantd.life HOTJAR_ID
  }

  return (
    <Script id="hotjar">
      {`
          (function (h, o, t, j, a, r) {
            h.hj =
              h.hj ||
              function () {
                // eslint-disable-next-line prefer-rest-params
                (h.hj.q = h.hj.q || []).push(arguments);
              };
            h._hjSettings = { hjid: ${HOTJAR_ID}, hjsv: 6 };
            a = o.getElementsByTagName("head")[0];
            r = o.createElement("script");
            r.async = 1;
            r.src = t + h._hjSettings.hjid + j + h._hjSettings.hjsv;
            a.appendChild(r);
          })(window, document, "https://static.hotjar.com/c/hotjar-", ".js?sv=");
        `}
    </Script>
  );

};

export default HotJar;