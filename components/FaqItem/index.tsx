"use client";
import React, { useState } from "react";
import styles from "./_index.module.scss";

type Props = {
  title: string;
  description: string;
};

const FaqItem: React.FC<Props> = ({ title, description }) => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleAccordion = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div>
      <div className={styles.itemFaq}>
        <div className={styles.titleFaq} onClick={toggleAccordion}>
          {title}
          <span
            className={`${styles.icon} ${isOpen ? styles.iconOPen : ""}`}
          ></span>
        </div>

        <div className={`${styles.descFaq} ${isOpen ? styles.open : ""}`}>
          {description}
        </div>
      </div>
    </div>
  );
};

export default FaqItem;
