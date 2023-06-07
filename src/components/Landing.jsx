import "./Landing.css";
import HeroImg from "../assets/greenImg.jpg";
import { Link } from "react-router-dom";

const Landing = () => {
  const scrollToTop = () => {
    window.scrollTo(0, 0);
  };
  return (
    <>
      <div className="main-content-container">
        <div className="text-container">
          <h1>Unleash Your Power,</h1>
          <h1>Empower the Planet</h1>
          <p>
            Harnessing the power of IOT & ML to provide sustainable solutions to reduce carbon emission for greener cities & communities.
          </p>
        </div>
        <div className="img-container">
          <img src={HeroImg} alt="HeroImg" className="hero-img" />
        </div>
      </div>
    </>
  );
};

export default Landing;
