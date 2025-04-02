import styles from "./button.module.css";

type ButtonProp = {
  title: string;
  onClick?: () => void;
};

export const Button = ({ title, onClick }: ButtonProp) => {
  return (
    <button className={styles.button} onClick={onClick}>
      {title}
    </button>
  );
};
