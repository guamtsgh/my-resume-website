import SkillList from "./SkillList.jsx";
import skillListData from "../data/skillListData.jsx";
console.log(skillListData);

function Skill() {
  return (
    <div className="skill-container">
      <h1>Why Hire Me?</h1>
      <SkillList data={skillListData} />
    </div>
  );
}

export default Skill;
