import { ReactNode } from "react";
import Header from "./Header"; // Adjust the path as per your project structure
import Footer from "./Footer"; // Adjust the path as per your project structure

interface LayoutProps {
  children: ReactNode;
}

const Layout = ({ children }: LayoutProps) => {
  return (
    <div>
      <Header />
      {children}
      <Footer />
    </div>
  );
};

export default Layout;
