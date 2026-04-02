import { useLocation, useNavigate } from "react-router-dom";
import logo from "../../Assets/image.png";

interface HeaderProp {
  href: string;
  children: string;
}

function Header() {
  const nav = useNavigate();
  const loc = useLocation();

  const toggleLanguage = () => {
    const nextRoute = loc.pathname === "/portugues" ? "/" : "/portugues";
    nav(nextRoute);
  };
  return (
    <header className="w-full h-13 bg-white rounded-[20px] flex items-center">
      <nav className="flex w-full items-center justify-between px-5">
        <img className="h-10" alt="portfolio" src={logo} />
        <ul className="flex items-center gap-5 list-none text-black">
          <li>
            <a
              href="https://api.whatsapp.com/send?phone=22992843155"
              target="_blank"
              rel="noreferrer noopener"
              className="hover:text-blue-600 transition-colors"
            >
              {loc.pathname === "/portugues" ? "Contato" : "Contact"}
            </a>
          </li>
          <li>
            <a
              href="https://linkedin.com/in/robert-de-s-maio"
              target="_blank"
              rel="noreferrer noopener"
              className="hover:text-blue-600 transition-colors"
            >
              {loc.pathname === "/portugues" ? "Linkedin" : "Linkedin"}
            </a>
          </li>
          <li>
            <a
              href="https://github.com/RobertdeSMaio"
              target="_blank"
              rel="noreferrer noopener"
              className="hover:text-blue-600 transition-colors"
            >
              {loc.pathname === "/portugues" ? "Github" : "Github"}
            </a>
          </li>
          <li>
            <button
              onClick={toggleLanguage}
              className="text-black rounded hover:text-blue-600 transition-transform"
            >
              {loc.pathname === "/portugues"
                ? "Switch to English"
                : "Mudar para Portugues"}
            </button>
          </li>
        </ul>
      </nav>
    </header>
  );
}

export { Header };
