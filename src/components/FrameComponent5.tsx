import { FunctionComponent } from "react";
import GroupComponent from "./GroupComponent";
import GroupComponent1 from "./GroupComponent1";
import styles from "./FrameComponent5.module.css";

export type FrameComponent5Type = {
  className?: string;
};

const FrameComponent5: FunctionComponent<FrameComponent5Type> = ({
  className = "",
}) => {
  return (
    <div className={[styles.frameParent, className].join(" ")}>
      <div className={styles.helpTopicsParent}>
        <div className={styles.helpTopics}>HELP TOPICS</div>
        <h1 className={styles.enhanceYourLifestyle}>Enhance Your Lifestyle</h1>
      </div>
      <div className={styles.frameWrapper}>
        <div className={styles.frameGroup}>
          <GroupComponent productImageOne="/rectangle-1@2x.png" />
          <GroupComponent productImageOne="/rectangle-1-1@2x.png" />
          <GroupComponent productImageOne="/rectangle-1-2@2x.png" />
          <GroupComponent productImageOne="/rectangle-1-3@2x.png" />
          <GroupComponent1 rectangle1="/rectangle-1-4@2x.png" />
          <GroupComponent productImageOne="/rectangle-1-5@2x.png" />
          <GroupComponent productImageOne="/rectangle-1-6@2x.png" />
        </div>
      </div>
    </div>
  );
};

export default FrameComponent5;
