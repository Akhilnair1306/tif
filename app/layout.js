import localFont from "next/font/local";
import "./globals.css";
import Head from "next/head";


export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <Head>
      <link
  href="https://fonts.googleapis.com/css2?family=Open+Sans:wght@300;400;600;700&family=Source+Sans+Pro:wght@300;400;600;700&family=Poppins:wght@300;400;600;700&display=swap"
  rel="stylesheet"
/>
      </Head>
      <body
      >
        {children}
      </body>
    </html>
  );
}
