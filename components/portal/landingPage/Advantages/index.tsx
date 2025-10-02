import React from "react";

// custom
import styles from "./_index.module.scss";
import Advantage from "@components/cards/Advantage";
import iconAdv1 from "@assets/images/ad-icon-1.svg";
import iconAdv2 from "@assets/images/ad-icon-2.svg";
import iconAdv3 from "@assets/images/ad-icon-3.svg";
import iconAdv4 from "@assets/images/ad-icon-4.svg";

const Advantages = () => {
  return (
    <div className={styles.sectionAdv}>
      <div className="container">
        <div className="titleSection">مزايا iTech</div>
        <div className="descSection">حلول مبتكرة ترفع إنتاجيتك وتسهّل يومك</div>

        <div className={styles.blockItemAd}>
          <Advantage
            icon={iconAdv1}
            title="حلول عقارية ذكية"
            description="أول حلول عقارية ذكية عبر APIs تعزز كفاءتك وتمنحك الريادة."
          />
          <Advantage
            icon={iconAdv2}
            title="سرعة الاستجابة"
            description="معالجة آلاف العمليات يومياً بكفاءة عالية توفر وقتك وتزيد إنتاجيتك. "
          />
          <Advantage
            icon={iconAdv3}
            title="حماية وأمان"
            description="أعلى معايير الأمان لحماية بياناتك وبيانات عملائك بشهادات معتمدة."
          />
          <Advantage
            icon={iconAdv4}
            title="سهولة الاشتراك"
            description="ابدأ بالاستفادة من خدمات iTech خلال دقائق بخطوات بسيطة وسلسة."
          />
        </div>
      </div>
    </div>
  );
};
export default Advantages;
