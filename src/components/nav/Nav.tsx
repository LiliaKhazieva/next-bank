import {
  Bell,
  ChartNoAxesCombined,
  Home,
  LogOut,
  Settings,
  Wallet,
} from "lucide-react";
import styles from "./Nav.module.scss";

const Nav = () => {
  return (
    <nav className={styles.nav}>
      <div className={styles.wrapper}>
        <ul className={styles.list}>
          <li className={styles.active}>
            <a href="/">
              <Home />
            </a>
          </li>
          <li>
            <a href="/wallet">
              <Wallet />
            </a>
          </li>
          <li>
            <a href="/statistics">
              <ChartNoAxesCombined />
            </a>
          </li>
        </ul>
        <ul className={styles.list}>
          <li>
            <a href="/bell">
              <Bell />
            </a>
          </li>
          <li>
            <a href="/settings">
              <Settings />
            </a>
          </li>
        </ul>
      </div>
      <button type="reset">
        <LogOut />
      </button>
    </nav>
  );
};

export default Nav;
