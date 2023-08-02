const SocialButton = ({ data }) => {
  return (
    <div>
      {data.map((item, index) => (
        <button
          key={index}
          style={{ backgroundColor: item.color }}
          className="circleButton"
        >
          <img src={item.src} />
        </button>
      ))}
    </div>
  );
};

export default SocialButton;
