import { FunctionComponent } from "react";
import FooterColumn from "./FooterColumn";
import styles from "./FooterV.module.css";

export type FooterVType = {
  className?: string;
};

const FooterV: FunctionComponent<FooterVType> = ({ className = "" }) => {
  return (
    <footer className={[styles.footerV1, className].join(" ")}>
      <div className={styles.divider} />
      <div className={styles.footerV1Inner}>
        <div className={styles.frameParent}>
          <div className={styles.frameGroup}>
            <div className={styles.frameContainer}>
              <img className={styles.frameChild} alt="" src="/group-1.svg" />
              <div className={styles.frameDiv}>
                <div className={styles.frameParent1}>
                  <div className={styles.logoShapeParent}>
                    <div className={styles.logoShape} />
                    <div className={styles.rectangleParent}>
                      <div className={styles.frameItem} />
                      <div className={styles.frameInner} />
                    </div>
                  </div>
                  <div className={styles.healthyme}>HealthyMe</div>
                </div>
                <p className={styles.copyright}>
                  Lorem ipsum dolor sit amet consectetur adipiscing elit aliquam
                </p>
                <div className={styles.socialMediaIconSquarefacebParent}>
                  <div className={styles.socialMediaIconSquarefaceb}>
                    <div className={styles.socialMediaIcon} />
                    <img
                      className={styles.facebookIcon}
                      loading="lazy"
                      alt=""
                      src="/facebook.svg"
                    />
                  </div>
                  <div className={styles.socialMediaIconSquaretwittWrapper}>
                    <div className={styles.socialMediaIconSquaretwitt}>
                      <div className={styles.socialMediaIcon1} />
                      <img
                        className={styles.twitterIcon}
                        loading="lazy"
                        alt=""
                        src="/twitter.svg"
                      />
                    </div>
                  </div>
                  <img
                    className={styles.socialMediaIconSquareinsta}
                    loading="lazy"
                    alt=""
                    src="/social-media-icon-squareinstagram@2x.png"
                  />
                  <div className={styles.socialMediaIconSquarelinke}>
                    <div className={styles.socialMediaIcon2} />
                    <img
                      className={styles.linkedinIcon}
                      loading="lazy"
                      alt=""
                      src="/linkedin.svg"
                    />
                  </div>
                  <div className={styles.socialMediaIconSquareyoutuWrapper}>
                    <div className={styles.socialMediaIconSquareyoutu}>
                      <div className={styles.socialMediaIcon3} />
                      <img
                        className={styles.youtubeIcon}
                        loading="lazy"
                        alt=""
                        src="/youtube.svg"
                      />
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className={styles.frameParent2}>
              <div className={styles.footerColumnWrapper}>
                <div className={styles.footerColumn}>
                  <b className={styles.footerTitle}>Product</b>
                  <div className={styles.footerLinks}>
                    <div className={styles.link}>
                      <div className={styles.masterLink}>
                        <img
                          className={styles.lineRoundedpasswordIcon}
                          alt=""
                          src="/line-roundedpassword.svg"
                        />
                        <div className={styles.features}>Features</div>
                        <img
                          className={styles.lineRoundedchevronDown}
                          alt=""
                          src="/line-roundedchevron-down.svg"
                        />
                      </div>
                    </div>
                    <div className={styles.link1}>
                      <div className={styles.masterLink1}>
                        <img
                          className={styles.lineRoundedpasswordIcon1}
                          alt=""
                          src="/line-roundedpassword.svg"
                        />
                        <div className={styles.pricing}>Pricing</div>
                        <img
                          className={styles.lineRoundedchevronDown1}
                          alt=""
                          src="/line-roundedchevron-down.svg"
                        />
                      </div>
                    </div>
                    <div className={styles.link2}>
                      <div className={styles.masterLink2}>
                        <img
                          className={styles.lineRoundedpasswordIcon2}
                          alt=""
                          src="/line-roundedpassword.svg"
                        />
                        <div className={styles.caseStudies}>Case studies</div>
                        <img
                          className={styles.lineRoundedchevronDown2}
                          alt=""
                          src="/line-roundedchevron-down.svg"
                        />
                      </div>
                    </div>
                    <div className={styles.link3}>
                      <div className={styles.masterLink3}>
                        <img
                          className={styles.lineRoundedpasswordIcon3}
                          alt=""
                          src="/line-roundedpassword.svg"
                        />
                        <div className={styles.reviews}>Reviews</div>
                        <img
                          className={styles.lineRoundedchevronDown3}
                          alt=""
                          src="/line-roundedchevron-down.svg"
                        />
                      </div>
                    </div>
                    <div className={styles.link4}>
                      <div className={styles.masterLink4}>
                        <img
                          className={styles.lineRoundedpasswordIcon4}
                          alt=""
                          src="/line-roundedpassword.svg"
                        />
                        <div className={styles.updates}>Updates</div>
                        <img
                          className={styles.lineRoundedchevronDown4}
                          alt=""
                          src="/line-roundedchevron-down.svg"
                        />
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <FooterColumn
                footerTitle="Company"
                about="About"
                contactUs="Contact us"
                careers="Careers"
                culture="Culture"
                blog="Blog"
              />
              <FooterColumn
                footerTitle="Support"
                about="Getting started"
                contactUs="Help center"
                careers="Server status"
                culture="Report a bug"
                blog="Chat support"
              />
            </div>
            <div className={styles.footerTitleParent}>
              <b className={styles.footerTitle1}>Contacts us</b>
              <div className={styles.linkParent}>
                <div className={styles.link5}>
                  <div className={styles.masterLink5}>
                    <img
                      className={styles.lineRoundedemailIcon}
                      loading="lazy"
                      alt=""
                      src="/line-roundedemail.svg"
                    />
                    <div className={styles.linkItem}>contact@company.com</div>
                    <img
                      className={styles.lineRoundedchevronDown5}
                      alt=""
                      src="/line-roundedchevron-down1.svg"
                    />
                  </div>
                </div>
                <div className={styles.link6}>
                  <div className={styles.masterLink6}>
                    <img
                      className={styles.lineRoundedphoneIcon}
                      loading="lazy"
                      alt=""
                      src="/line-roundedphone.svg"
                    />
                    <div className={styles.linkItem1}>(414) 687 - 5892</div>
                    <img
                      className={styles.lineRoundedchevronDown6}
                      alt=""
                      src="/line-roundedchevron-down1.svg"
                    />
                  </div>
                </div>
                <div className={styles.spacerIconWrapperParent}>
                  <img
                    className={styles.spacerIconWrapper}
                    loading="lazy"
                    alt=""
                    src="/spacer-icon-wrapper.svg"
                  />
                  <div className={styles.footerDescription}>
                    <p className={styles.mcallisterSt}>794 Mcallister St</p>
                    <p className={styles.sanFrancisco94102}>
                      San Francisco, 94102
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className={styles.lineParent}>
            <div className={styles.lineDiv} />
            <div className={styles.frameWrapper}>
              <div className={styles.footerLeftParent}>
                <div className={styles.footerLeft}>{`Copyright © 2022 `}</div>
                <p className={styles.footerRight}>
                  <span>{`All Rights Reserved | `}</span>
                  <span className={styles.termsAndConditions}>
                    Terms and Conditions
                  </span>
                  <span>{` | `}</span>
                  <span className={styles.privacyPolicy}>Privacy Policy</span>
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default FooterV;
