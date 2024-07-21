import React from 'react';
import styles from './Hero.module.css';

function Hero() {
  return (
    <section className={styles.hero}>
      <h1>FROKER BLOG</h1>
      <h2>Articles covering the most recent updates and advancements</h2>
    </section>
  );
}

export default Hero;