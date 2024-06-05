import { FunctionComponent, useMemo, type CSSProperties } from "react";
import styles from "./GroupComponent1.module.css";

export type GroupComponent1Type = {
  className?: string;
  rectangle1?: string;

  /** Style props */
  propWidth?: CSSProperties["width"];
};

const GroupComponent1: FunctionComponent<GroupComponent1Type> = ({
  className = "",
  rectangle1,
  propWidth,
}) => {
  const frameDivStyle: CSSProperties = useMemo(() => {
    return {
      width: propWidth,
    };
  }, [propWidth]);

  return (
    <div className={[styles.rectangleParent, className].join(" ")}>
      <img className={styles.frameChild} alt="" src={rectangle1} />
      <div className={styles.frameWrapper}>
        <div className={styles.productNameParent} style={frameDivStyle}>
          <b className={styles.productName}>Product Name</b>
          <div className={styles.loremIpsumAmetContainer}>
            <span className={styles.loremIpsumAmetContainer1}>
              <p className={styles.loremIpsum}>{`Lorem ipsum `}</p>
              <p className={styles.ametDolorEtit}>amet dolor, etit tu</p>
            </span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default GroupComponent1;
