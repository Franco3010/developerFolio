import React, {useContext} from "react";
import Headroom from "react-headroom";
import "./Header.scss";
import ToggleSwitch from "../ToggleSwitch/ToggleSwitch";
import StyleContext from "../../contexts/StyleContext";
import {
  greeting,
  workExperiences,
  skillsSection,
  openSource,
  blogSection,
  talkSection,
  achievementSection,
  learningGoals,
  bigProjects,
  resumeSection
} from "../../portfolio";

function Header() {
  const {isDark} = useContext(StyleContext);
  const viewExperience = workExperiences.display;
  const viewOpenSource = openSource.display;
  const viewSkills = skillsSection.display;
  const viewAchievement = achievementSection.display;
  const viewLearningGoals = learningGoals.display;
  const viewProjects = bigProjects.display;
  const viewBlog = blogSection.display;
  const viewTalks = talkSection.display;
  const viewResume = resumeSection.display;

  return (
    <Headroom>
      <header className={isDark ? "dark-menu header" : "header"}>
        <a href="/" className="logo">
          <span className="grey-color"> &lt;</span>
          <span className="logo-name">{greeting.username}</span>
          <span className="grey-color">/&gt;</span>
        </a>
        <input className="menu-btn" type="checkbox" id="menu-btn" />
        <label
          className="menu-icon"
          htmlFor="menu-btn"
          style={{color: "white"}}
        >
          <span className={isDark ? "navicon navicon-dark" : "navicon"}></span>
        </label>
        <ul className={isDark ? "dark-menu menu" : "menu"}>
          {viewProjects && (
            <li>
              <a href="#projects">主な開発実績</a>
            </li>
          )}
          {viewProjects && (
            <li>
              <a href="#project-resources">設計資料</a>
            </li>
          )}
          {viewSkills && (
            <li>
              <a href="#skills">スキル</a>
            </li>
          )}
          {viewExperience && (
            <li>
              <a href="#experience">職歴</a>
            </li>
          )}
          {viewOpenSource && (
            <li>
              <a href="#opensource">OSS</a>
            </li>
          )}
          {viewAchievement && (
            <li>
              <a href="#achievements">資格・実績</a>
            </li>
          )}
          {viewLearningGoals && (
            <li>
              <a href="#learning-goals">今後の学習目標</a>
            </li>
          )}
          {viewBlog && (
            <li>
              <a href="#blogs">ブログ</a>
            </li>
          )}
          {viewTalks && (
            <li>
              <a href="#talks">登壇</a>
            </li>
          )}
          {viewResume && (
            <li>
              <a href={greeting.resumeLink} download="CV_Ngo_Duc_Anh.xlsx">
                職務経歴書をダウンロード
              </a>
            </li>
          )}
          <li>
            <a href="#contact">連絡先</a>
          </li>
          <li>
            {/* eslint-disable-next-line jsx-a11y/anchor-is-valid */}
            <a>
              <ToggleSwitch />
            </a>
          </li>
        </ul>
      </header>
    </Headroom>
  );
}
export default Header;
