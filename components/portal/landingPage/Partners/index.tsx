import React from "react";
// custom
import styles from "./_index.module.scss";
import Partner from "@components/cards/Partner";

import sakaniLogo from "@assets/images/sakani-logo.svg";
import ejarLogo from "@assets/images/ejar-logo.svg";
import baladyLogo from "@assets/images/balady-logo.svg";
import regaLogo from "@assets/images/rega-logo.svg";
import falLogo from "@assets/images/fal-logo.svg";
import aqariLogo from "@assets/images/aqari-logo.svg";
import farzLogo from "@assets/images/farz-logo.svg";
import mullakLogo from "@assets/images/mullak-logo.svg";

const Partners = () => {
  return (
    <div className={styles.sectionPart}>
      <div className="container">
        <div className="titleSection">شركاؤنا الموثوقون</div>
        <div className={styles.Partners}>
          <Partner image={sakaniLogo} />
          <Partner image={ejarLogo} />
          <Partner image={baladyLogo} />
          <Partner image={regaLogo} />
          <Partner image={falLogo} />
          <Partner image={aqariLogo} />
          <Partner image={farzLogo} />
          <Partner image={mullakLogo} />
        </div>
      </div>
    </div>
  );
};

export default Partners;
