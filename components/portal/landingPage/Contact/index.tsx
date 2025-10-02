import React from "react";
import Link from "next/link";
import Image from "next/image";
// custom
import styles from "./_index.module.scss";
import ContactSupport from "@components/cards/ContactSupport";
import LinkMore from "@assets/images/link-more.svg";
import Faq from "../Faq";

const Contact = () => {
  return (
    <div className={styles.sectionContact}>
      <div className="container">
        <div className="titleSection">متواجدون للإجابة على استفسارك دائمًا</div>

        <div className={styles.blockContact}>
          <div className={styles.faqBlock}>
            <div className={styles.titleBlockSection}> الأسئلة الشائعة</div>
            <Faq />
            <div className="linkMore">
              <Link href={''}> المزيد من الأسئلة  
              <Image alt="" src={LinkMore} />
              </Link>
            </div>
          </div>

          <div className={styles.supportBlock}>
            <div className={styles.titleBlockSection}>الدعم والتواصل</div>
            <ContactSupport />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
