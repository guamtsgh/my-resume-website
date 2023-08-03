const SocialButton = ({ data }) => {
  return (
    <div className="circleButtonContainer">
      {data.map((item, index) => (
        <a href={item.link} target="_blank" key={index}>
          <button
            key={index}
            style={{ backgroundColor: item.color }}
            className="circleButton"
          >
            <img src={item.src} className="icon" />
          </button>
        </a>
      ))}
    </div>
  );
};

export default SocialButton;
