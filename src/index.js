import React from "react";
import ReactDOM from "react-dom";
import Card from "./components/Card.jsx";

export default function App() {
  return (
    <div className="wrapper">
      <div className="title1">Reliable, efficient delivery</div>
      <div className="title2">Powered by Technology</div>
      <div className="tagline">
        Our Artificial Intelligence powered tools use millions of project data
        points to ensure that your project is successful
      </div>
      <div className="card__container">
        <Card
          title="Supervisor"
          description="Monitors activity to identify project roadblocks"
          img="./images/icon-supervisor.svg"
          id="card--s"
        />
        <Card
          title="Team Builder"
          description="Scans our talent network to create the optimal team for your project"
          img="./images/icon-team-builder.svg"
          id="card--tb"
        />
        <Card
          title="Karma"
          description="Regularly evaluates our talent to ensure quality"
          img="./images/icon-karma.svg"
          id="card--k"
        />
        <Card
          title="Calculator"
          description="Uses data from past projects to provide better delivery estimates"
          img="./images/icon-calculator.svg"
          id="card--c"
        />
      </div>
    </div>
  );
}

ReactDOM.render(<App />, document.getElementById("root"));
