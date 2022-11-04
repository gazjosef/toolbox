import { Layout } from "../components/Layout.jsx";
import type { AppProps } from "next/app";
import "../styles/main.scss";

export default function App({ Component, pageProps }: AppProps) {
  return (
    <Layout>
      <Component {...pageProps} />
    </Layout>
  );
}
