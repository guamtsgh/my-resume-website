import portfolioDataList from "../data/portfolioDataList";
import arrow from "../images/portfolio/arrow.png";
import "../css/Portfolio.css";

function Portfolio() {
  return (
    <section className="portContainer">
      <div className="portHeader">
        <h1 className="semiBold font48 fontBlack">Portfolio</h1>
        <div className="arrow">
          <p className="font20 fontGray">See More</p>
          <img src={arrow} />
        </div>
      </div>
      <div className="portList">
        {portfolioDataList.map((item, index) => {
          return (
            <div className="each-port" key={index}>
              <img src={item.img} />
            </div>
          );
        })}
      </div>
    </section>
  );
}

export default Portfolio;
