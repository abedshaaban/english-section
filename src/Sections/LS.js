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

//
import "../App.css";

//  mui
import Tooltip from "@mui/material/Tooltip";

const LS = () => {
  return (
    <section className="All">
      <div className="div_box z2">
        <a href={democracyLS} target="_blank" rel="noreferrer">
          <Tooltip title="LS Democracy" placement="right" arrow>
            <img src={democracyIMGLS} alt="Democracy" className="box" />
          </Tooltip>
        </a>
        <span className="span">Done by: Farah Husseini, Rawan Sleiman.</span>
      </div>

      <div className="div_box z2">
        <a href={environmentLS} target="_blank" rel="noreferrer">
          <Tooltip title="LS Environment" placement="right" arrow>
            <img src={environmentIMGLS} alt="Environment" className="box" />
          </Tooltip>
        </a>
        <span className="span">
          <span style={{ color: "red" }}>* </span>
          Done by: Yara al Israwi, Yara Tarabay, Yasmina Nawfal.
        </span>
      </div>

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
          Dika, Saied Kachmar.
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
          Al Rayyis.
        </span>
      </div>

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
          <span style={{ color: "red" }}>* </span>
          Done by: Carlos Harb, Lea Khamis, Reina Nader, Yousif Sakour, Zeina
          Makki.
        </span>
      </div>
      <div className="div_box z2">
        <a href="https://techlow.netlify.app/" target="_blank" rel="noreferrer">
          <Tooltip title="LS Technology" placement="right" arrow>
            <img src={technologyIMGLS} alt="Technology" className="box" />
          </Tooltip>
        </a>
        <span className="span">
          <span style={{ color: "red" }}>* </span>
          Done by: Abed AL Ghani, Lara, Mohammad, Rein.
        </span>
      </div>

      <div className="div_box z2">
        <a href={teenagersLS} target="_blank" rel="noreferrer">
          <Tooltip title="LS Teenagers" placement="right" arrow>
            <img src={teenagersIMGLS} alt="Teenagers" className="box" />
          </Tooltip>
        </a>
        <span className="span">
          <span style={{ color: "red" }}>* </span>
          Done by: Celine Sidani, Diana Sibaee, Karim Daaboul, Karim Mayassi,
          Leen Abou Mosleh, Majd Hammoud.
        </span>
      </div>
    </section>
  );
};

export default LS;
