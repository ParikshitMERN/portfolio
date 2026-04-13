import linkedin from "../assets/linkedin.jpg";
import github from "../assets/github.png";

function Footer() {
  return (
    <footer className="text-center text-white p-4 md:p-5 bg-black">
      <p className="text-sm md:text-base">9803659437 | pariks2345@gmail.com</p>
      <p className="mt-2 text-sm md:text-base">
        &copy; 2026 Parikshit Maharjan. All rights reserved.
      </p>
      <div className="flex justify-center gap-4 mt-4">
        <a
          href="https://www.linkedin.com/in/parikshit-maharjan"
          target="_blank"
        >
          <img
            src={linkedin}
            alt="LinkedIn"
            className="w-6 h-6 md:w-8 md:h-8 rounded hover:opacity-70 transition"
          />
        </a>
        <a href="https://github.com/ParikshitMERN" target="_blank">
          <img
            src={github}
            alt="GitHub"
            className="w-6 h-6 md:w-8 md:h-8 rounded hover:opacity-70 transition"
          />
        </a>
      </div>
    </footer>
  );
}

export default Footer;
