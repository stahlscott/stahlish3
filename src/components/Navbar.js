import React from 'react';
import { Link } from 'gatsby';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEnvelope } from '@fortawesome/free-solid-svg-icons';
import { faGithub, faTwitter, faDev, faLinkedin } from '@fortawesome/free-brands-svg-icons';

const NAVBAR_ICONS = [
  {
    link: 'https://github.com/stahlscott',
    icon: faGithub,
    alt: 'Github',
  },
  {
    link: 'https://twitter.com/stahlish',
    icon: faTwitter,
    alt: 'Twitter',
  },
  {
    link: 'https://dev.to/stahlish',
    icon: faDev,
    alt: 'DEV.to',
  },
  {
    link: 'https://www.linkedin.com/in/stahlscott/',
    icon: faLinkedin,
    alt: 'LinkedIn',
  },
  {
    link: 'mailto:stahl.scott@gmail.com',
    icon: faEnvelope,
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
      <nav className="navbar is-fixed-top" role="navigation" aria-label="main-navigation">
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
              <Link className="navbar-item" to="/">
                Home
              </Link>
              <Link className="navbar-item" to="/about/">
                About
              </Link>
              <Link className="navbar-item" to="/posts/">
                Writing
              </Link>
              {/* <Link className="navbar-item" to="/projects/">
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
          <FontAwesomeIcon className="fa-lg" icon={item.icon} />
        </span>
      </a>
    ));
  }
};

export default Navbar;
