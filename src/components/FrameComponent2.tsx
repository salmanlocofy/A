import { FunctionComponent } from "react";
import styles from "./FrameComponent2.module.css";

export type FrameComponent2Type = {
  className?: string;
};

const FrameComponent2: FunctionComponent<FrameComponent2Type> = ({
  className = "",
}) => {
  return (
    <div className={[styles.frameParent, className].join(" ")}>
      <div className={styles.frameGroup}>
        <div className={styles.featuresWeProvideParent}>
          <div className={styles.featuresWeProvide}>FEATURES WE PROVIDE</div>
          <div className={styles.calculatingBmiIsEasierParent}>
            <h1 className={styles.calculatingBmiIsContainer}>
              <span>
                <p className={styles.calculatingBmi}>Calculating BMI</p>
                <p className={styles.isEasier}>is easier</p>
              </span>
            </h1>
            <img
              className={styles.medicalheartRateIcon}
              loading="lazy"
              alt=""
              src="/medicalheart-rate.svg"
            />
          </div>
        </div>
        <div className={styles.weCalculateYourBmiIndexFrWrapper}>
          <b className={styles.weCalculateYour}>
            We calculate your BMI index from data like age, height, weight.
          </b>
        </div>
      </div>
      <div className={styles.frameContainer}>
        <div className={styles.frameWrapper}>
          <div className={styles.diet1Parent}>
            <img
              className={styles.diet1Icon}
              loading="lazy"
              alt=""
              src="/diet-1@2x.png"
            />
            <div className={styles.stats21Wrapper}>
              <img
                className={styles.stats21Icon}
                loading="lazy"
                alt=""
                src="/stats2-1@2x.png"
              />
            </div>
          </div>
        </div>
        <div className={styles.frameDiv}>
          <div className={styles.frameParent1}>
            <div className={styles.frameParent2}>
              <div className={styles.frameWrapper1}>
                <div className={styles.frameParent3}>
                  <div className={styles.foodRecomendationWrapper}>
                    <b className={styles.foodRecomendation}>
                      Food Recomendation
                    </b>
                  </div>
                  <b className={styles.nutritionalValue}>Nutritional Value</b>
                </div>
              </div>
              <div className={styles.frameParent4}>
                <div className={styles.frameParent5}>
                  <div className={styles.weProvideFoodRecomendationWrapper}>
                    <div className={styles.weProvideFood}>
                      We provide food recomendation according to your calorie
                      requirements.
                    </div>
                  </div>
                  <img
                    className={styles.chatbot1Icon}
                    loading="lazy"
                    alt=""
                    src="/chatbot-1@2x.png"
                  />
                </div>
                <div className={styles.getAllThe}>
                  Get all the nutritional values of your preferred dish.
                </div>
              </div>
            </div>
            <div className={styles.interactiveChatbotWrapper}>
              <b className={styles.interactiveChatbot}>Interactive Chatbot</b>
            </div>
          </div>
          <div className={styles.solveYourQueriesByInteractWrapper}>
            <div className={styles.solveYourQueries}>
              Solve your queries by interacting with our bot.
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FrameComponent2;
