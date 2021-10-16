import React from 'react';
import Image from 'next/image';
import styles from '../styles/Footer.module.css';

type FooterProps = {
  footerImage: string;
};

const Footer = ({ footerImage }: FooterProps): JSX.Element => {
  const scrollToTop = () => {
    if (window && typeof window !== undefined) {
      window.scrollTo({ top: 0, behavior: 'smooth' });
    }
  };
  return (
    <footer className={styles.footer}>
      Made with ♥︎
      <button className={styles.button} onClick={scrollToTop}>
        <Image
          src={footerImage}
          alt=""
          layout="responsive"
          objectFit="contain"
        />
      </button>
    </footer>
  );
};

export default Footer;
