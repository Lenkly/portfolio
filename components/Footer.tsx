import React from 'react';
import Image from 'next/image';
import styles from '../styles/Footer.module.css';

const Footer = (): JSX.Element => {
  const scrollToTop = () => {
    if (window && typeof window !== undefined) {
      window.scrollTo({ top: 0, behavior: 'smooth' });
    }
  };
  return (
    <footer className={styles.footer}>
      Made with ♥︎
      <button className={styles.button} onClick={scrollToTop}>
        <Image src="/up-arrow.svg" alt="" width={40} height={40} />
      </button>
    </footer>
  );
};

export default Footer;
