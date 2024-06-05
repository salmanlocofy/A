import { FunctionComponent } from "react";
import styles from "./SubscribeSection.module.css";

export type SubscribeSectionType = {
  className?: string;
};

const SubscribeSection: FunctionComponent<SubscribeSectionType> = ({
  className = "",
}) => {
  return (
    <div className={[styles.subscribesection, className].join(" ")}>
      <div className={styles.formContainer}>
        <div className={styles.formHeader}>
          <i className={styles.formTitleSubtext}>subscribe to our newsletter</i>
          <h2 className={styles.formTitle}>Get weekly updates</h2>
        </div>
        <form className={styles.form}>
          <i className={styles.fillInYour}>
            Fill in your details to join the party!
          </i>
          <div className={styles.formFields}>
            <div className={styles.nameInput}>
              <i className={styles.yourName}>Your name</i>
            </div>
            <div className={styles.emailInput}>
              <i className={styles.emailAddress}>Email address</i>
            </div>
          </div>
          <button className={styles.button}>
            <i className={styles.text}>Search</i>
          </button>
        </form>
      </div>
    </div>
  );
};

export default SubscribeSection;
