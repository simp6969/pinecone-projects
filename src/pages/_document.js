import { Html, Head, Main, NextScript } from "next/document";

export default function Document() {
  return (
    <Html lang="en">
      <Head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin />
        <link
          href="https://fonts.googleapis.com/css2?family=Poppins:wght@600&family=Roboto&display=swap"
          rel="stylesheet"
        />
        <link
          rel="style"
          href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.4.2/css/all.min.css"
        />
      </Head>
      <body style={{ fontFamily: "Poppins", overflowX: "hidden" }}>
        <Main />
        <NextScript />
      </body>
    </Html>
  );
}
