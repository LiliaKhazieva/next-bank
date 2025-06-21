import styles from "./Search.module.scss";
export const Search = () => {
  return (
    <div className={styles.searchWrap}>
      <input type="search" placeholder="Search payment" />
    </div>
  );
};
