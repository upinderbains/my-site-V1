import React from 'react';
import styles from '../css/contact.module.css';

const Contact = () => {
  return (
    <section className={styles.section} id='contact'>
      <h2 className={styles.title}>Contact</h2>
      <p className={styles.text}>
        Lorem ipsum dolor sit, amet consectetur adipisicing elit. Pariatur eos
        possimus assumenda illo laudantium, iusto dolorem aperiam excepturi hic
        quidem necessitatibus ex temporibus atque voluptates quisquam harum
        veniam? Aut, ab.
      </p>
      <form action='mailto:usbains@uwaterloo.ca'>
        <button className={styles.button} type='submit'>
          Send Message
        </button>
      </form>
    </section>
  );
};

export default Contact;
