import React from "react";
import Link from "next/link";
import Image from "next/image";

// custom
import styles from "./_index.module.scss";
import logo from "@assets/images/logo.svg";
import lang from "@assets/images/lang.svg";

const Header = () => {
  return (
    <header className={styles.header}>
      <div className="container">
        <div className={styles.containerHeader}>
          <div className={styles.logoBlock}>
            <Link href='/'>
              <span className={styles.logoWord}>iTech</span>
              <Image alt="logo" src={logo} />
            </Link>
          </div>
          <div className={styles.mainMenu}>
            <ul>
              <li>
                <Link href='/'> الرئيسية </Link>
              </li>
              <li>
                <Link href={""}> الخدمات </Link>
              </li>
            </ul>
          </div>
          <div className={styles.headerLeft}>
            <Link href={''}>
              <Image alt="lang" src={lang} />
            </Link>
            <Link className='btnOutline' href={''}>
               تواصل معنا
            </Link>

          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
