import { Button } from "@mui/material";
import "./Styles/Header.css";

function Header() {
  return (
    <section className="header">
      <a
        href="https://student-affair.netlify.app/#/12"
        target="_blank"
        rel="noreferrer"
      >
        <Button
          variant="outlined"
          sx={{
            color: "#9c27b0",
            borderColor: "#9c27b0",
            fontSize: "15px",
            fontWeight: "800",
          }}
        >
          go to resources
        </Button>
      </a>
    </section>
  );
}

export default Header;
