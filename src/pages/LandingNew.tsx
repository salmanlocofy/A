import { FunctionComponent } from "react";
import FrameComponent4 from "../components/FrameComponent4";
import FrameComponent3 from "../components/FrameComponent3";
import FrameComponent2 from "../components/FrameComponent2";
import FrameComponent5 from "../components/FrameComponent5";
import GroupComponent from "../components/GroupComponent";
import GroupComponent1 from "../components/GroupComponent1";
import FooterV from "../components/FooterV";
import styles from "./LandingNew.module.css";

const LandingNew: FunctionComponent = () => {
  return (
    <div className={styles.landingNew}>
      <div className={styles.landingNewChild} />
      <div className={styles.landingNewItem} />
      <FrameComponent4 />
      <div className={styles.landingNewInner}>
        <FrameComponent3 />
      </div>
      <section className={styles.frameSection}>
        <div className={styles.frameParent}>
          <FrameComponent2 />
          <FrameComponent5 />
        </div>
      </section>
      <section className={styles.landingNewInner1}>
        <div className={styles.frameGroup}>
          <GroupComponent productImageOne="/rectangle-1-7@2x.png" />
          <GroupComponent productImageOne="/rectangle-1-8@2x.png" />
          <GroupComponent productImageOne="/rectangle-1-9@2x.png" />
          <GroupComponent productImageOne="/rectangle-1-10@2x.png" />
          <GroupComponent1
            rectangle1="/rectangle-1-11@2x.png"
            propWidth="122px"
          />
          <GroupComponent productImageOne="/rectangle-1-12@2x.png" />
          <GroupComponent productImageOne="/rectangle-1-13@2x.png" />
        </div>
      </section>
      <FooterV />
      <img className={styles.component1Icon} alt="" src="/component-1@2x.png" />
      <img className={styles.component2Icon} alt="" src="/component-2@2x.png" />
    </div>
  );
};

export default LandingNew;
