const SkillList = ({ data }) => {
  return (
    <div className="skillList">
      {data.map((item, index) => {
        return (
          <div className="eachSkill" key={index}>
            <button className="imgButton">
              <img src={item.image} />
            </button>
            <div className="skillDetail">
              <p className="medium font24 fontBlack">{item.skill}</p>
              <p className="font18 fontGray center">{item.description}</p>
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default SkillList;
