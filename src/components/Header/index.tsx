import logo from "../../Assets/image.png";
import "./styles.css";

function Header() {
  return (
    <header>
      <div>
        <div className="nav">
          <img className="portfolio" alt="portfolio" src={logo}></img>
          <ul>
            <li>
              <a
                href="https://api.whatsapp.com/send?phone=22992843155"
                target="_blank"
                rel="noreferrer"
              >
                Contato
              </a>
            </li>
            <li>
              <a
                href="https://linkedin.com/in/robert-de-s-maio"
                target="_blank"
                rel="noreferrer"
              >
                Sobre
              </a>
            </li>
            <li>
              <a
                href="https://github.com/RobertdeSMaio"
                target="_blank"
                rel="noreferrer"
              >
                GitHub
              </a>
            </li>
          </ul>
        </div>
      </div>
    </header>
  );
}

export { Header };
