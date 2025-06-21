import styles from "./Header.module.scss";
import { Search } from "../ui/search/Search";
import { Landmark } from "lucide-react";

export const Header = () => {
  return (
    <header className={`container ${styles.header}`}>
      <a href="/">
        <Landmark />
        <span>NextBank</span>
      </a>
      <Search />
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
