import React from "react";
import styles from "./Header.module.scss";

type Props = {};

export const Header = (props: Props) => {
  return (
    <header className={`container ${styles.header}`}>
      <a href="/">
        <img src="logo.svg" alt="logo" />
        <span>NextBank</span>
      </a>
      <div className={styles.input}>
        <img src="search.svg" alt="search" width={20} />
        <input type="search" placeholder="Search payment" />
      </div>

      <div className={styles.content}>
        <span>Hi Lilian</span>
        <img
          src="https://images.unsplash.com/vector-1745847439151-58e18d3c676b?q=80&w=2726&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
          alt="user"
        />
      </div>
    </header>
  );
};
