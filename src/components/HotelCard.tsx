import { FunctionComponent, useMemo, type CSSProperties } from "react";
import styles from "./HotelCard.module.css";

export type HotelCardType = {
  className?: string;
  image?: string;
  hotelType?: string;
  hotelName?: string;
  price?: string;
  rating?: string;
  reviews?: string;
  showVideoIcon?: boolean;

  /** Style props */
  propMinWidth?: CSSProperties["minWidth"];
  propTextDecoration?: CSSProperties["textDecoration"];
  propMinWidth1?: CSSProperties["minWidth"];
};

const HotelCard: FunctionComponent<HotelCardType> = ({
  className = "",
  image,
  hotelType,
  hotelName,
  price,
  rating,
  reviews,
  showVideoIcon,
  propMinWidth,
  propTextDecoration,
  propMinWidth1,
}) => {
  const stayDetailsRowsStyle: CSSProperties = useMemo(() => {
    return {
      minWidth: propMinWidth,
    };
  }, [propMinWidth]);

  const reviewsStyle: CSSProperties = useMemo(() => {
    return {
      textDecoration: propTextDecoration,
      minWidth: propMinWidth1,
    };
  }, [propTextDecoration, propMinWidth1]);

  return (
    <div className={[styles.hotelcard, className].join(" ")}>
      <img className={styles.imageIcon} alt="" src={image} />
      <div className={styles.stayDetails}>
        <div className={styles.stayDetailsRows} style={stayDetailsRowsStyle}>
          <i className={styles.hoteltype}>{hotelType}</i>
          <i className={styles.hotelname}>{hotelName}</i>
          <i className={styles.price}>{price}</i>
        </div>
        {showVideoIcon && (
          <img
            className={styles.videoIcon}
            loading="lazy"
            alt=""
            src="/video.svg"
          />
        )}
      </div>
      <div className={styles.rating}>
        <div className={styles.ratingContainer}>
          <img
            className={styles.starsIcon}
            loading="lazy"
            alt=""
            src="/vector.svg"
          />
          <i className={styles.rating1}>{rating}</i>
        </div>
        <a className={styles.reviews} style={reviewsStyle}>
          {reviews}
        </a>
      </div>
      <div className={styles.moreDetailsButton}>
        <i className={styles.button}>More details</i>
      </div>
    </div>
  );
};

export default HotelCard;
