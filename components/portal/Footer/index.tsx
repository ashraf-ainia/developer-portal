import React from "react";
import Image from "next/image";
import Link from "next/link";

// custom
import styles from "./_index.module.scss";
import logoFooter from "@assets/images/logo.svg";
import V2030 from "@assets/images/vision-2030-white.svg";
import linkedIn from "@assets/images/linkdin.svg";
import instgram from "@assets/images/instgram.svg";
import x from "@assets/images/x.svg";

const Footer = () => {
  return (
    <div className={styles.footer}>
      <div className={styles.headerTop}>
        <div className={styles.footerRight}>
          <Image src={logoFooter} alt="" />
        </div>
        <div className={styles.blockMenu}>
          <div className={styles.menuList}>
            <div className={styles.titleMenu}>NHC Innovation</div>
            <ul>
              <li>
                <Link href={""}>عن القطاع</Link>
              </li>
              <li>
                <Link href={""}>المنتجات الرقمية</Link>
              </li>
              <li>
                <Link href={""}>المركز الإعلامي</Link>
              </li>
              <li>
                <Link href={""}>دليل الموظف</Link>
              </li>
            </ul>
          </div>
          <div className={styles.menuList}>
            <div className={styles.titleMenu}>خدماتنا</div>
            <ul>
              <li>
                <Link href={""}>بوابة الخرائط الجيومكانية</Link>
              </li>
              <li>
                <Link href={""}>بوابة التكاملات</Link>
              </li>
              <li>
                <Link href={""}>لوحة الأداء</Link>
              </li>
              <li>
                <Link href={""}>مركز العمليات الرقمي</Link>
              </li>
            </ul>
          </div>
          <div className={styles.menuList}>
            <div className={styles.titleMenu}>روابط ذات صلة</div>
            <ul>
              <li>
                <Link href={""}>وزارة الشؤون البلدية والقروية</Link>
              </li>
              <li>
                <Link href={""}>برنامج الاسكان</Link>
              </li>
              <li>
                <Link href={""}>صندوق التنمية العقارية</Link>
              </li>
              <li>
                <Link href={""}>صندوق التنمية العقارية</Link>
              </li>
            </ul>
          </div>
        </div>
        <div className={styles.footerLeft}>
          <Image src={V2030} alt="" />
        </div>
      </div>

      <div className={styles.footerBottom}>
        <div className={styles.socialMedia}>
          <Link href={""}>
            <Image src={linkedIn} alt="" />
          </Link>
          <Link href={""}>
            <Image src={instgram} alt="" />
          </Link>
          <Link href={""}>
            <Image src={x} alt="" />
          </Link>
        </div>
        <div className={styles.copyRight}>
          جميع الحقوق محفوظة © 2025 تطوير وتشغيل NHCI
        </div>
      </div>
    </div>
  );
};

export default Footer;
