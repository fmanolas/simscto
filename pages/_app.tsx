// pages/_app.tsx
import "../app/globals.css"; // Adjust the path based on the structure
import type { AppProps } from "next/app";

export default function App({ Component, pageProps }: AppProps) {
  return <Component {...pageProps} />;
}
