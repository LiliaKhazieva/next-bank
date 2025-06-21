import { HeadingSection } from "../headingSection/HeadingSection";
import styles from "./Card.module.scss";

export const Card = () => {
  return (
    <section className={styles.card}>
      <HeadingSection title="My Card" />
      <div className={styles.wrapper}>
        <span className={styles.title}>Total Balance</span>
        <span className={styles.balance}>$22,350.50</span>
      </div>
      <div className={styles.transactions}>
        <div className={styles.dataCard}>
          <span>4358 4445 0935 2323</span>
          <span>08/24</span>
        </div>

        <ul className={styles.list}>
          <HeadingSection title="Transactions" />
          <li>
            <div>
              <div className={styles.containerImg}>
                <img
                  src="https://images.unsplash.com/vector-1739953047122-44a67a066edd?q=80&w=2960&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                  alt="transactions"
                />
              </div>
              <span>Figma</span>
            </div>
            <span>-$ 15, 00</span>
          </li>
          <li>
            <div>
              <div className={styles.containerImg}>
                <img
                  src="https://images.unsplash.com/vector-1739953047122-44a67a066edd?q=80&w=2960&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                  alt="transactions"
                />
              </div>
              <span>GameShop</span>
            </div>
            <span>-$ 120, 00</span>
          </li>
          <li>
            <div>
              <div className={styles.containerImg}>
                <img
                  src="https://images.unsplash.com/vector-1739953047122-44a67a066edd?q=80&w=2960&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                  alt="transactions"
                />
              </div>
              <span>Blender</span>
            </div>
            <span>-$ 10, 00</span>
          </li>
        </ul>
      </div>
    </section>
  );
};
