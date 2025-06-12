import styles from "./Heading.module.scss";

interface Props {
  title: string;
}

export const Heading = ({ title }: Props) => {
  return <h1 className={styles.title}>{title}</h1>;
};
