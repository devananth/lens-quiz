import { BsGithub, BsTwitter, BsLinkedin } from "react-icons/bs";
import "./footer.css";

const Footer = () => {
  return (
    <footer className="d-flex col gap-1 xy-center txt-bold pt-1">
      <span className="txt-xxl">Made with ❤ by Devananth</span>
      <nav className="d-flex gap-2">
        <a href="https://github.com/devananth">
          <BsGithub />
        </a>
        <a href="https://twitter.com/devananthnkl">
          <BsTwitter />
        </a>
        <a href="https://www.linkedin.com/in/devananthnkl/">
          <BsLinkedin />
        </a>
      </nav>
      <span>&#169; 2022 </span>
    </footer>
  );
};

export { Footer };
