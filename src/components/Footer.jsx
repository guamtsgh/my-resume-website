import letter from "../images/footer/letter.png";
import igIcon from "../images/footer/ig-black.png";
import telegramIcon from "../images/footer/telegram-black.png";
import "../css/Footer.css";

function Footer() {
  return (
    <footer className="footerContainer">
      <div className="email">
        <img src={letter} />
        <p className="fontGray font18">maythee.srianut@gmail.com</p>
      </div>
      <div className="copyright medium">
        <p>© Copyright 2021 | mmrz315</p>
      </div>
      <div className="social">
        <img src={igIcon} alt="" />
        <img src={telegramIcon} alt="" />
      </div>
    </footer>
  );
}

export default Footer;
