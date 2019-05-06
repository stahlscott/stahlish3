import React from 'react';
import { Link } from 'gatsby';

import dev from '../img/dev-badge.svg';
import github from '../img/github-icon.svg';
import twitter from '../img/twitter-icon.svg';
import email from '../img/email-icon.svg';
import linkedin from '../img/linkedin-icon.svg';

const NAVBAR_ICONS = [
  {
    link: 'https://github.com/stahlscott',
    icon: github,
    alt: 'Github',
  },
  {
    link: 'https://twitter.com/stahlish',
    icon: twitter,
    alt: 'Twitter',
  },
  {
    link: 'https://dev.to/stahlish',
    icon: dev,
    alt: 'DEV.to',
  },
  {
    link: 'https://www.linkedin.com/in/stahlscott/',
    icon: linkedin,
    alt: 'LinkedIn',
  },
  {
    link: 'mailto:stahl.scott@gmail.com',
    icon: email,
    alt: 'Email',
  },
];

const Navbar = class extends React.Component {
  componentDidMount() {
    // Get all "navbar-burger" elements
    const $navbarBurgers = Array.prototype.slice.call(document.querySelectorAll('.navbar-burger'), 0);
    // Check if there are any navbar burgers
    if ($navbarBurgers.length > 0) {
      // Add a click event on each of them
      $navbarBurgers.forEach(el => {
        el.addEventListener('click', () => {
          // Get the target from the "data-target" attribute
          const target = el.dataset.target;
          const $target = document.getElementById(target);

          // Toggle the "is-active" class on both the "navbar-burger" and the "navbar-menu"
          el.classList.toggle('is-active');
          $target.classList.toggle('is-active');
        });
      });
    }
  }

  render() {
    return (
      <nav className="navbar is-transparent" role="navigation" aria-label="main-navigation">
        <div className="container">
          <div className="navbar-brand">
            {/* Hamburger menu */}
            <div className="navbar-burger burger" data-target="navMenu">
              <span />
              <span />
              <span />
            </div>
          </div>
          <div id="navMenu" className="navbar-menu">
            <div className="navbar-start has-text-centered">
              <Link className="navbar-item" to="/" style={{ marginBottom: 30 }}>
                Home
              </Link>
              <Link className="navbar-item" to="/about/" style={{ marginBottom: 30 }}>
                About
              </Link>
              <Link className="navbar-item" to="/posts/" style={{ marginBottom: 30 }}>
                Writing
              </Link>
              {/* <Link className="navbar-item" to="/projects/" style={{ marginBottom: 30 }}>
                Projects
              </Link> */}
            </div>
            <div className="navbar-end has-text-centered">{this.renderIcons()}</div>
          </div>
        </div>
      </nav>
    );
  }

  renderIcons() {
    return NAVBAR_ICONS.map((item, index) => (
      <a key={index} className="navbar-item" href={item.link} target="_blank" rel="noopener noreferrer">
        <span className="icon">
          <img src={item.icon} alt={item.alt} />
        </span>
      </a>
    ));
  }
};

export default Navbar;
