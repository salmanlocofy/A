import { FunctionComponent } from "react";
import styles from "./HolidayCard.module.css";

export type HolidayCardType = {
  className?: string;
  image?: string;
  id?: string;
  price?: string;
};

const HolidayCard: FunctionComponent<HolidayCardType> = ({
  className = "",
  image,
  id,
  price,
}) => {
  return (
    <div className={[styles.holidaycard, className].join(" ")}>
      <img className={styles.imageIcon} loading="lazy" alt="" src={image} />
      <div className={styles.holidayDetails}>
        <div className={styles.container}>
          <i className={styles.city}>Bali</i>
          <i className={styles.id}>{id}</i>
        </div>
        <div className={styles.price}>{price}</div>
      </div>
    </div>
  );
};

export default HolidayCard;
