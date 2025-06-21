import { ReactNode } from "react";
import styles from "./Heading.module.scss";

interface Props {
  children: ReactNode;
  size?: string;
}

export const Heading = ({ children, size = "36px" }: Props) => {
  return (
    <h1 className={styles.title} style={{ fontSize: `${size}` }}>
      {children}
    </h1>
  );
};
