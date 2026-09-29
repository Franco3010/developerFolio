import React, {useContext} from "react";
import {Fade} from "react-reveal";
import {learningGoals} from "../../portfolio";
import StyleContext from "../../contexts/StyleContext";
import "./Achievement.scss";

export default function LearningGoals() {
  const {isDark} = useContext(StyleContext);
  if (!learningGoals.display) {
    return null;
  }

  return (
    <Fade bottom duration={1000} distance="20px">
      <div className={isDark ? "dark-mode main" : "main"} id="learning-goals">
        <div className="achievement-main-div">
          <div className="achievement-header">
            <h1 className="heading achievement-heading">{learningGoals.title}</h1>
          </div>
          <p className={isDark ? "dark-mode subTitle" : "subTitle"}>
            {learningGoals.description}
          </p>
        </div>
      </div>
    </Fade>
  );
}