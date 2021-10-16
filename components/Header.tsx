import React, { useRef } from 'react';
import Image from 'next/image';
import styles from '../styles/Header.module.css';

type HeaderProps = {
  mailSrc: string;
  githubSrc: string;
  linkedInSrc: string;
};

const Header = ({
  mailSrc,
  githubSrc,
  linkedInSrc,
}: HeaderProps): JSX.Element => {
  const headerRef = useRef(null);
  return (
    <header className={styles.header}>
      <div className={styles.title} ref={headerRef}>
        Lydia Lenk
      </div>
      <div className={styles.link}>
        <button style={{ width: '50px', height: '50px' }}>
          <a
            href="&#109;&#97;&#105;&#108;&#116;&#111;&#58;&#108;&#101;&#110;&#107;&#46;&#108;&#121;&#100;&#105;&#97;&#64;&#103;&#109;&#97;&#105;&#108;&#46;&#99;&#111;&#109;"
            target="_blank"
            rel="noopener noreferrer"
          >
            <Image
              src={mailSrc}
              alt=""
              layout="responsive"
              objectFit="contain"
            />
          </a>
        </button>
        <button style={{ width: '45px', height: '45px' }}>
          <a
            href="https://www.github.com/Lenkly"
            target="_blank"
            rel="noopener noreferrer"
          >
            <Image
              src={githubSrc}
              alt=""
              layout="responsive"
              objectFit="contain"
            />
          </a>
        </button>
        <button style={{ width: '50px', height: '50px' }}>
          <a
            href="https://www.linkedin.com/in/lydialenk/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <Image
              src={linkedInSrc}
              alt=""
              layout="responsive"
              objectFit="contain"
            />
          </a>
        </button>
      </div>
    </header>
  );
};

export default Header;
