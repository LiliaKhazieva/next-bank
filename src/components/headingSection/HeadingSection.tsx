import { ReactNode } from "react";
import styles from "./HeadingSection.module.scss";

interface Props {
  title: string;
  linkName?: string;
  size?: string;
}

export const HeadingSection = ({
  title,
  size = "20px",
  linkName = "View All >",
}: Props) => {
  return (
    <div className={styles.title}>
      <h3 style={{ fontSize: size }}>{title}</h3>
      <a href="#">{linkName}</a>
    </div>
  );
};
