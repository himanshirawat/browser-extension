import "./Footer.css";
import github from "../../assets/logo/github-1.png";
import pinterest from "../../assets/logo/pinterest -1.png";
import linkedIn from "../../assets/logo/linkedIn-2.png";

export const Footer = () => {
    return (
      <footer class="footer d-flex direction-column align-center">
        <p>
          Made with{" "}
          <span role="img" aria-label="Love">
            ❤️
          </span>{" "}
          by Himanshika Rawat
        </p>
        <div class="d-flex gap align-center padding-all-16">
          <a
            href="https://github.com/himanshirawat/"
            class="link"
            target="_blank"
            rel="noreferrer"
          >
            <img
              class="source-image logo-img"
              src={github}
              alt="GitHub"
            />
          </a>
          <a
            href="https://in.pinterest.com/himanshikarawat/"
            class="link"
            target="_blank"
            rel="noreferrer"
          >
            <img
              class="source-image logo-img"
              src={pinterest}
              alt="Pinterest"
            />
          </a>
          <a
            href="https://www.linkedin.com/in/himanshi-rawat/"
            class="link"
            target="_blank"
            rel="noreferrer"
          >
            <img
              class="source-image logo-img"
              src={linkedIn}
              alt="LinkedIn"
            />
          </a>
        </div>
      </footer>
    );
};
  