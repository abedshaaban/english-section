// GS
import democracyGS from "../presentations/GS/democracy.pdf";
import democracyIMGGS from "../presentations/GS/img/democracy.PNG";

import humanvaluesGS from "../presentations/GS/human-values.pdf";
import humanvaluesIMGGS from "../presentations/GS/img/human-values.PNG";

import teenagersGS from "../presentations/GS/teenagers.pdf";
import teenagersIMGGS from "../presentations/GS/img/teenagers.PNG";

import technologyGS from "../presentations/GS/technology.pdf";
import technologyIMGGS from "../presentations/GS/img/technology.PNG";

import humanrightsGS from "../presentations/GS/human-rights.pdf";
import humanrightsIMGGS from "../presentations/GS/img/human-rights.PNG";

//  mui
import Tooltip from "@mui/material/Tooltip";

// react
import "../App.css";

const GS = () => {
  return (
    <section className="All">
      <div className="div_box z2">
        <a href={democracyGS} target="_blank" rel="noreferrer">
          <Tooltip title="GS Democracy" placement="right" arrow>
            <img src={democracyIMGGS} alt="Teenagers" className="box" />
          </Tooltip>
        </a>
        <span className="span">
          Done by: Lama Ghanem, Mohammad Jawad Wehbe, Zeina Merchad.
        </span>
      </div>

      <div className="div_box z2">
        <a href={humanrightsGS} target="_blank" rel="noreferrer">
          <Tooltip title="GS Human Rights" placement="right" arrow>
            <img src={humanrightsIMGGS} alt="Teenagers" className="box" />
          </Tooltip>
        </a>
        <span className="span">
          Done by: Aya Wehbe, Julia Ayoub, Rawan Haidar.
        </span>
      </div>

      <div className="div_box z2">
        <a href={technologyGS} target="_blank" rel="noreferrer">
          <Tooltip title="GS Technology" placement="right" arrow>
            <img src={technologyIMGGS} alt="Technology" className="box" />
          </Tooltip>
        </a>
        <span className="span">
          <span style={{ color: "red" }}>* </span>Done by: Adib Shaaban, Hadi
          Lahham, Haidar Sharaf, Jawad Karim.
        </span>
      </div>

      <div className="div_box z2">
        <a href={teenagersGS} target="_blank" rel="noreferrer">
          <Tooltip title="GS Teenagers" placement="right" arrow>
            <img src={teenagersIMGGS} alt="Teenagers" className="box" />
          </Tooltip>
        </a>
        <span className="span">
          <span style={{ color: "red" }}>* </span>Done by: Dalia Saab, Nagham
          Okaily.
        </span>
      </div>

      <div className="div_box z2">
        <a href={humanvaluesGS} target="_blank" rel="noreferrer">
          <Tooltip title="GS Human Values" placement="right" arrow>
            <img src={humanvaluesIMGGS} alt="Teenagers" className="box" />
          </Tooltip>
        </a>
        <span className="span">
          Done by: Khalil Salaheddine, Mohammad Swied, Rim Khattar.
        </span>
      </div>
    </section>
  );
};

export default GS;
