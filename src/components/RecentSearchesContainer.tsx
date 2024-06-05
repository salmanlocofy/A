import { FunctionComponent } from "react";
import styles from "./RecentSearchesContainer.module.css";

export type RecentSearchesContainerType = {
  className?: string;
};

const RecentSearchesContainer: FunctionComponent<
  RecentSearchesContainerType
> = ({ className = "" }) => {
  return (
    <div className={[styles.recentSearchesContainer, className].join(" ")}>
      <div className={styles.recentSearchTitleContainer}>
        <i className={styles.recentSearches}>Recent Searches</i>
        <div className={styles.flightContainer}>
          <div className={styles.flightmaincontainer}>
            <div className={styles.toAndFrom}>
              <div className={styles.details}>
                <i className={styles.departurecitycode}>SIN</i>
                <i className={styles.departurecity}>Singapore</i>
              </div>
              <div className={styles.flightRoute}>
                <div className={styles.flightIcons}>
                  <div className={styles.departurePoint}>
                    <div className={styles.point} />
                  </div>
                  <div className={styles.flightIconsInner}>
                    <div className={styles.frameChild} />
                  </div>
                  <img
                    className={styles.ionairplaneIcon}
                    loading="lazy"
                    alt=""
                    src="/ionairplane.svg"
                  />
                  <div className={styles.flightIconsChild}>
                    <div className={styles.frameItem} />
                  </div>
                  <div className={styles.arrivalPoint}>
                    <div className={styles.point1} />
                  </div>
                </div>
              </div>
              <div className={styles.arrivalDetails}>
                <div className={styles.details1}>
                  <div className={styles.arrivalCodeContainer}>
                    <i className={styles.destinationcitycode}>LAX</i>
                  </div>
                  <i className={styles.destinationcity}>Los Angeles</i>
                </div>
              </div>
            </div>
            <div className={styles.departureDateContainer}>
              <div className={styles.departOnParent}>
                <i className={styles.departOn}>Depart on:</i>
                <i className={styles.date}>7 Sep 2021</i>
              </div>
            </div>
          </div>
          <div className={styles.flightmaincontainer1}>
            <div className={styles.toAndFrom1}>
              <div className={styles.details2}>
                <i className={styles.departurecitycode1}>LHR</i>
                <i className={styles.departurecity1}>London</i>
              </div>
              <div className={styles.flightIconsWrapper}>
                <div className={styles.flightIcons1}>
                  <div className={styles.pointWrapper}>
                    <div className={styles.point2} />
                  </div>
                  <div className={styles.frameDiv}>
                    <div className={styles.frameInner} />
                  </div>
                  <img
                    className={styles.ionairplaneIcon1}
                    alt=""
                    src="/ionairplane.svg"
                  />
                  <div className={styles.flightIconsInner1}>
                    <div className={styles.lineDiv} />
                  </div>
                  <div className={styles.pointContainer}>
                    <div className={styles.point3} />
                  </div>
                </div>
              </div>
              <div className={styles.detailsWrapper}>
                <div className={styles.details3}>
                  <i className={styles.destinationcitycode1}>DUB</i>
                  <div className={styles.destinationcityWrapper}>
                    <i className={styles.destinationcity1}>Dubai</i>
                  </div>
                </div>
              </div>
            </div>
            <div className={styles.flightmaincontainerInner}>
              <div className={styles.departOnGroup}>
                <i className={styles.departOn1}>Depart on:</i>
                <i className={styles.date1}>9 Sep 2021</i>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className={styles.prepareMenu}>
        <i className={styles.prepareForYour}>Prepare for your trip</i>
        <div className={styles.tripMenus}>
          <div className={styles.tripitem}>
            <img className={styles.icon} alt="" src="/icon-1@2x.png" />
            <i className={styles.text}>Hotel</i>
          </div>
          <div className={styles.tripitem1}>
            <img className={styles.icon1} alt="" src="/icon-2@2x.png" />
            <i className={styles.text1}>Attractions</i>
          </div>
          <div className={styles.tripitem2}>
            <img className={styles.icon2} alt="" src="/icon-3@2x.png" />
            <i className={styles.text2}>Eats</i>
          </div>
          <div className={styles.tripitem3}>
            <img className={styles.icon3} alt="" src="/icon-4@2x.png" />
            <i className={styles.text3}>Commute</i>
          </div>
          <div className={styles.tripitem4}>
            <img className={styles.icon4} alt="" src="/icon-5@2x.png" />
            <i className={styles.text4}>Taxi</i>
          </div>
          <div className={styles.tripitem5}>
            <img className={styles.icon5} alt="" src="/icon-6@2x.png" />
            <i className={styles.text5}>Movies</i>
          </div>
        </div>
      </div>
    </div>
  );
};

export default RecentSearchesContainer;
