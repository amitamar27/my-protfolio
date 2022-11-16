import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEnvelope } from "@fortawesome/free-regular-svg-icons";
import { faGithub, faLinkedin } from "@fortawesome/free-brands-svg-icons";

export function Footer() {

  const logo = process.env.PUBLIC_URL + "/imgs/logoNew.png";



  return (
    <div className="footer">
      <div className="icons">
        <a href="mailto:amitush27@gmail.com">
          <FontAwesomeIcon icon={faEnvelope} />
        </a>
        <a
          href="https://www.linkedin.com/in/amit-amar-4467b1200/"
          target="_blank"
          rel="noreferrer"
        >
          <FontAwesomeIcon icon={faLinkedin} />
        </a>
        <a
          href="https://github.com/amitamar27"
          target="_blank"
          rel="noreferrer"
        >
          <FontAwesomeIcon icon={faGithub} />
        </a>
      </div>
      <small className="copy-rights">
        Amit Amar 2022 All the rights saved ©
      </small>
      <img src={logo} alt="footerImg" />
    </div>
  );
}
