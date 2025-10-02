import React from "react";
import Image from "next/image";
import Link from "next/link";
// custom
import styles from "./_index.module.scss";
import phone from "@assets/images/phone.svg";
import email from "@assets/images/email.svg";
import iconLink from "@assets/images/link.svg";

const ContactSupport = () => {
  return (
    <div className={styles.blockSupport}>
      <div className={styles.itemContact}>
        <div className={styles.iconContact}>
          <Image alt="" src={phone} />
        </div>
        <div className={styles.titleContact}>اتصل بنا</div>
        <div className={styles.descContact}>
          يمكنك الاتصال بنا عبر الرقم 19998
        </div>
      </div>

      <div className={styles.itemContact}>
        <div className={styles.iconContact}>
          <Image alt="" src={email} />
        </div>
        <div className={styles.titleContact}>
          تواصل معنا عبر نموذج التواصل الإلكتروني
        </div>
        <div className={styles.descContact}>
          يسعدنا تواصلك معنا في حال وجود أي استفسار، ملاحظة أو طلب دعم. يرجى
          تعبئة نموذج التواصل الإلكتروني،
          <Link href={""}>
            من هنا <Image alt="" src={iconLink} />
          </Link>
        </div>
      </div>
    </div>
  );
};

export default ContactSupport;
