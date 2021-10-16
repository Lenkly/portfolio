import type { NextPage } from 'next';
import Image from 'next/image';
import React from 'react';
import Footer from '../components/Footer';
import Header from '../components/Header';
import styles from '../styles/Home.module.css';
import linkedinSrc from '../public/linkedIn.svg';
import mailSrc from '../public/mail.svg';
import octocatSrc from '../public/octocat.svg';
import placeholderSrc from '../public/placeholder.png';
import arrowupSrc from '../public/up-arrow.svg';
import ContactSection from '../components/ContactSection';
import TextSection from '../components/TextSection';
import ScrollAnimation from '../components/ScrollAnimation';

const Home: NextPage = () => {
  return (
    <>
      <Header
        mailSrc={mailSrc}
        githubSrc={octocatSrc}
        linkedInSrc={linkedinSrc}
      />
      <main className={styles.main}>
        <ScrollAnimation type="section">
          <section className={styles.container}>
            <h2 className={styles.title}>Lydia Lenk</h2>
            <h1>
              <span className={styles.span}>web</span>developer
            </h1>
          </section>
          <section className={styles.container}>
            <div>
              <TextSection
                title="about"
                copytext="Graduating university with a master's degree in Customer
                Relationship Management and coming from a marketing background I
                always had a thing for web design, web technologies and good
                content as well as an eye for detail. I recently changed career
                paths to follow my passion to become a web developer and now
                work fulltime as a frontend engineer."
              />
            </div>
          </section>
        </ScrollAnimation>
        <ScrollAnimation type="section">
          <section className={styles.container}>
            <div className={styles.content}>
              <TextSection
                title="idea"
                copytext="Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed
                diam nonumy eirmod tempor invidunt ut labore et dolore magna
                aliquyam erat, sed diam voluptua. At vero eos et accusam et
                justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea
                takimata sanctus est Lorem ipsum dolor sit amet. Lorem ipsum
                dolor sit amet, consetetur sadipscing elitr, sed diam nonumy
                eirmod tempor invidunt ut labore et dolore magna aliquyam erat,
                sed diam voluptua. At vero eos et accusam et justo duo dolores
                et ea rebum."
              />
              <Image
                src={placeholderSrc}
                alt=""
                layout="responsive"
                objectFit="contain"
                loading="lazy"
              />
            </div>
          </section>
        </ScrollAnimation>
        <ScrollAnimation type="section">
          <section className={styles.container}>
            <div className={styles.content}>
              <TextSection
                title="design"
                copytext="Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed
                diam nonumy eirmod tempor invidunt ut labore et dolore magna
                aliquyam erat, sed diam voluptua. At vero eos et accusam et
                justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea
                takimata sanctus est Lorem ipsum dolor sit amet. Lorem ipsum
                dolor sit amet, consetetur sadipscing elitr, sed diam nonumy
                eirmod tempor invidunt ut labore et dolore magna aliquyam erat,
                sed diam voluptua. At vero eos et accusam et justo duo dolores
                et ea rebum."
              />
              <Image
                src={placeholderSrc}
                alt=""
                layout="responsive"
                objectFit="contain"
                loading="lazy"
              />
            </div>
          </section>
        </ScrollAnimation>
        <ScrollAnimation type="section">
          <section className={styles.container}>
            <div className={styles.content}>
              <TextSection
                title="development"
                copytext="Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed
                diam nonumy eirmod tempor invidunt ut labore et dolore magna
                aliquyam erat, sed diam voluptua. At vero eos et accusam et
                justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea
                takimata sanctus est Lorem ipsum dolor sit amet. Lorem ipsum
                dolor sit amet, consetetur sadipscing elitr, sed diam nonumy
                eirmod tempor invidunt ut labore et dolore magna aliquyam erat,
                sed diam voluptua. At vero eos et accusam et justo duo dolores
                et ea rebum."
              />
              <Image
                src={placeholderSrc}
                alt=""
                layout="responsive"
                objectFit="contain"
                loading="lazy"
              />
            </div>
          </section>
        </ScrollAnimation>
        <ScrollAnimation type="section">
          <section className={styles.container}>
            <div className={styles.content}>
              <Image
                src={placeholderSrc}
                alt=""
                layout="responsive"
                objectFit="contain"
                loading="lazy"
              />
              <div>
                <ContactSection
                  copytext="Located in Düsseldorf, Germany, but used to work remote - so you
                can call me up any time!"
                />
              </div>
            </div>
          </section>
        </ScrollAnimation>
        <a
          href="https://www.youtube.com/watch?v=dQw4w9WgXcQ"
          target="_blank"
          rel="noopener noreferrer"
        >
          Don&apos;t click me.
        </a>
      </main>
      <Footer footerImage={arrowupSrc} />
    </>
  );
};

export default Home;
