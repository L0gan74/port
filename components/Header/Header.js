import React from "react";
import Head from "next/head";
import Image from "next/image";
import Link from "next/link";
import BurgerBenu from "../Burger/BugerMenu";

const Header = () => {
  const [active, setActive] = React.useState(0);

  const onClickCategory = (index) => {
    setActive(index);
  };

  return (
    <header className="header">
      <div className="container">
        <div className="desktop">
          <Link href="/">
            <Image src="Logo.svg" alt="Логотип" width={180} height={44} />
          </Link>
          <div className="wrapper">
            <nav className="nav">
              <ul>
                <li>
                  <Link
                    onClick={() => onClickCategory(0)}
                    className={active == 0 ? "active" : ""}
                    href="/"
                  >
                    Главная
                  </Link>
                </li>
                <li>
                  <Link
                    onClick={() => onClickCategory(1)}
                    className={active == 1 ? "active" : ""}
                    href="/news"
                  >
                    Новости
                  </Link>
                </li>
                <li>
                  <Link
                    onClick={() => onClickCategory(2)}
                    className={active == 2 ? "active" : ""}
                    href="/portfolio"
                  >
                    Портфолио
                  </Link>
                </li>
                <li>
                  <Link
                    onClick={() => onClickCategory(3)}
                    className={active == 3 ? "active" : ""}
                    href="/contact"
                  >
                    Контакты
                  </Link>
                </li>
              </ul>
            </nav>
            <div className="links">
              <Link href="#">
                <Image
                  src="telegramm.svg"
                  alt="Логотип"
                  width={24}
                  height={24}
                />
              </Link>
              <Link href="#">
                <Image src="github.svg" alt="Логотип" width={24} height={24} />
              </Link>
            </div>
          </div>
          <BurgerBenu />
        </div>
      </div>
    </header>
  );
};

export default Header;
