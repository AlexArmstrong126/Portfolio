import React from "react";
import ProjectLanguages from "../projectLanguages/ProjectLanguages";
import "./ProjectCard.css";
import { Fade } from "react-reveal";
import { style } from "glamor";

export default function ProjectCard({ repo, theme }) {
  function openRepoinNewTab(url) {
    var win = window.open(url, "_blank");
    win.focus();
  }

  const styles = style({
    color: "rgb(88, 96, 105)",
    backgroundColor: "rgb(255, 255, 255)",
    boxShadow: "rgba(0, 0, 0, 0.2) 0px 10px 30px -15px",
    padding: "2rem",
    cursor: "pointer",
    borderRadius: "5px",
    height: "100%",
    transition: "all 0.2s ease-in-out",
    ":hover": {
      boxShadow: `${theme.imageDark} 0 2px 15px`,
    },
  });

  return (
    <div class="flex-container">
      <Fade bottom duration={2000} distance="40px">
        <div
          {...styles}
          key={repo.id}
          onClick={() => openRepoinNewTab(repo.url)}
          style={{ backgroundColor: theme.projectCard, overflow: "auto" }}
        >
          <div className="repo-name-div">
            <p className="repo-name" style={{ color: theme.text }}>
              {repo.name}
            </p>
          </div>
          <div className="repo-description-container" style={{}}>
            {" "}
            <p className="repo-description" style={{ color: theme.text }}>
              {repo.status}
            </p>
            {/* {repo.description} */}
            {repo.descriptions.map((sentence, index) => {
              return (
                <p
                  key={index}
                  className="repo-description"
                  style={{ color: theme.text }}
                >
                  {sentence}
                </p>
              );
            })}
          </div>
          {/* 
          <div
            className="repo-details"
            style={{
              backgroundColor: theme.name === "dark" ? "#ffffff" : "#1D1D1D",
              justifyContent: "center",
              padding: "10px",
              borderRadius: "15px",
              overflow: "auto",
            }}
          >
            <ProjectLanguages logos={repo.languages} />
          </div> */}
        </div>
      </Fade>
    </div>
  );
}
