import styles from "./App.module.scss";
import { Header } from "./components/header/Header";
import { Heading } from "./components/heading/Heading";
import Nav from "./components/nav/Nav";

function App() {
  return (
    <div className="App">
      <Header />
      <div className="container">
        <main>
          <Nav />
          <section className={styles.dashboards}>
            <Heading title="My Dashboard" />
            <ul className={styles.navList}>
              <li className={styles.active}>All</li>
              <li>Withdrawal</li>
              <li>Savings</li>
              <li>Deposit</li>
            </ul>
            <section className={styles.flow}>
              <div className={styles.title}>
                <h3>Revenue Flow</h3>
                <a href="#">View All {">"}</a>
              </div>
              <ul className={styles.chart}>
                <li>
                  <div className={styles.chartHeight}></div>
                  <span>Mar</span>
                </li>
                <li>
                  <div className={styles.chartHeight}></div>
                  <span>Apr</span>
                </li>
                <li>
                  <div className={styles.chartHeight}></div>
                  <span>May</span>
                </li>
                <li>
                  <div className={styles.chartHeight}></div>
                  <span>Jun</span>
                </li>
              </ul>
            </section>
          </section>

          <div>My Card</div>
        </main>
      </div>
    </div>
  );
}

export default App;
