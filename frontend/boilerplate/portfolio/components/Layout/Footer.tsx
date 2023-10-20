import React from "react";

const Footer: React.FC = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="footer | u-bg-black-800 u-clr-white-0">
      <section className="container | u-margin-top-medium u-mx-auto">
        <p className="u-center-text">
          Copyright <span className="u-clr-secondary-100">&copy;</span> Ant
          Software {currentYear}
        </p>
      </section>
    </footer>
  );
};
export default Footer;
