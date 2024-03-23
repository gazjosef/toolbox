import Link from "next/link";
import Header from "../Layout/Header";

const Hero: React.FC = () => {
  return (
    <article id="home" className="article-home">
      <Header />
      <div className="container">
        <h1 className="heading-hero">
          SMARTER WAY TO FILE TAX RETURN{" "}
          <span>IN PERSON. BY PHONE. ONLINE</span>
        </h1>
        <p className="paragraph">
          We help lodging tax return Sydney from anywhere. Get your biggest tax
          refund with no tax knowledge needed.
        </p>
        <button className="btn btn--home">
          <Link href="#">Book Appointment</Link>
        </button>
      </div>
    </article>
  );
};
export default Hero;
