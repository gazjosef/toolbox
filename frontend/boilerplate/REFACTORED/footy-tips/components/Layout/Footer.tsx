import React from "react";

const Footer: React.FC = () => {
  const currentYear: number = new Date().getFullYear();

  return (
    <footer className="u-bg-black-800 u-clr-white-0">
      <section className="container | u-mt-md u-mx-auto u-py-2">
        <p className="u-center-text">
          Copyright <span className="u-clr-secondary-100">&copy;</span> Gareth
          Hind {currentYear}
        </p>
      </section>
    </footer>
  );
};

export default Footer;
