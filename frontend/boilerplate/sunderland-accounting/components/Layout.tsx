import Meta from "./Meta.tsx";
import { useRouter } from "next/router";

// import Topbar from "@/components/Layout/Topbar";
import Navbar from "./Layout/Navbar.tsx";
// import Header from "@/components/Layout/Header"; // Commented out as per your code

// import Footer from "@/components/Layout/Footer";

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
      {/* <Topbar /> */}
      <Navbar />
      {/* <Header /> */}
      {router.pathname === "/"}{" "}
      {/* It seems like there's a condition but not being used */}
      <main>{children}</main>
      {/* <Footer /> */}
    </>
  );
};

export default Layout;
