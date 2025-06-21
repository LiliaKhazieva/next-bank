import { Heading } from "../heading/Heading";
import { HeadingSection } from "../headingSection/HeadingSection";
import styles from "./Flow.module.scss";

export const Flow = () => {
  return (
    <section className={styles.flow}>
      <HeadingSection title={"Revenue Flow"} />
      <div className={styles.chartWrapper}>
        <ul className={styles.scale}>
          <li>2.5$</li>
          <li>2.0$</li>
          <li>1.5$</li>
          <li>1.0$</li>
          <li>0.5$</li>
          <li>0$</li>
        </ul>
        <ul className={styles.chart}>
          <li>
            <div
              className={styles.chartHeight}
              style={{ height: "100px" }}
            ></div>
            <span>Mar</span>
          </li>
          <li>
            <div
              className={styles.chartHeight}
              style={{ height: "120px" }}
            ></div>
            <span>Apr</span>
          </li>
          <li>
            <div
              className={styles.chartHeight}
              style={{ height: "80px" }}
            ></div>
            <span>May</span>
          </li>
          <li>
            <div
              className={`${styles.chartHeight} ${styles.active}`}
              style={{ height: "90px" }}
            ></div>
            <span>Jun</span>
          </li>
          <li>
            <div
              className={styles.chartHeight}
              style={{ height: "70px" }}
            ></div>
            <span>Jul</span>
          </li>
          <li>
            <div
              className={styles.chartHeight}
              style={{ height: "100px" }}
            ></div>
            <span>Aug</span>
          </li>
        </ul>
      </div>
    </section>
  );
};
