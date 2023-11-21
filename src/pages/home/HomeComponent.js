import React from "react";
import Header from "../../components/header/Header";
import Greeting from "../../containers/greeting/Greeting";
import Skills from "../../containers/skills/Skills";
import Footer from "../../components/footer/Footer";
import "./Home.css";
function Home(props) {
  return (
    <div className="main-home">
      <div className="header-main">
        <Header theme={props.theme} setTheme={props.setTheme} />
      </div>

      <Greeting theme={props.theme} />
      <Skills theme={props.theme} />
      <Footer theme={props.theme} />
    </div>
  );
}

export default Home;
