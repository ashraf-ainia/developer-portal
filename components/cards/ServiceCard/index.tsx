import React from "react";
import Link from "next/link";
import Image from "next/image";

// custom
import styles from "./_index.module.scss";



type Props = {
  imgCard:string;
  title: string;
  description: string;
  tagTitle:string;
  link:string;
};

const CardService: React.FC<Props> = ({ imgCard,title = "Title 1", description  , link , tagTitle}) => {
  return (
    <div className={styles.cardItem}>
      <div className={styles.imgCard}>
        <Image alt="logo" src={imgCard} ></Image>
      </div>
      <div className={styles.titleCard}>{title}</div>
      <div className={styles.descCard}>
       {description}
      </div>
      <div className="tag success medium">{tagTitle}</div>
      <div className={styles.linkAPI}>
        <Link href={link}> استعراض API </Link>
      </div>
    </div>
  );
};

export default CardService;
