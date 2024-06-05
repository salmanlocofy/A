import { FunctionComponent } from "react";
import styles from "./GroupComponent.module.css";

export type GroupComponentType = {
  className?: string;
  productImageOne?: string;
};

const GroupComponent: FunctionComponent<GroupComponentType> = ({
  className = "",
  productImageOne,
}) => {
  return (
    <div className={[styles.frameParent, className].join(" ")}>
      <div className={styles.productImageOneWrapper}>
        <img
          className={styles.productImageOne}
          loading="lazy"
          alt=""
          src={productImageOne}
        />
      </div>
      <div className={styles.productNameParent}>
        <b className={styles.productName}>Product Name</b>
        <div className={styles.loremIpsumAmetContainer}>
          <span>
            <p className={styles.loremIpsum}>{`Lorem ipsum `}</p>
            <p className={styles.ametDolorEtit}>amet dolor, etit tu</p>
          </span>
        </div>
      </div>
    </div>
  );
};

export default GroupComponent;
