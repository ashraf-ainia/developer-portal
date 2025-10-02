import React from "react";
import Link from "next/link";
// custom
import styles from "./_index.module.scss";

import CardService from "@components/cards/ServiceCard";
import ejarServiceLogo from "@assets/images/ejar-service.svg";
import sakaniServiceLogo from "@assets/images/sakani-service.svg";
import falServiceLogo from "@assets/images/fal-service.svg";
import farzServiceLogo from "@assets/images/farz-service.svg";
// import mullakServiceLogo from "@assets/images/mullak-service.svg";


const Service = () => {
  return (
    <div id="serviceSection" className={styles.service}>
      <div className="container">
        <div className="titleSection">الخدمات</div>
        <div className="descSection">
          نقدم حلول تقنية عقارية مبتكرة تعزز الابتكار وتلبي احتياجات المستقبل
        </div>
      </div>
      <div className={styles.containerServics}>
        <div className={styles.blockServices}>
          <CardService
            imgCard={ejarServiceLogo}
            title="إيجار"
            description="خدمة مقدمة من إيجار تتيح للمستفيدين إمكانية الاستعلام عن المؤجر"
            tagTitle="جديد"
            link="/services/123"
          />
          <CardService
            imgCard={sakaniServiceLogo}
            title="سكني "
            description="خدمة مقدمة من سكني تتيح للمستفيدين إمكانية الاستعلام عن الوحدات والأراضي"
            tagTitle="البيئة الاختبارية"
            link="/services/123"
          />
          <CardService
            imgCard={falServiceLogo}
            title="الوساطة العقارية"
            description="خدمة مقدمة من الوساطة العقارية تتيح للمستفيدين إمكانية الاستعلام عن كامل بيانات الوسيط"
            tagTitle="البيئة الاختبارية"
            link="/services/123"
          />
          <CardService
            imgCard={farzServiceLogo}
            title="فرز الوحدات العقارية"
            description="خدمة من فرز الوحدات تتيح الاستعلام عن بيانات المساح والمكتب الهندسي"
            tagTitle="البيئة الاختبارية"
            link="/services/123"
          />
          <CardService
            imgCard={farzServiceLogo}
            title="mullakServiceLogo"
            description="خدمة من فرز الوحدات تتيح الاستعلام عن بيانات المساح والمكتب الهندسي"
            tagTitle="البيئة الاختبارية"
            link="/services/123"
          />
          <CardService
            imgCard={farzServiceLogo}
            title="فرز الوحدات العقارية"
            description="خدمة من فرز الوحدات تتيح الاستعلام عن بيانات المساح والمكتب الهندسي"
            tagTitle="البيئة الاختبارية"
            link="/services/123"
          />
          <CardService
            imgCard={farzServiceLogo}
            title="فرز الوحدات العقارية"
            description="خدمة من فرز الوحدات تتيح الاستعلام عن بيانات المساح والمكتب الهندسي"
            tagTitle="البيئة الاختبارية"
            link="/services/123"
          />
        </div>
      </div>
      <div className="container">
        <div className={styles.linkMore}>
          <Link href={""}> جميع الخدمات </Link>
        </div>
      </div>
    </div>
  );
};

export default Service;
