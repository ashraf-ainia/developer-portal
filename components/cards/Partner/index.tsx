import React from "react";
import Image from "next/image";

// custom
import styles from "./_index.module.scss";

type Props = {
  image: string;
};

const Partner: React.FC<Props> = ({ image }) => {
  return (
    <div className={styles.itemPartner}>
      <Image alt="" src={image} />
    </div>
  );
};
export default Partner;
