import sponsor from "../assets/sponsor.jpg";
import ebook from "../assets/ebook.avif";
import tms from "../assets/tms.jpg";

function Projects() {
  return (
    <section className="max-w-6xl mx-auto mt-20 md:mt-28 px-4 py-10">
      <h1 className="text-2xl md:text-3xl lg:text-4xl font-bold text-center mb-8">
        Projects
      </h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
        <div className="flex flex-col items-center">
          <div className="overflow-hidden rounded-lg">
            <img
              src={sponsor}
              alt="Project 1"
              className="w-full hover:scale-110 transition-transform duration-300"
            />
          </div>
          <a
            href="https://github.com/ParikshitMERN/sponsor-analyzer"
            className="mt-4 text-base md:text-lg hover:text-violet-500 transition"
          >
            Sponsor Analyzer
          </a>
        </div>
        <div className="flex flex-col items-center">
          <div className="overflow-hidden rounded-lg">
            <img
              src={ebook}
              alt="Project 2"
              className="w-full hover:scale-110 transition-transform duration-300"
            />
          </div>
          <a
            href="https://github.com/ParikshitMERN/Ebook"
            className="mt-4 text-base md:text-lg hover:text-violet-500 transition"
          >
            AI Powered E-Book Creator
          </a>
        </div>
        <div className="flex flex-col items-center">
          <div className="overflow-hidden rounded-lg">
            <img
              src={tms}
              alt="Project 3"
              className="w-full hover:scale-110 transition-transform duration-300"
            />
          </div>
          <a
            href="https://github.com/ParikshitMERN/Tuition-Management-System"
            className="mt-4 text-base md:text-lg hover:text-violet-500 transition"
          >
            Tuition Management System
          </a>
        </div>
      </div>
    </section>
  );
}

export default Projects;
