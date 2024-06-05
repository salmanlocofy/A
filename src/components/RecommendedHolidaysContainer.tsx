import { FunctionComponent } from "react";
import HolidayCard from "./HolidayCard";
import styles from "./RecommendedHolidaysContainer.module.css";

export type RecommendedHolidaysContainerType = {
  className?: string;
};

const RecommendedHolidaysContainer: FunctionComponent<
  RecommendedHolidaysContainerType
> = ({ className = "" }) => {
  return (
    <div className={[styles.recommendedHolidaysContainer, className].join(" ")}>
      <div className={styles.recTitle}>
        <h2 className={styles.recommendedHolidays}>Recommended Holidays</h2>
        <div className={styles.viewAllHolidays}>
          <a className={styles.viewAllHolidays1}>View all holidays</a>
          <img
            className={styles.arrowrighticon}
            alt=""
            src="/arrowrighticon-1@2x.png"
          />
        </div>
      </div>
      <div className={styles.recCardsContainer}>
        <HolidayCard image="/image@2x.png" id="4D3N" price="$899" />
        <HolidayCard image="/image-1@2x.png" id="6D5N" price="$900" />
        <HolidayCard image="/image-2@2x.png" id="5D4N" price="$699" />
        <HolidayCard image="/image-3@2x.png" id="4D3N" price="$789" />
      </div>
      <div className={styles.viewAllBottom}>
        <i className={styles.viewAllHolidays2}>View all holidays</i>
        <img
          className={styles.arrowRightIcon}
          loading="lazy"
          alt=""
          src="/arrowright.svg"
        />
      </div>
    </div>
  );
};

export default RecommendedHolidaysContainer;
