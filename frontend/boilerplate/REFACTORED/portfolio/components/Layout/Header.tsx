import React from "react";
import Link from "next/link";
import Navbar from "./Navbar";

const Header: React.FC = () => {
  return (
    <header className="header">
      <div className="container">
        <div className="heading-logo">
          <Link href="https://gareth-hind-portfolio.vercel.app/">
            <span>Gareth Hind</span> Web Developer
          </Link>
        </div>

        <Navbar />
      </div>
    </header>
  );
};
export default Header;
