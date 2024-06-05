import { FunctionComponent } from "react";
import styles from "./PopDestinationsMain.module.css";

export type PopDestinationsMainType = {
  className?: string;
};

const PopDestinationsMain: FunctionComponent<PopDestinationsMainType> = ({
  className = "",
}) => {
  return (
    <div className={[styles.popDestinationsMain, className].join(" ")}>
      <div className={styles.destinationsTitles}>
        <div className={styles.titleContainer}>
          <i className={styles.planYourNext}>Plan your next trip</i>
          <h2 className={styles.mostPopularDestinations}>
            Most Popular Destinations
          </h2>
        </div>
        <div className={styles.viewAllTop}>
          <a className={styles.viewAllDestinations}>View all destinations</a>
          <img
            className={styles.arrowrighticon}
            alt=""
            src="/arrowrighticon@2x.png"
          />
        </div>
      </div>
      <div className={styles.cardsContainer}>
        <div className={styles.destinationcard}>
          <i className={styles.city}>Paris</i>
          <div className={styles.details}>
            <i className={styles.from}>from</i>
            <div className={styles.price}>$699</div>
          </div>
        </div>
        <div className={styles.destinationcard1}>
          <i className={styles.city1}>Greece</i>
          <div className={styles.details1}>
            <i className={styles.from1}>from</i>
            <div className={styles.price1}>$1079</div>
          </div>
        </div>
        <div className={styles.destinationcard2}>
          <i className={styles.city2}>Norway</i>
          <div className={styles.details2}>
            <i className={styles.from2}>from</i>
            <div className={styles.price2}>$895</div>
          </div>
        </div>
        <div className={styles.destinationcard3}>
          <i className={styles.city3}>Tuscany</i>
          <div className={styles.details3}>
            <i className={styles.from3}>from</i>
            <div className={styles.price3}>$1245</div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PopDestinationsMain;
