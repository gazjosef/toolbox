import Link from "next/link";
import Navbar from "./Navbar";

const Header: React.FC = () => {
  return (
    <header className="header | u-flex u-items-center | u-clr-white">
      <div className="container | u-flex u-items-center u-justify-between">
        <Link href="#" passHref>
          <h2 className="navbar-heading | u-uppercase  u-clr-white">
            Sunderland Accounting
          </h2>
        </Link>

        <Navbar />
      </div>
    </header>
  );
};

export default Header;
