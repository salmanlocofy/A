import { FunctionComponent } from "react";
import styles from "./FrameComponent3.module.css";

export type FrameComponent3Type = {
  className?: string;
};

const FrameComponent3: FunctionComponent<FrameComponent3Type> = ({
  className = "",
}) => {
  return (
    <div className={[styles.frameParent, className].join(" ")}>
      <button className={styles.rectangleParent}>
        <div className={styles.frameChild} />
        <b className={styles.healthMatters}>{`Health Matters `}</b>
        <img className={styles.frameItem} alt="" src="/group-20.svg" />
      </button>
      <div className={styles.frameWrapper}>
        <div className={styles.oneStepSolutionForAllYourParent}>
          <h1 className={styles.oneStepSolutionContainer}>
            <span>
              <p className={styles.oneStepSolution}>{`One Step Solution `}</p>
              <p className={styles.forAllYour}>for all your dietary needs.</p>
            </span>
          </h1>
          <div className={styles.wrapperBackgroundParent}>
            <div className={styles.wrapperBackground}>
              <img
                className={styles.backgroundIcon}
                alt=""
                src="/background.svg"
              />
            </div>
            <img
              className={styles.kisspngPhysicianDiabetesMelIcon}
              alt=""
              src="/kisspngphysiciandiabetesmellituscomputerdiseaseprevedoctorandcomputer5a99b82dcadc58-1@2x.png"
            />
          </div>
        </div>
      </div>
      <div className={styles.frameGroup}>
        <div className={styles.usingYourBmiIndexWeCalculWrapper}>
          <b className={styles.usingYourBmi}>
            Using your BMI index we calculate whether the dish is suitable for
            you.
          </b>
        </div>
        <div className={styles.rectangleGroup}>
          <div className={styles.frameInner} />
          <div className={styles.searchYourProductWrapper}>
            <div className={styles.searchYourProduct}>Search your product</div>
          </div>
          <div className={styles.frameContainer}>
            <img
              className={styles.groupIcon}
              loading="lazy"
              alt=""
              src="/group-237461.svg"
            />
            <img
              className={styles.frameChild1}
              loading="lazy"
              alt=""
              src="/group-237462.svg"
            />
            <img
              className={styles.frameChild2}
              loading="lazy"
              alt=""
              src="/group-237463.svg"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default FrameComponent3;
