import { HeadingSection } from "../headingSection/HeadingSection";
import styles from "./Available.module.scss";

export const Available = () => {
  return (
    <section className={styles.available}>
      <HeadingSection title="Available" />
      <div className={styles.availableChart}>
        <div className={`${styles.donut} ${styles.donutMask}`}></div>
        <div className={styles.list}>
          <div className={styles.itemWrapper}>
            <div className={styles.circle}></div>
            <div className={styles.item}>
              <span>Food</span>
              <span>$ 950</span>
            </div>
          </div>
          <div className={styles.itemWrapper}>
            <div className={styles.circle}></div>
            <div className={styles.item}>
              <span>Clothes</span>
              <span>$ 420</span>
            </div>
          </div>
          <div className={styles.itemWrapper}>
            <div className={styles.circle}></div>
            <div className={styles.item}>
              <span>Other</span>
              <span>$ 480</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
