import { useRouter } from "next/router";
import { Meta } from "../components/Meta";
import { Navbar } from "../components/Navbar.tsx";
import { Infobar } from "../components/Infobar.tsx";
import { Footer } from "../components/Footer.tsx";

export const Layout = ({ children }) => {
  const router = useRouter();

  return (
    <>
      <header>
        <Meta />
      </header>

      <Infobar />

      <Navbar />

      {router.pathname === "/"}

      <main>{children}</main>

      <Footer />
    </>
  );
};
