import { Link } from 'react-router-dom';
import React from 'react';
import classes from './Layout.module.css';
const Layout = (props) => {
  const path = window.location.pathname;
  return (
    <div>
      <nav className={classes.nav}>
        <div className={classes.brand}>
          <h2>
            <Link to="/" className={classes.link}>
              Brand
            </Link>
          </h2>
        </div>
        <div className={classes.menu}>
          <ul>
            <li>
              <Link
                to="/"
                className={path === '/' ? classes.active : classes.link}
              >
                Home
              </Link>
            </li>
            <li>
              <Link
                to="/about"
                className={path === '/about' ? classes.active : classes.link}
              >
                About
              </Link>
            </li>
            <li>
              <Link
                to="/help"
                className={path === '/help' ? classes.active : classes.link}
              >
                Help
              </Link>
            </li>
            <li>
              <Link
                to="/clock"
                className={path === '/clock' ? classes.active : classes.link}
              >
                Clock
              </Link>
            </li>
            <li>
              <Link
                to="/todo"
                className={path === '/todo' ? classes.active : classes.link}
              >
                Todo App
              </Link>
            </li>
          </ul>
        </div>
      </nav>
      <main className={classes.main}>{props.children}</main>
      <footer className={classes.footer}>
        <h3>Footer</h3>
        <div>
          <ul>
            <li>Terms</li>
            <li>Contact Us</li>
            <li>Authors</li>
          </ul>
        </div>
      </footer>
    </div>
  );
};

export default Layout;
