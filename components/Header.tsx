import React, { useRef } from 'react'
import Image from 'next/image'
import styles from '../styles/Header.module.css'

const Header = ():JSX.Element => {
    const headerRef = useRef(null)
    return (
<header className={styles.header}>
    <div className={styles.title} ref={headerRef}>
Lydia Lenk
    </div>
    <div className={styles.link}>
        <button>
        <a href="&#109;&#97;&#105;&#108;&#116;&#111;&#58;&#108;&#101;&#110;&#107;&#46;&#108;&#121;&#100;&#105;&#97;&#64;&#103;&#109;&#97;&#105;&#108;&#46;&#99;&#111;&#109;"
            target="_blank"
            rel="noopener noreferrer">
        <Image src="/mail.svg" alt="" width={50} height={50} />
        </a>
        </button>
        <button>
        <a href="https://www.github.com/Lenkly"
            target="_blank"
            rel="noopener noreferrer">
        <Image src="/octocat.svg" alt="" width={45} height={45} />      
        </a>
        </button>
        <button>
        <a href="https://www.linkedin.com/in/lydialenk/"
            target="_blank"
            rel="noopener noreferrer">
        <Image src="/linkedin.svg" alt="" width={50} height={50} />
        </a>
        </button>
    </div>
</header>
    )
}

export default Header