import React from "react";
// ** Import Icons
import { IconContext } from "react-icons";
import {
  FaAngleUp,
  FaPencilAlt,
  FaBriefcase,
  FaPaperclip,
} from "react-icons/fa";
// ** Import Hooks
import useGsapFadeIn from "../../hooks/useGsapFadeIn";

const Services: React.FC = () => {
  const [servicesIntroRef, servicesTaxesRef, servicesBookkeepingRef] =
    useGsapFadeIn();

  return (
    <article id="services" className="section">
      <div className="container | article-services">
        <section className="article-services__intro" ref={servicesIntroRef}>
          <h2 className="heading-two">
            PROVIDING YOU COMPREHENSIVE TAX, ACCOUNTING AND PAYROLL SERVICES.
          </h2>
          <p className="paragraph">
            We offer a customized approach to meet the specific needs of each of
            our clients, and strive to provide the highest level of quality and
            efficiency in all that we do.
          </p>
          <p className="paragraph">
            We understand the importance of staying compliant with tax laws and
            regulations, and work closely with our clients to help them make
            informed financial decisions.
          </p>
        </section>

        <section className="article-services__taxes" ref={servicesTaxesRef}>
          <IconContext.Provider
            value={{
              className:
                "article-services__icons article-services__icons--caret",
            }}
          >
            <FaAngleUp size={60} />
          </IconContext.Provider>
          <div className="article-services__text">
            <h3 className="heading-three">TAX ACCOUNTING & PREPARATION</h3>
            <p className="paragraph">
              Our team of certified tax professionals have a deep understanding
              of the tax code and are equipped to handle all of your tax-related
              needs.
            </p>
          </div>
        </section>

        <section
          className="article-services__finances"
          ref={servicesBookkeepingRef}
        >
          <IconContext.Provider
            value={{ className: "article-services__icons" }}
          >
            <FaPencilAlt size={48} />
          </IconContext.Provider>
          <div className="article-services__text">
            <h3 className="heading-three">FINANCIAL REPORTING</h3>
            <p className="paragraph">
              Our Financial Reporting Services go beyond numbers, providing
              comprehensive insights into your business&apos; financial health.
            </p>
          </div>
        </section>

        <section className="article-services__bookkeeping">
          <IconContext.Provider
            value={{ className: "article-services__icons" }}
          >
            <FaBriefcase size={48} />
          </IconContext.Provider>
          <div className="article-services__text">
            <h3 className="heading-three">BOOKKEEPING SERVICES</h3>
            <p className="paragraph">
              We provide a range of bookkeeping services, including ledger
              maintenance, invoicing, and expense tracking, allowing you to
              tailor our services to fit your business model seamlessly.
            </p>
          </div>
        </section>

        <section className="article-services__payroll">
          <IconContext.Provider
            value={{ className: "article-services__icons" }}
          >
            <FaPaperclip size={48} />
          </IconContext.Provider>
          <div className="article-services__text">
            <h3 className="heading-three">PAYROLL SERVICES</h3>
            <p className="paragraph">
              We take care of the entire payroll cycle, from data entry to tax
              filing. Whether you&apos;re a small business owner or part of a
              larger organization, our services scale to meet your payroll
              needs.
            </p>
          </div>
        </section>
      </div>
    </article>
  );
};
export default Services;
