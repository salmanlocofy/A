import { FunctionComponent } from "react";
import HotelCard from "./HotelCard";
import styles from "./PopularStays.module.css";

export type PopularStaysType = {
  className?: string;
};

const PopularStays: FunctionComponent<PopularStaysType> = ({
  className = "",
}) => {
  return (
    <div className={[styles.popularStays, className].join(" ")}>
      <div className={styles.holidaysView}>
        <h2 className={styles.popularStays1}>Popular Stays</h2>
        <div className={styles.holidaysView1}>
          <div className={styles.viewAllStaysButton}>
            <a className={styles.viewAllStays}>View all stays</a>
            <img
              className={styles.arrowrighticon}
              alt=""
              src="/arrowrighticon-1@2x.png"
            />
          </div>
        </div>
      </div>
      <div className={styles.hotelCards}>
        <HotelCard
          image="/image-4@2x.png"
          hotelType="Entire bungalow"
          hotelName="Matterhorn Suites"
          price="$575/night"
          rating="4.9"
          reviews="(60 reviews)"
          showVideoIcon
        />
        <HotelCard
          image="/image-5@2x.png"
          hotelType="2-Story beachfront suite"
          hotelName="Discovery Shores"
          price="$360/night"
          rating="4.8"
          reviews="(116 reviews)"
          showVideoIcon={false}
          propMinWidth="unset"
          propTextDecoration="unset"
          propMinWidth1="79px"
        />
        <HotelCard
          image="/image-6@2x.png"
          hotelType="Single deluxe hut"
          hotelName="Arctic Hut "
          price="$420/night"
          rating="4.7"
          reviews="(78 reviews)"
          showVideoIcon={false}
          propMinWidth="unset"
          propTextDecoration="none"
          propMinWidth1="72px"
        />
        <HotelCard
          image="/image-7@2x.png"
          hotelType="Lake Louise Inn"
          hotelName="Arctic Hut "
          price="$224/night"
          rating="4.6"
          reviews="(63 reviews)"
          showVideoIcon={false}
          propMinWidth="unset"
          propTextDecoration="unset"
          propMinWidth1="72px"
        />
      </div>
      <div className={styles.mobileViewAllStays}>
        <i className={styles.viewAllStays1}>View all stays</i>
        <img className={styles.arrowRightIcon} alt="" src="/arrowright-1.svg" />
      </div>
    </div>
  );
};

export default PopularStays;
