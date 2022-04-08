import "./App.css";
import Tooltip from "@mui/material/Tooltip";

import healthAndNutrition from "./presentations/Health-and-Nutrition.pdf";
import healthAndNutritionIMG from "./presentations/img/health-and-nutrition.PNG";

import humanRightsAndValue from "./presentations/Human-Rights-and-Values.pdf";
import humanRightsAndValueIMG from "./presentations/img/human-rights-and-values.PNG";

import naturalPhenomena from "./presentations/natural-phenomena.pdf";
import naturalPhenomenaIMG from "./presentations/img/natural-phenomena.PNG";

import teenagers from "./presentations/teenagers.pdf";
import teenagersIMG from "./presentations/img/teenagers.PNG";

function App() {
  return (
    <>
      <div className="bodyball z1">
        <div class="ball"></div>
      </div>
      <section className="S">
        <div className="div_box z2">
          <a href={healthAndNutrition} target="_blank" rel="noreferrer">
            <Tooltip title="Health And Nutrition" placement="right" arrow>
              <img
                src={healthAndNutritionIMG}
                alt="Health And Nutrition"
                className="box"
              />
            </Tooltip>
          </a>
          <span className="span">
            Done by: Ahmad Koujan, Daniel Richani, Hadi Tarhini, Mohamad Ali
            Dika, Saied Kachmar.
          </span>
        </div>

        <div className="div_box z2">
          <a href={humanRightsAndValue} target="_blank" rel="noreferrer">
            <Tooltip title="Human Rights And Value" placement="right" arrow>
              <img
                src={humanRightsAndValueIMG}
                alt="Human Rights And Value"
                className="box"
              />
            </Tooltip>
          </a>
          <span className="span">
            Done by: Adam Sahili, Leen Nasser, RaghadAl Agha, Rawan Ismail,
            SamiaAl Rayyis.
          </span>
        </div>

        <div className="div_box z2">
          <a href={naturalPhenomena} target="_blank" rel="noreferrer">
            <Tooltip title="Natural Phenomena" placement="right" arrow>
              <img
                src={naturalPhenomenaIMG}
                alt="Natural Phenomena"
                className="box"
              />
            </Tooltip>
          </a>
          <span className="span">
            Done by: Carlos Harb, Lea Khamis, Reina Nader, Yousif Sakour, Zeina
            Makki.
          </span>
        </div>

        <div className="div_box z2">
          <a href={teenagers} target="_blank" rel="noreferrer">
            <Tooltip title="Teenagers" placement="right" arrow>
              <img src={teenagersIMG} alt="Teenagers" className="box" />
            </Tooltip>
          </a>
          <span className="span">
            Done by: Celine Sidani, Diana Sibaee, Karim Daaboul, Karim Mayassi,
            Leen Abou Mosleh, Majd Hammoud.
          </span>
        </div>
      </section>
    </>
  );
}

export default App;
