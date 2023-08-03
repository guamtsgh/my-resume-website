const SocialButton = ({ data }) => {
  return (
    <div className="circleButtonContainer">
      {data.map((item, index) => (
        <button
          key={index}
          style={{ backgroundColor: item.color }}
          className="circleButton"
        >
          <img src={item.src} className="icon" />
        </button>
      ))}
    </div>
  );
};

export default SocialButton;
