const SkillList = ({ data }) => {
  return (
    <div className="skillContainer">
      {data.map((item, index) => {
        return (
          <div className="skill" key={index}>
            <img src={item.image} />
            <div>
              <p>{item.skill}</p>
              <p>{item.description}</p>
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default SkillList;
