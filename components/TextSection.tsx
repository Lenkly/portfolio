import React from 'react';
import styles from '../styles/Textsection.module.css';

type TextsectionProps = {
  title: string;
  copytext: string;
};

const TextSection = ({ title, copytext }: TextsectionProps): JSX.Element => {
  return (
    <>
      <div className={styles.textbox}>
        <h2>
          <span>&#123; </span>
          {title}
          <span> &#125;</span>
        </h2>
        <p>
          &lt;<span>p</span>&gt;
          <div className={styles.copytext}>{copytext}</div>
          &lt;/<span>p</span>
          &gt;{' '}
        </p>
      </div>
    </>
  );
};

export default TextSection;
