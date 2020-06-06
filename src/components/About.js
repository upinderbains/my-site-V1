import React from 'react';
import styles from '../css/about.module.css';
import Button from '../styles'

const About = () => {
  return (
    <section className={styles.intro} id='about'>
      <h1 className={styles.title}>Upinder Bains</h1>
      <p className={styles.subtitle}>Web Developer</p>
      <form action='mailto:usbains@uwaterloo.ca'>
        <Button primary type='submit' font={2}>Get In Touch</Button>
      </form>
    </section>
  );
};

export default About;
