"use client";
import { NextPage } from "next";
import React from "react";
import Link from "next/link";
import Image from "next/image";
import SwaggerUI from "swagger-ui-react";
import "swagger-ui-react/swagger-ui.css";

import styles from "./_index.module.scss";
import falServiceLogo from "@assets/images/fal-service.svg";

type Props = {
  params: {
    serviceId: string;
  };
};

const page: NextPage<Props> = () => {
  return (
    <div>
      <div className="container">
        <div className="breadcrumb">
          <Link href="/"> الرئيسية </Link>
          <span> خدمة إيجار </span>
        </div>

        <div className={styles.headerSearvice}>
          <div className={styles.dataHeader}>
            <div className={styles.serviceName}>
              <div className={styles.logoService}>
                <Image alt="" src={falServiceLogo} />
              </div>
              <div className={styles.titleService}>الوساطة العقارية</div>
            </div>
            <div className="tag info medium">البيئة الاحتبارية</div>
          </div>
          <div className={styles.descService}>
            صفحة الخدمات الإلكترونية للوساطة العقارية، تقدم للأفراد والمنشآت
            العقارية تراخيص فال لممارسة الأنشطة العقارية، بالإضافة إلى خدمات
            الوساطة المبتكرة، سعيًا لتنظيم وتحسين الخدمات المقدمة في السوق
            العقاري، وحماية المستفيدين، ورفع الثقة في السوق وتحفيز النشاط
            العقاري.
            <br />
            <ul>
              <li>خدمة شراء باقات تراخيص إعلان</li>
              <li>خدمة إصدار رخصة فال لإدارة المرافق</li>
              <li>خدمة إصدار رخصة فال لادارة الاملاك</li>
              <li>خدمة إبرام عقد وساطة</li>
              <li>خدمة إصدار رخصة فال للمزادات العقارية</li>
              <li>فك حجز العربون</li>
            </ul>
          </div>
        </div>

        <div>
          <SwaggerUI url="/_IBM_Brokerage.postman_collection.json" />
        </div>
      </div>
    </div>
  );
};

export default page;
