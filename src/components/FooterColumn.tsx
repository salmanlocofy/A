import { FunctionComponent } from "react";
import styles from "./FooterColumn.module.css";

export type FooterColumnType = {
  className?: string;
  footerTitle?: string;
  about?: string;
  contactUs?: string;
  careers?: string;
  culture?: string;
  blog?: string;
};

const FooterColumn: FunctionComponent<FooterColumnType> = ({
  className = "",
  footerTitle,
  about,
  contactUs,
  careers,
  culture,
  blog,
}) => {
  return (
    <div className={[styles.footerColumn, className].join(" ")}>
      <b className={styles.footerTitle}>{footerTitle}</b>
      <div className={styles.footerLinks}>
        <div className={styles.link}>
          <div className={styles.masterLink}>
            <img
              className={styles.lineRoundedpasswordIcon}
              alt=""
              src="/line-roundedpassword.svg"
            />
            <div className={styles.about}>{about}</div>
            <img
              className={styles.lineRoundedchevronDown}
              alt=""
              src="/line-roundedchevron-down.svg"
            />
          </div>
        </div>
        <div className={styles.link1}>
          <div className={styles.masterLink1}>
            <img
              className={styles.lineRoundedpasswordIcon1}
              alt=""
              src="/line-roundedpassword.svg"
            />
            <div className={styles.contactUs}>{contactUs}</div>
            <img
              className={styles.lineRoundedchevronDown1}
              alt=""
              src="/line-roundedchevron-down.svg"
            />
          </div>
        </div>
        <div className={styles.link2}>
          <div className={styles.masterLink2}>
            <img
              className={styles.lineRoundedpasswordIcon2}
              alt=""
              src="/line-roundedpassword.svg"
            />
            <div className={styles.careers}>{careers}</div>
            <img
              className={styles.lineRoundedchevronDown2}
              alt=""
              src="/line-roundedchevron-down.svg"
            />
          </div>
        </div>
        <div className={styles.link3}>
          <div className={styles.masterLink3}>
            <img
              className={styles.lineRoundedpasswordIcon3}
              alt=""
              src="/line-roundedpassword.svg"
            />
            <div className={styles.culture}>{culture}</div>
            <img
              className={styles.lineRoundedchevronDown3}
              alt=""
              src="/line-roundedchevron-down.svg"
            />
          </div>
        </div>
        <div className={styles.link4}>
          <div className={styles.masterLink4}>
            <img
              className={styles.lineRoundedpasswordIcon4}
              alt=""
              src="/line-roundedpassword.svg"
            />
            <div className={styles.blog}>{blog}</div>
            <img
              className={styles.lineRoundedchevronDown4}
              alt=""
              src="/line-roundedchevron-down.svg"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default FooterColumn;
