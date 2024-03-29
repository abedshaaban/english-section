import "../App.css";
import { useState } from "react";

// mui
import PropTypes from "prop-types";
import SwipeableViews from "react-swipeable-views";
import { useTheme } from "@mui/material/styles";
import Tabs from "@mui/material/Tabs";
import Tab from "@mui/material/Tab";
import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";
import All from "../Sections/All";
import GS from "../Sections/GS";
import LS from "../Sections/LS";
import Header from "./Header";

function TabPanel(props) {
  const { children, value, index, ...other } = props;

  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`full-width-tabpanel-${index}`}
      aria-labelledby={`full-width-tab-${index}`}
      {...other}
    >
      {value === index && (
        <Box sx={{ p: 3 }}>
          <Typography>{children}</Typography>
        </Box>
      )}
    </div>
  );
}

TabPanel.propTypes = {
  children: PropTypes.node,
  index: PropTypes.number.isRequired,
  value: PropTypes.number.isRequired,
};

function a11yProps(index) {
  return {
    id: `full-width-tab-${index}`,
    "aria-controls": `full-width-tabpanel-${index}`,
  };
}

export const Home = () => {
  const theme = useTheme();
  const [value, setValue] = useState(0);

  const handleChange = (e, newValue) => {
    setValue(newValue);
  };

  const handleChangeIndex = (index) => {
    setValue(index);
  };
  return (
    <>
      <Header />
      <div className="bodyball z1">
        <div className="ball"></div>
      </div>
      <div
        style={{
          display: "flex",
          justifyContent: "flex-end",
          paddingRight: "20px",
          paddingTop: "13px",
        }}
      >
        <span style={{ color: "red", paddingRight: "5px" }}>*</span>
        required for official exams
      </div>
      <section className="S">
        <Box
          className="z2"
          sx={{
            width: "100%",
            display: "flex",
            justifyContent: "center",
            flexDirection: "column",
          }}
        >
          <Tabs
            value={value}
            onChange={handleChange}
            textColor="secondary"
            indicatorColor="secondary"
            aria-label="secondary tabs example"
            centered
          >
            <Tab
              sx={{
                color: "white",
                fontSize: "20px",
                fontWeight: "900",
              }}
              value={Number("0")}
              label="all"
              {...a11yProps(0)}
            />
            <Tab
              sx={{
                color: "white",
                fontSize: "20px",
                fontWeight: "900",
              }}
              value={Number("1")}
              label="GS"
              {...a11yProps(1)}
            />
            <Tab
              sx={{
                color: "white",
                fontSize: "20px",
                fontWeight: "900",
              }}
              value={Number("2")}
              label="LS"
              {...a11yProps(2)}
            />
            <Tab
              sx={{
                color: "white",
                fontSize: "20px",
                fontWeight: "900",
              }}
              value={Number("3")}
              label="SE"
              {...a11yProps(3)}
            />
          </Tabs>

          <SwipeableViews
            className="z2"
            axis={theme.direction === "rtl" ? "x-reverse" : "x"}
            index={value}
            onChangeIndex={handleChangeIndex}
          >
            <TabPanel value={value} index={0} dir={theme.direction}>
              <All />
            </TabPanel>

            <TabPanel value={value} index={1} dir={theme.direction}>
              <GS />
            </TabPanel>

            <TabPanel value={value} index={2} dir={theme.direction}>
              <LS />
            </TabPanel>

            <TabPanel value={value} index={3} dir={theme.direction}>
              Coming soon :/
            </TabPanel>
          </SwipeableViews>
        </Box>
      </section>
    </>
  );
};
