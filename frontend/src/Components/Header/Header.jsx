import React from 'react';
import styles from './Header.module.css'

function Header() {
  return (
    <header className={styles.header}>
      <div className={styles.logo}>
        <img src="logo.png" alt="Froker Logo" />
      </div>
      <nav className={styles.nav}>
        <a href="/">Home</a>
        <a href="/blogs">Blogs</a>
        <a href="/discover">Discover Froker</a>
      </nav>
    </header>
  )
}

export default Header
