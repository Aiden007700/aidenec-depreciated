import Link from "./util/Link";
import React from "react";

const Nav = () => {
  return (
    <header className='header'>
      <nav className="nav">
        <img className="nav__img" src="static/img/me.jpg" alt="#" />
        <Link activeClassName='selected' href="/">
          <a className={`nav__item white`}>About</a>
        </Link>
        <Link activeClassName='selected' href="/resume">
          <a className={`nav__item white`}>Resume</a>
        </Link>
        <Link activeClassName='selected' href="/work">
          <a className={`nav__item white`}> Portfolio</a>
        </Link>
        <div className="">
          <a
            className='nav__item white nav__icon'
            href="https://linkedin.com/in/aidenec"
            target="_blank"
          >
            <i className="fab fa-linkedin-in" />
          </a>
          <a
            className="nav__icon white nav__item"
            href="https://github.com/Aiden007700"
            target="_blank"
          >
            <i className="fab fa-github" />
          </a>
        </div>
      </nav>
      <footer class="header__contact-box">
        <h2>
          N:
          <span className="highlite"> +48 515 817 829</span>
        </h2>
        <h2>
          E:
          <span className="highlite">
            <a href="mailto:campbell.e.aiden@gmail.com"> campbell.e.aiden@gmail.com</a>
          </span>
        </h2>
      </footer>
    </header>
  );
};

export default Nav;
