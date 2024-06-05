import { FunctionComponent } from "react";
import styles from "./FrameComponent4.module.css";

export type FrameComponent4Type = {
  className?: string;
};

const FrameComponent4: FunctionComponent<FrameComponent4Type> = ({
  className = "",
}) => {
  return (
    <header className={[styles.landingNewInner, className].join(" ")}>
      <div className={styles.frameParent}>
        <div className={styles.frameGroup}>
          <img
            className={styles.frameChild}
            loading="lazy"
            alt=""
            src="/group-1.svg"
          />
          <div className={styles.frameContainer}>
            <div className={styles.ellipseParent}>
              <div className={styles.frameItem} />
              <div className={styles.appNameRectParent}>
                <div className={styles.appNameRect} />
                <div className={styles.appNameRect1} />
              </div>
            </div>
            <div className={styles.healthyme}>HealthyMe</div>
          </div>
        </div>
        <div className={styles.frameDiv}>
          <div className={styles.frameWrapper}>
            <div className={styles.frameParent1}>
              <div className={styles.frameParent2}>
                <div className={styles.homeWrapper}>
                  <a className={styles.home}>Home</a>
                </div>
                <a className={styles.aboutUs}>About Us</a>
                <a className={styles.howToUse}>How to use</a>
              </div>
              <div className={styles.lineWrapper}>
                <div className={styles.frameInner} />
              </div>
            </div>
          </div>
          <button className={styles.rectangleParent}>
            <div className={styles.rectangleDiv} />
            <div className={styles.logIn}>Log In</div>
          </button>
        </div>
      </div>
    </header>
  );
};

export default FrameComponent4;
