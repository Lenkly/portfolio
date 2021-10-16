import React from 'react';
import styles from '../styles/Textsection.module.css';

type TextsectionProps = {
  copytext: string;
};

const ContactSection = ({ copytext }: TextsectionProps): JSX.Element => {
  return (
    <>
      <div className={styles.placeholder}></div>
      <div className={styles.textbox}>
        <h2 style={{ marginLeft: '0' }}>
          <span>const</span> lydia <span>&#61;</span> contact.
          <span className={styles.greentext}>dev</span>
          <span className={styles.styledtext}>`</span>
        </h2>
        <p>
          <div className={styles.styledtext} style={{ marginLeft: '25px' }}>
            {copytext}
          </div>
        </p>
        <h2 className={styles.styledtext}>`;</h2>
      </div>
    </>
  );
};

export default ContactSection;
