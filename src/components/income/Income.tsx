import { HeadingSection } from "../headingSection/HeadingSection";
import styles from "./Income.module.scss";

export const Income = ({ title }: { title: string }) => {
  return (
    <div className={styles.income}>
      <HeadingSection title={title} linkName="..." />
      <span className={styles.price}>$2.240</span>
      <div className={styles.wrap}>
        <span>This weeks income</span>
        <div className={styles.percent}>+12%</div>
      </div>
    </div>
  );
};
