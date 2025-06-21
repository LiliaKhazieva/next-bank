import styles from "./App.module.scss";
import { Available } from "./components/available/Available";
import { Card } from "./components/card/Card";
import { DashboardNav } from "./components/dashboardNav/DashboardNav";
import { Flow } from "./components/flow/Flow";

import { Header } from "./components/header/Header";
import { Heading } from "./components/heading/Heading";
import { Income } from "./components/income/Income";
import Nav from "./components/nav/Nav";

function App() {
  return (
    <div className="App">
      <Header />
      <div className="container">
        <main>
          <Nav />
          <section className={styles.dashboards}>
            <Heading>My Dashboard</Heading>
            <DashboardNav />
            <Flow />
            <div>
              <Available />
              <div>
                <Income title="Income" />
                <Income title="Expense" />
              </div>
            </div>
          </section>
          <Card />
        </main>
      </div>
    </div>
  );
}

export default App;
