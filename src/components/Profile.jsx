import SocialButton from "./SocialButton";
import socialIcon from "../data/socialProfileButton";
import profileImage from "../images/profile/ProfileImage.png";
import profileImageDecor from "../images/profile/ProfileImageDecor.png";
import "../css/Profile.css";

function Profile() {
  return (
    <div className="profile-container">
      <div className="profile-left">
        <div className="contentContainer">
          <p className="font24 fontBlack">Hi!</p>
          <p className="font40 semiBold fontBlack">
            I’m Mohammad Reza.
            <br />a Frontend developer.
          </p>
        </div>

        <div className="contentContainer">
          <p className="font18 fontBlack">
            Frontend developer based in tehran, Iran.
            <br />I am coding with a clean and beautiful problem
            <br />
            solving in mind.
          </p>

          <div className="socialContactContainer">
            <p className="font18 fontGray">Follow me</p>
            <div className="social-icons">
              <SocialButton data={socialIcon} />
            </div>
          </div>
        </div>

        <div className="functionButton">
          <button className="request medium font18">Send Request</button>
          <button className="download medium font18">Download CV</button>
        </div>
      </div>

      <div className="profile-right">
        <img src={profileImage} />
        <img src={profileImageDecor} className="decor-left" />
        <img src={profileImageDecor} className="decor-right" />
      </div>
    </div>
  );
}

export default Profile;
