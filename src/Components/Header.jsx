import { Button } from "@mui/material";
import "./Styles/Header.css";

function Header() {
  return (
    <section className="header">
      <a href="https://student-affair.netlify.app/#/12" target="_blank">
        <Button variant="outlined">go to resources</Button>
      </a>
    </section>
  );
}

export default Header;
