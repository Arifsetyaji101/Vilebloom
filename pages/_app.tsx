import Head from "next/head";
import type { AppProps } from "next/app";
import { useRouter } from "next/router";
import { useEffect } from "react";

import Favicon from "../components/atoms/Favicon";

import "bootstrap/dist/css/bootstrap.min.css";
import "../styles/style.css";

export default function App({ Component, pageProps }: AppProps) {
  return (
    <>
      <Head>
        <title>Vilebloom</title>
        <meta name="description" content="Generated by create next app" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />

        <link
          href="https://cdn.jsdelivr.net/npm/bootstrap@5.3.0-alpha1/dist/css/bootstrap.min.css"
          rel="stylesheet"
          integrity="sha384-GLhlTQ8iRABdZLl6O3oVMWSktQOp6b7In1Zl3/Jr59b6EGGoI1aFkw7cmDA6j6gD"
          crossOrigin="anonymous"
        />
        <script
          src="https://cdn.jsdelivr.net/npm/@popperjs/core@2.11.6/dist/umd/popper.min.js"
          integrity="sha384-oBqDVmMz9ATKxIep9tiCxS/Z9fNfEXiDAYTujMAeBAsjFuCZSmKbSSUnQlmh/jp3"
          crossOrigin="anonymous"
        ></script>
        <script
          src="https://cdn.jsdelivr.net/npm/bootstrap@5.3.0-alpha1/dist/js/bootstrap.min.js"
          integrity="sha384-mQ93GR66B00ZXjt0YO5KlohRA5SY2XofN4zfuZxLkoj1gXtW8ANNCe9d5Y3eG5eD"
          crossOrigin="anonymous"
        ></script>
        {/* font */}
        <link
          rel="preload"
          href="/meltow-font/MeltowSan100-Rust.woff2"
          as="font"
          type="font/woff2"
          crossOrigin="anonymous"
        ></link>
        <link
          rel="preload"
          href="/meltow-font/MeltowSan200-Rust.woff2"
          as="font"
          type="font/woff2"
          crossOrigin="anonymous"
        ></link>
        <link
          rel="preload"
          href="/meltow-font/MeltowSan300-Rust.woff2"
          as="font"
          type="font/woff2"
          crossOrigin="anonymous"
        ></link>
        <Favicon type="light" />
      </Head>
      <Component {...pageProps} />
    </>
  );
}
