import React from "react";
import Image from "next/image";

// custom
import styles from "./_index.module.scss";

type Props = {
  icon: string;
  title: string;
  description: string;
};

const Advantage: React.FC<Props> = ({ icon, title, description }) => {
  return (
    <div className={styles.itemAdv}>
      <div className={styles.iconAdv}>
        <Image alt={title} src={icon} />
      </div>
      <div className={styles.titleAdv}>{title}</div>
      <div className={styles.descAdv}>{description}</div>
    </div>
  );
};

export default Advantage;
