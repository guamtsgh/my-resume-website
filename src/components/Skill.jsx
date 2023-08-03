import SkillList from "./SkillList.jsx";
import skillListData from "../data/skillListData.jsx";
import "../css/Skill.css";

function Skill() {
  return (
    <div className="skillContainer">
      <p className="topic semiBold font48 fontBlack">Why Hire Me?</p>
      <SkillList data={skillListData} />
    </div>
  );
}

export default Skill;
