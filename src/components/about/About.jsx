import "./about.css";
import Award from "../../img/dev.png";
import Me from "../../img/me2.jpg";

const About = () => {
  return (
    <div className="a">
      <div className="a-left">
        <div className="a-card bg"></div>
        <div className="a-card">
          <img
            src={Me}
            alt=""
            className="a-img"
          />
        </div>
      </div>
      <div className="a-right">
        <h1 className="a-title">About Me</h1>
        <p className="a-sub">
        To give my best in my professional
pursuit for the overall benefit of the
organization and myself where I can
show my caliber to gain some experience
and do the best in work through a result-
oriented approach, efficient teamwork,
and positive contribution.
        </p>
      
        <div className="a-award">
          <img src={Award} alt="" className="a-award-img" />
          <div className="a-award-texts">
            <h4 className="a-award-title">Front end Developer</h4>
            <p className="a-award-desc">
            HTML,CSS,JAVASCRIPT,REACTJS,GITHUB.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
