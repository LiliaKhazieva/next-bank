import styles from "./DashboardNav.module.scss";

export const DashboardNav = () => {
  return (
    <ul className={styles.dashboardNav}>
      <li className={styles.active}>All</li>
      <li>Withdrawal</li>
      <li>Savings</li>
      <li>Deposit</li>
    </ul>
  );
};
