import "./Styles/Footer.css";

import { Link } from "react-router-dom";

function Footer() {
  return (
    <div className="footer">
      <section className="footer_S">
        <section className="S_community">
          <span>Resources:</span>
          <a
            href="https://student-affair.netlify.app/#/12"
            target="_blank"
            rel="noreferrer"
          >
            go to resources
          </a>
          <Link to="/">home</Link>
        </section>

        <section className="S_community">
          <span>Community:</span>
          <Link to="/about">about</Link>
          <Link to="/contact-us">contact us</Link>
          <span>terms & conditions</span>
          <span>privacy</span>
        </section>

        <section className="S_community">
          done by: abed al ghani shaaban
        </section>
      </section>
    </div>
  );
}

export default Footer;
