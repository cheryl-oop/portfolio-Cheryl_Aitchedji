import { asset } from "../utils/assets.ts";
import "./Footer.css";
export const Footer = () => {
  return (
    <>
      <section className="contact">
        <div className="contact-info">
          <h3>Lets make something happen.</h3>
          <p>
            I'm currently looking for{" "}
            <span className="bold-word">an internship</span> and would love to
            connect with you.
          </p>
          <div className="contact-links">
            <a className="button" href="mailto:cheryl.aitchedji@gmail.com.com">
              Get in touch
            </a>
            <a
              className="button"
              href="https://github.com/cheryl-oop/cheryl-oop.git"
            >
              Github
            </a>
            <a
              className="button"
              href="https://www.linkedin.com/in/cheryl-aitchedji/"
            >
              Linkdin
            </a>
          </div>
        </div>
        <img src={asset("/images/doodles/cher-mail.svg")} />
      </section>
    </>
  );
};
