import "./about.css";
import Award from "../../img/dev.png";
import Mission from "../../img/mission.jpg";
import Clint from "../clint/Clint";
const About = () => {
  return (
    <div className="container">
      <div className="a shadow p-3 mb-5 bg-white rounded" style={{ marginTop: "150px" }}>
        <div className="a-left">
          <div className="a-card bg"></div>
          <div className="a-card">
            <img
              src={Mission}
              alt=""
              className="a-img"
            />
          </div>
        </div>
        <div className="a-right">

          <p className="a-sub">
            <h2 className="text-primary text-center">OUR VISION</h2><li className="	fa fa-angle-double-right m-2"></li>
            Ensure access to skills for livelihood to everyone, across barriers of geography, language and social structures
          </p>
          <p className="a-sub">
            <h2 className="text-success text-center">OUR MISSION</h2><li className="	fa fa-angle-double-right m-2"></li>
            To eradicate skill-gap as a reason for large-scale unemployment.
          </p>

          <div className="a-award">
            <img src={Award} alt="" className="a-award-img" />
            <div className="a-award-texts">
              <h4 className="a-award-title text-primary">Front end Developer</h4>
              <p className="a-award-desc">
                HTML,CSS,JAVASCRIPT,REACTJS,GITHUB,NODE
              </p>
            </div>
          </div>
        </div>
      </div>
      <Clint />
    </div>
  );
};

export default About;
