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
              </div>
            </section>
            <section className={styles.available}>
              <div className={styles.title}>
                <h3>Available</h3>
                <a href="#">View All {">"}</a>
              </div>
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
          </section>

          <div>My Card</div>
        </main>
      </div>
    </div>
  );
}

export default App;
