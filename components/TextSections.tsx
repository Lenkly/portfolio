import React from 'react';
import styles from '../styles/Textsections.module.css';

const TextSections = (): JSX.Element => {
  return (
    <>
      <section className={styles.container}>
        <div className={styles.content}>
          <div className={styles.placeholder}></div>
          <div className={styles.textbox}>
            <h2>
              <span>&#123; </span>about<span> &#125;</span>
            </h2>
            <p>
              &lt;<span>p</span>&gt;
              <div className={styles.copytext}>
                Graduating university with a master&apos;s degree in Customer
                Relationship Management and coming from a marketing background I
                always had a thing for web design, web technologies and good
                content as well as an eye for detail. I recently changed career
                paths to follow my passion to become a web developer and now
                work fulltime as a frontend engineer.
              </div>
              &lt;/<span>p</span>
              &gt;{' '}
            </p>
          </div>
        </div>
      </section>
      <section className={styles.container}>
        <div className={styles.content}>
          <div className={styles.textbox}>
            <h2>
              <span>&#123; </span>idea<span> &#125;</span>
            </h2>
            <p>
              &lt;<span>p</span>&gt;
              <div className={styles.copytext}>
                Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed
                diam nonumy eirmod tempor invidunt ut labore et dolore magna
                aliquyam erat, sed diam voluptua. At vero eos et accusam et
                justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea
                takimata sanctus est Lorem ipsum dolor sit amet. Lorem ipsum
                dolor sit amet, consetetur sadipscing elitr, sed diam nonumy
                eirmod tempor invidunt ut labore et dolore magna aliquyam erat,
                sed diam voluptua. At vero eos et accusam et justo duo dolores
                et ea rebum.
              </div>
              &lt;/<span>p</span>
              &gt;{' '}
            </p>
          </div>
          <div className={styles.placeholder}></div>
        </div>
      </section>
      <section className={styles.container}>
        <div className={styles.content}>
          <div className={styles.textbox}>
            <h2>
              <span>&#123; </span>about<span> &#125;</span>
            </h2>
            <p>
              &lt;<span>p</span>&gt;
              <div className={styles.copytext}>
                Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed
                diam nonumy eirmod tempor invidunt ut labore et dolore magna
                aliquyam erat, sed diam voluptua. At vero eos et accusam et
                justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea
                takimata sanctus est Lorem ipsum dolor sit amet. Lorem ipsum
                dolor sit amet, consetetur sadipscing elitr, sed diam nonumy
                eirmod tempor invidunt ut labore et dolore magna aliquyam erat,
                sed diam voluptua. At vero eos et accusam et justo duo dolores
                et ea rebum.
              </div>
              &lt;/<span>p</span>
              &gt;{' '}
            </p>
          </div>
          <div className={styles.placeholder}></div>
        </div>
      </section>
      <section className={styles.container}>
        <div className={styles.content}>
          <div className={styles.textbox}>
            <h2>
              <span>&#123; </span>about<span> &#125;</span>
            </h2>
            <p>
              &lt;<span>p</span>&gt;
              <div className={styles.copytext}>
                Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed
                diam nonumy eirmod tempor invidunt ut labore et dolore magna
                aliquyam erat, sed diam voluptua. At vero eos et accusam et
                justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea
                takimata sanctus est Lorem ipsum dolor sit amet. Lorem ipsum
                dolor sit amet, consetetur sadipscing elitr, sed diam nonumy
                eirmod tempor invidunt ut labore et dolore magna aliquyam erat,
                sed diam voluptua. At vero eos et accusam et justo duo dolores
                et ea rebum.
              </div>
              &lt;/<span>p</span>
              &gt;{' '}
            </p>
          </div>
          <div className={styles.placeholder}></div>
        </div>
      </section>
      <section className={styles.container}>
        <div className={styles.content}>
          <div className={styles.placeholder}></div>
          <div className={styles.textbox}>
            <h2 style={{ marginLeft: '0' }}>
              <span>const</span> lydia <span>&#61;</span> contact.
              <span className={styles.greentext}>dev</span>
              <span className={styles.styledtext}>`</span>
            </h2>
            <p>
              <div className={styles.styledtext} style={{ marginLeft: '25px' }}>
                Located in Düsseldorf, Germany, but used to work remote - so you
                can call me up any time!
              </div>
            </p>
            <h2 className={styles.styledtext}>`;</h2>
          </div>
        </div>
      </section>
    </>
  );
};

export default TextSections;
