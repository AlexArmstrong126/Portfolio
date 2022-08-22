import React from "react";
import ExperienceCard from "../../components/experienceCard/ExperienceCard.js";
import "./ExperienceAccordion.css";
import { DarkTheme, LightTheme, ThemeProvider } from "baseui";

function ExperienceAccordion(props) {
  const theme = props.theme;

  return (
    <div
      className="experience-accord"
      style={{
        backgroundColor: theme.name === "light" ? "#ffffff" : "#1D1D1D",
      }}
    >
      {console.log(theme)}

      {props.sections.map((section) => {
        return section["experiences"].map((experience) => {
          return <ExperienceCard experience={experience} theme={theme} />;
        });
      })}
    </div>
  );
}

export default ExperienceAccordion;
