import Link from "next/link";
import Navbar from "./Navbar";

const Header: React.FC = () => {
  return (
    <header className="header">
      <div className="container">
        <Link href="#" passHref>
          <h2 className="heading-logo">Sunderland Accounting</h2>
        </Link>

        <Navbar />
      </div>
    </header>
  );
};

export default Header;
