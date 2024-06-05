import { FunctionComponent } from "react";
import styles from "./Footer.module.css";

export type FooterType = {
  className?: string;
};

const Footer: FunctionComponent<FooterType> = ({ className = "" }) => {
  return (
    <footer className={[styles.footer, className].join(" ")}>
      <div className={styles.footerLinks}>
        <div className={styles.fickleflightBio}>
          <img
            className={styles.logowhiteIcon}
            loading="lazy"
            alt=""
            src="/logowhite@2x.png"
          />
          <i className={styles.fickleFlightIs}>
            Fickle Flight is your one-stop travel portal. We offer hassle free
            flight and hotel bookings. We also have all your flight needs in you
            online shop.
          </i>
          <div className={styles.socialMediaLinksContainer}>
            <div className={styles.socialMediaLink}>
              <img
                className={styles.facebookIcon}
                loading="lazy"
                alt=""
                src="/facebook1@2x.png"
              />
            </div>
            <div className={styles.socialMediaLink1}>
              <img
                className={styles.instagramIcon}
                loading="lazy"
                alt=""
                src="/instagram@2x.png"
              />
            </div>
            <div className={styles.socialMediaLink2}>
              <img
                className={styles.twitterIcon}
                loading="lazy"
                alt=""
                src="/twitter1@2x.png"
              />
            </div>
          </div>
        </div>
        <div className={styles.containers}>
          <i className={styles.company}>Company</i>
          <div className={styles.linkContainer}>
            <i className={styles.aboutUs}>About Us</i>
            <i className={styles.news}>News</i>
            <i className={styles.careers}>Careers</i>
            <i className={styles.howWeWork}>How we work</i>
          </div>
        </div>
        <div className={styles.containers1}>
          <i className={styles.support}>Support</i>
          <div className={styles.linkContainer1}>
            <i className={styles.account}>Account</i>
            <i className={styles.supportCenter}>Support Center</i>
            <i className={styles.faq}>FAQ</i>
            <i className={styles.accessibility}>Accessibility</i>
          </div>
        </div>
        <div className={styles.containers2}>
          <i className={styles.more}>More</i>
          <div className={styles.linkContainer2}>
            <i className={styles.covidAdvisory}>Covid Advisory</i>
            <i className={styles.airlineFees}>Airline Fees</i>
            <i className={styles.tips}>Tips</i>
            <i className={styles.quarantineRules}>Quarantine Rules</i>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
