import sponsor from "../assets/sponsor.jpg";
import ebook from "../assets/ebook.avif";
import tms from "../assets/tms.jpg";

function Projects() {
  return (
    <section className="thirdsection">
      <h1>Projects</h1>
      <div className="projectscontent">
        <div className="project-card">
          <img src={sponsor} alt="Project 1" />
          <a href="https://github.com/ParikshitMERN/sponsor-analyzer">
            <h3>Sponsor Analyzer</h3>
          </a>
        </div>

        <div className="project-card">
          <img src={ebook} alt="Project 2" />
          <a href="https://github.com/ParikshitMERN/Ebook">
            <h3>AI Powered E-Book Creator</h3>
          </a>
        </div>

        <div className="project-card">
          <img src={tms} alt="Project 3" />
          <a href="https://github.com/ParikshitMERN/Tuition-Management-System">
            <h3>Tuition Management System</h3>
          </a>
        </div>
      </div>
    </section>
  );
}

export default Projects;
