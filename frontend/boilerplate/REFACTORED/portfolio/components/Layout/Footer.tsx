import React from "react";

const Footer: React.FC = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="footer">
      <div>Copyright &copy; Gareth Hind {currentYear}</div>
    </footer>
  );
};
export default Footer;
