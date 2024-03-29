// LS
import democracyLS from "../presentations/LS/democracy.pdf";
import democracyIMGLS from "../presentations/LS/img/democracy.PNG";

import environmentLS from "../presentations/LS/environment.pdf";
import environmentIMGLS from "../presentations/LS/img/environment.PNG";

import healthAndNutritionLS from "../presentations/LS/Health-and-Nutrition.pdf";
import healthAndNutritionIMGLS from "../presentations/LS/img/health-and-nutrition.PNG";

import humanRightsAndValueLS from "../presentations/LS/Human-Rights-and-Values.pdf";
import humanRightsAndValueIMGLS from "../presentations/LS/img/human-rights-and-values.PNG";

import naturalPhenomenaLS from "../presentations/LS/natural-phenomena.pdf";
import naturalPhenomenaIMGLS from "../presentations/LS/img/natural-phenomena.PNG";

import technologyIMGLS from "../presentations/LS/img/technology.png";

import teenagersLS from "../presentations/LS/teenagers.pdf";
import teenagersIMGLS from "../presentations/LS/img/teenagers.PNG";

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

const All = () => {
  return (
    <section className="All">
      {/* democracy LS GS */}
      <div className="div_box z2">
        <a href={democracyGS} target="_blank" rel="noreferrer">
          <Tooltip title="GS Democracy" placement="right" arrow>
            <img src={democracyIMGGS} alt="Teenagers" className="box" />
          </Tooltip>
        </a>
        <span className="span">
          Done by: Lama Ghanem, Mohammad Jawad Wehbe, Zeina Merchad. (GS)
        </span>
      </div>
      <div className="div_box z2">
        <a href={democracyLS} target="_blank" rel="noreferrer">
          <Tooltip title="LS Democracy" placement="right" arrow>
            <img src={democracyIMGLS} alt="Democracy" className="box" />
          </Tooltip>
        </a>
        <span className="span">
          Done by: Farah Husseini, Rawan Sleiman. (LS)
        </span>
      </div>

      {/* environment LS GS */}

      <div className="div_box z2">
        <a href={environmentLS} target="_blank" rel="noreferrer">
          <Tooltip title="LS Environment" placement="right" arrow>
            <img src={environmentIMGLS} alt="Environment" className="box" />
          </Tooltip>
        </a>
        <span className="span">
          <span style={{ color: "red" }}>* </span>
          Done by: Yara al Israwi, Yara Tarabay, Yasmina Nawfal. (LS)
        </span>
      </div>
      {/* Health And Nutrition LS GS */}
      <div className="div_box z2">
        <a href={healthAndNutritionLS} target="_blank" rel="noreferrer">
          <Tooltip title="LS Health And Nutrition" placement="right" arrow>
            <img
              src={healthAndNutritionIMGLS}
              alt="Health And Nutrition"
              className="box"
            />
          </Tooltip>
        </a>
        <span className="span">
          Done by: Ahmad Koujan, Daniel Richani, Hadi Tarhini, Mohammad Ali
          Dika, Saied Kachmar. (LS)
        </span>
      </div>
      {/* Human Rights And Value */}
      <div className="div_box z2">
        <a href={humanRightsAndValueLS} target="_blank" rel="noreferrer">
          <Tooltip title="LS Human Rights And Value" placement="right" arrow>
            <img
              src={humanRightsAndValueIMGLS}
              alt="Human Rights And Value"
              className="box"
            />
          </Tooltip>
        </a>
        <span className="span">
          Done by: Adam Sahili, Leen Nasser, Raghad Al Agha, Rawan Ismail, Samia
          Al Rayyis. (LS)
        </span>
      </div>
      <div className="div_box z2">
        <a href={humanrightsGS} target="_blank" rel="noreferrer">
          <Tooltip title="GS Human Rights" placement="right" arrow>
            <img src={humanrightsIMGGS} alt="Teenagers" className="box" />
          </Tooltip>
        </a>
        <span className="span">
          Done by: Aya Wehbe, Julia Ayoub, Rawan Haidar. (GS)
        </span>
      </div>
      <div className="div_box z2">
        <a href={humanvaluesGS} target="_blank" rel="noreferrer">
          <Tooltip title="GS Human Values" placement="right" arrow>
            <img src={humanvaluesIMGGS} alt="Teenagers" className="box" />
          </Tooltip>
        </a>
        <span className="span">
          Done by: Khalil Salaheddine, Mohammad Swied, Rim Khattar. (GS)
        </span>
      </div>
      {/* Natural Phenomena */}
      <div className="div_box z2">
        <a href={naturalPhenomenaLS} target="_blank" rel="noreferrer">
          <Tooltip title="LS Natural Phenomena" placement="right" arrow>
            <img
              src={naturalPhenomenaIMGLS}
              alt="Natural Phenomena"
              className="box"
            />
          </Tooltip>
        </a>
        <span className="span">
          <span style={{ color: "red" }}>* </span> Done by: Carlos Harb, Lea
          Khamis, Reina Nader, Yousif Sakour, Zeina Makki. (LS)
        </span>
      </div>
      {/* Technology */}
      <div className="div_box z2">
        <a href={technologyGS} target="_blank" rel="noreferrer">
          <Tooltip title="GS Technology" placement="right" arrow>
            <img src={technologyIMGGS} alt="Technology" className="box" />
          </Tooltip>
        </a>
        <span className="span">
          <span style={{ color: "red" }}>* </span>Done by: Adib Shaaban, Hadi
          Lahham, Haidar Sharaf, Jawad Karim. (GS)
        </span>
      </div>

      <div className="div_box z2">
        <a href="https://techlow.netlify.app/" target="_blank" rel="noreferrer">
          <Tooltip title="LS Technology" placement="right" arrow>
            <img src={technologyIMGLS} alt="Technology" className="box" />
          </Tooltip>
        </a>
        <span className="span">
          <span style={{ color: "red" }}>* </span>Done by: Abed AL Ghani, Lara,
          Mohammad, Rein. (LS)
        </span>
      </div>
      {/* Teenagers */}
      <div className="div_box z2">
        <a href={teenagersGS} target="_blank" rel="noreferrer">
          <Tooltip title="GS Teenagers" placement="right" arrow>
            <img src={teenagersIMGGS} alt="Teenagers" className="box" />
          </Tooltip>
        </a>
        <span className="span">
          <span style={{ color: "red" }}>* </span>Done by: Dalia Saab, Nagham
          Okaily. (GS)
        </span>
      </div>

      <div className="div_box z2">
        <a href={teenagersLS} target="_blank" rel="noreferrer">
          <Tooltip title="LS Teenagers" placement="right" arrow>
            <img src={teenagersIMGLS} alt="Teenagers" className="box" />
          </Tooltip>
        </a>
        <span className="span">
          <span style={{ color: "red" }}>* </span>Done by: Celine Sidani, Diana
          Sibaee, Karim Daaboul, Karim Mayassi, Leen Abou Mosleh, Majd Hammoud.
          (LS)
        </span>
      </div>
    </section>
  );
};

export default All;
