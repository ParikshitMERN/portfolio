import { Link } from "react-router-dom";
import aboutImg from "../assets/about.jpg";

function About() {
  return (
    <section className="max-w-6xl mx-auto mt-20 md:mt-28 px-4 py-10">
      <h1 className="text-2xl md:text-3xl lg:text-4xl font-bold text-center mb-8">
        About Me
      </h1>
      <div className="flex flex-col md:flex-row justify-around items-center gap-6 md:gap-10">
        <div className="w-3/4 sm:w-1/2 md:w-2/5">
          <img
            src={aboutImg}
            alt="Parikshit Maharjan"
            className="w-full rounded-lg"
          />
        </div>
        <div className="w-full md:w-1/2 text-sm sm:text-base md:text-lg leading-relaxed text-gray-700 text-center md:text-left">
          <p className="mb-4">
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
          <Link
            to="/projects"
            className="inline-block mt-6 px-4 md:px-6 py-2 md:py-3 bg-violet-500 text-white text-sm md:text-base rounded hover:bg-violet-700 transition"
          >
            View Projects
          </Link>
        </div>
      </div>
    </section>
  );
}

export default About;
