import React, { useState } from 'react';
import { Link } from 'gatsby';
import styles from '../css/header.module.css';

const Header = () => {
  const [open, setOpen] = useState(false);

  return (
    <header>
      <nav className={`${styles.nav} ${open ? styles.navActive : ''}`}>
        <ul className={styles.navList}>
          <li className={styles.navItem}>
            <Link to='/' className={styles.navLink}>
              Home
            </Link>
          </li>
          <li className={styles.navItem}>
            <Link to='/#projects' className={styles.navLink}>
              Projects
            </Link>
          </li>
          <li className={styles.navItem}>
            <Link to='/#contact' className={styles.navLink}>
              Contact
            </Link>
          </li>
          <li className={styles.navItem}>
            <Link to='/resume' className={styles.navLink}>
              Resume
            </Link>
          </li>
        </ul>
        <div onClick={() => setOpen(!open)} className={styles.btn}>
          <div
            className={`${styles.btnLine} ${open ? styles.btnTop : ''}`}
          ></div>
          <div
            className={`${styles.btnLine} ${open ? styles.btnMiddle : ''}`}
          ></div>
          <div
            className={`${styles.btnLine} ${open ? styles.btnBottom : ''}`}
          ></div>
        </div>
      </nav>
    </header>
  );
};
export default Header;
