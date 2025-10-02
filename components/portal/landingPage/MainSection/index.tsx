import React from "react";
import Link from "next/link";
import Image from "next/image";
// custom
import styles from "./_index.module.scss";
import mouse from "@assets/images/mouse.svg";

const Main = () => {
  return (
    <div className={styles.mainSection}>
      <div className={styles.bgImg}></div>
      <div className={styles.contentMain +  " container" }>
        <div className={styles.titleContent}>اصنع المستقبل العقاري مع iTech</div>
        <div className={styles.descContent}>
          حلول تقنية مبتكرة وآمنة … ترابط موثوق لإدارة بياناتك العقارية بكفاءة
        </div>
        <div>
          <Link className="btnOutline" href={'#serviceSection'}>
            اكتشف خدماتنا
          </Link>
        </div>
        <div className={styles.linkMouse}>
             <Link href={'#serviceSection'}> <Image alt="" src={mouse} /></Link>
        </div>
      </div>
    </div>
  );
};

export default Main;
