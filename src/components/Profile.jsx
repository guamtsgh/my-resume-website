import SocialButton from "./SocialButton";
import socialIcon from "../data/socialProfileButton";
import profileImage from "../images/profile/ProfileImage.png";
import profileImageDecor from "../images/profile/ProfileImageDecor.png";
import "../css/Profile.css";

function Profile() {
  return (
    <div className="profile-container">
      <div className="profile-left">
        <div>
          <p className="font24">Hi!</p>
          <p className="font40 semiBold">
            I’m Mohammad Reza.
            <br />a Frontend developer.
          </p>
        </div>

        <div>
          <p className="font18">
            Frontend developer based in tehran, Iran.
            <br />I am coding with a clean and beautiful problem solving in
            mind.
          </p>
          <div className="social-contact">
            <p className="font18">Follow me</p>
            <div className="social-icons">
              <SocialButton data={socialIcon} />
            </div>
          </div>
        </div>

        <div>
          <button className="medium">Send Request</button>
          <button className="medium">Download CV</button>
        </div>
      </div>

      <div className="profile-right">
        <img src={profileImage} />
        <img src={profileImageDecor} />
        <img src={profileImageDecor} />
      </div>
    </div>
  );
}

export default Profile;
