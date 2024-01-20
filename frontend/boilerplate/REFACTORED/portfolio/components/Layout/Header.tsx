import React from "react";
import Link from "next/link";
import Navbar from "./Navbar";

const Header: React.FC = () => {
  return (
    <header className="header">
      <div className="container | u-flex u-justify-between u-uppercase">
        <Link href="/">
          {/* <a className="u-fw-semi-bold u-text-black u-uppercase"> */}
          <span className="u-fw-bold u-text-primary-300">Gareth Hind</span>{" "}
          <span className="header__span">Web Developer</span>
          {/* </a> */}
        </Link>
        <Navbar />
      </div>
    </header>
  );
};
export default Header;
