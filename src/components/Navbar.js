import React from 'react';

import musiclogo from '../images/dark_logo.png';
import styles from './Navbar.module.css';

const Navbar = () => (
  <div className={styles.navbar}>
    <img src={musiclogo} className={styles.logo} alt="logo" />
    <div>
      <h1 className={styles.title1}>HYRULE COMPENDIUM</h1>
      <h2 className={styles.title2}>The Legend of Zelda: Breath of the Wild</h2>
    </div>
  </div>
);
export default Navbar;
