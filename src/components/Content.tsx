import { FunctionComponent } from "react";
import styles from "./Content.module.css";

export type ContentType = {
  className?: string;
};

const Content: FunctionComponent<ContentType> = ({ className = "" }) => {
  return (
    <section className={[styles.content, className].join(" ")}>
      <div className={styles.searchSection}>
        <div className={styles.searchContainer}>
          <div className={styles.title}>
            <h1
              className={styles.letsExplore}
            >{`Let’s explore & travel the worldss`}</h1>
            <h3 className={styles.findTheBest}>
              Find the best destinations and the most popular stays!
            </h3>
          </div>
          <div className={styles.searchForm}>
            <div className={styles.formTitleGroup}>
              <div className={styles.searchFlightsWrapper}>
                <i className={styles.searchFlights}>Search flights</i>
              </div>
              <div className={styles.flightOptions}>
                <div className={styles.flightType}>
                  <div className={styles.radio}>
                    <div className={styles.padding}>
                      <img
                        className={styles.radiobuttonuncheckedIcon}
                        loading="lazy"
                        alt=""
                        src="/radiobuttonunchecked.svg"
                      />
                    </div>
                    <i className={styles.label}>Return</i>
                  </div>
                  <div className={styles.radio1}>
                    <div className={styles.padding1}>
                      <input
                        className={styles.radiobuttonchecked}
                        type="radio"
                        name="radioGroup-1"
                      />
                    </div>
                    <i className={styles.label1}>One-way</i>
                  </div>
                </div>
              </div>
            </div>
            <div className={styles.formInputsRow}>
              <div className={styles.inputsRow}>
                <div className={styles.departureField}>
                  <div className={styles.input}>
                    <div className={styles.labelContainer}>
                      <i className={styles.departure}>Departure</i>
                    </div>
                    <div className={styles.active}>
                      <div className={styles.muiautocompletetag}>
                        <div className={styles.chip}>
                          <div className={styles.container}>
                            <div className={styles.avatar}>
                              <div className={styles.op}>F</div>
                            </div>
                            <div className={styles.typography}>
                              <div className={styles.chip1}>Chip</div>
                            </div>
                            <img
                              className={styles.cancelIcon}
                              alt=""
                              src="/cancel.svg"
                            />
                          </div>
                        </div>
                        <div className={styles.chip2}>
                          <div className={styles.container1}>
                            <div className={styles.avatar1}>
                              <div className={styles.op1}>F</div>
                            </div>
                            <div className={styles.typography1}>
                              <div className={styles.chip3}>Chip</div>
                            </div>
                            <img
                              className={styles.cancelIcon1}
                              alt=""
                              src="/cancel.svg"
                            />
                          </div>
                        </div>
                      </div>
                      <i className={styles.singaporeSin}>Singapore (SIN)</i>
                    </div>
                  </div>
                </div>
                <div className={styles.arrivalField}>
                  <div className={styles.input1}>
                    <div className={styles.labelContainer1}>
                      <i className={styles.arrival}>Arrival</i>
                    </div>
                    <div className={styles.active1}>
                      <div className={styles.muiautocompletetag1}>
                        <div className={styles.chip4}>
                          <div className={styles.container2}>
                            <div className={styles.avatar2}>
                              <div className={styles.op2}>F</div>
                            </div>
                            <div className={styles.typography2}>
                              <div className={styles.chip5}>Chip</div>
                            </div>
                            <img
                              className={styles.cancelIcon2}
                              alt=""
                              src="/cancel.svg"
                            />
                          </div>
                        </div>
                        <div className={styles.chip6}>
                          <div className={styles.container3}>
                            <div className={styles.avatar3}>
                              <div className={styles.op3}>F</div>
                            </div>
                            <div className={styles.typography3}>
                              <div className={styles.chip7}>Chip</div>
                            </div>
                            <img
                              className={styles.cancelIcon3}
                              alt=""
                              src="/cancel.svg"
                            />
                          </div>
                        </div>
                      </div>
                      <i className={styles.losAngelesLa}>Los Angeles (LA)</i>
                    </div>
                  </div>
                </div>
                <div className={styles.selectoutlined}>
                  <i className={styles.select}>01/05/2022</i>
                  <div className={styles.labelContainer2}>
                    <i className={styles.date}>Date</i>
                  </div>
                </div>
              </div>
              <button className={styles.button}>
                <i className={styles.text}>Search</i>
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Content;
