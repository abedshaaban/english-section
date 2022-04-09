import "./Footer.css";

function Footer() {
  return (
    <div className="footer">
      <section className="footer_S">
        <section className="S_community">
          <span>Resources:</span>
          <a href="https://student-affair.netlify.app/#/12" target="_blank">go to resources</a>
        </section>

        <section className="S_community">
          <span>Community:</span>
          <span>contact us</span>
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
