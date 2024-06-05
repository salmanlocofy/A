import { FunctionComponent } from "react";
import RecentSearchesContainer from "./RecentSearchesContainer";
import PopDestinationsMain from "./PopDestinationsMain";
import RecommendedHolidaysContainer from "./RecommendedHolidaysContainer";
import PopularStays from "./PopularStays";
import styles from "./Frame.module.css";

export type FrameType = {
  className?: string;
};

const Frame: FunctionComponent<FrameType> = ({ className = "" }) => {
  return (
    <section className={[styles.homeContentContainer, className].join(" ")}>
      <div className={styles.homeContents}>
        <RecentSearchesContainer />
        <PopDestinationsMain />
        <RecommendedHolidaysContainer />
        <PopularStays />
      </div>
    </section>
  );
};

export default Frame;
