import Meta from "./Meta.tsx";
import { useRouter } from "next/router";

import Topbar from "./Layout/Topbar.tsx";
// import Header from "./Layout/Header.tsx";
import Footer from "./Layout/Footer.tsx";

interface LayoutProps {
  children: React.ReactNode;
}

const Layout: React.FC<LayoutProps> = ({ children }) => {
  const router = useRouter();

  return (
    <>
      <header>
        <Meta />
      </header>
      <Topbar />

      {router.pathname === "/"}
      <main>{children}</main>
      <Footer />
    </>
  );
};

export default Layout;
