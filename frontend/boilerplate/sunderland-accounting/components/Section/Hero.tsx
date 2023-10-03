import Link from "next/link";

const Hero = () => {
  return (
    <article id="home" className="article-home u-relative">
      {/* <Header /> */}
      <div className="container">
        <h1 className="heading-one">
          SMARTER WAY TO FILE TAX RETURN{" "}
          <span>IN PERSON. BY PHONE. ONLINE</span>
        </h1>
        <p className="paragraph">
          We help lodging tax return Sydney from anywhere. Get your biggest tax
          refund with no tax knowledge needed.
        </p>
        <button className="btn btn--home">
          {/* <Link href="#">
            <a>Book Appointment</a>
          </Link> */}
        </button>
      </div>
    </article>
  );
};
export default Hero;
