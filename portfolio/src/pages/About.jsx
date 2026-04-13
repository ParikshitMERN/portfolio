import { Link } from "react-router-dom";
import aboutImg from "../assets/about.jpg";

function About() {
  return (
    <section className="secondsection">
      <h1>About Me</h1>
      <div className="aboutcontent">
        <div className="aboutleft">
          <img src={aboutImg} alt="Parikshit Maharjan" />
        </div>
        <div className="aboutright">
          <p>
            I am a passionate Full Stack Developer with hands-on experience in
            building modern, scalable web applications from the ground up. I
            specialize in crafting responsive, user-friendly interfaces using
            HTML, CSS, JavaScript, and React, while also developing robust
            backend systems with Node.js, Express, and databases like MongoDB
            and PostgreSQL.
          </p>
          <p>
            My goal is to deliver clean, efficient, and maintainable code that
            solves real-world problems. I believe in continuous learning and
            staying updated with the latest technologies to build solutions that
            make a difference.
          </p>
          <Link to="/projects" className="btn">
            View Projects
          </Link>
        </div>
      </div>
    </section>
  );
}

export default About;
