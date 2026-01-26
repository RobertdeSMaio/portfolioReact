import logo from "../../Assets/image.png";

interface HeaderProp {
  href: string;
  children: string;
}

const NavLink = ({ href, children }: HeaderProp) => (
  <li>
    <a
      href={href}
      target="_blank"
      rel="noreferrer noopener"
      className="hover:text-blue-600 transition-colors"
    >
      {children}
    </a>
  </li>
);

function Header() {
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
              Contato
            </a>
          </li>
          <li>
            <a
              href="https://linkedin.com/in/robert-de-s-maio"
              target="_blank"
              rel="noreferrer noopener"
              className="hover:text-blue-600 transition-colors"
            >
              Sobre
            </a>
          </li>
          <li>
            <a
              href="https://github.com/RobertdeSMaio"
              target="_blank"
              rel="noreferrer noopener"
              className="hover:text-blue-600 transition-colors"
            >
              GitHub
            </a>
          </li>
        </ul>
      </nav>
    </header>
  );
}

export { Header };
