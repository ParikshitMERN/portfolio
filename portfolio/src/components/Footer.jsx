import linkedin from "../assets/linkedin.jpg";
import github from "../assets/github.png";

function Footer() {
  return (
    <footer>
      <p>9803659437 | pariks2345@gmail.com</p>
      <br />
      <p>&copy; 2024 Parikshit Maharjan. All rights reserved.</p>
      <div className="icon">
        <a
          href="https://www.linkedin.com/in/parikshit-maharjan"
          target="_blank"
        >
          <img src={linkedin} alt="LinkedIn" />
        </a>
        <a href="https://github.com/ParikshitMERN" target="_blank">
          <img src={github} alt="GitHub" />
        </a>
      </div>
    </footer>
  );
}

export default Footer;
