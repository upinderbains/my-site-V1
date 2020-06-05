import React from 'react';
import styles from '../css/about.module.css';

const About = () => {
  return (
    <section className={styles.intro} id='about'>
      <h1 className={styles.title}>Upinder Bains</h1>
      <p className={styles.subtitle}>Web Developer</p>
      <form action='mailto:usbains@uwaterloo.ca'>
        <button className={styles.button} type='submit'>
          Get In Touch
        </button>
      </form>
    </section>
  );
};

export default About;
