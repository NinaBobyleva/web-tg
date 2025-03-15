import styles from "./buttonGray.module.css";

type ButtonGrayProp = {
  title: string;
  onClick?: () => void;
};

export const ButtonGray = ({ title, onClick }: ButtonGrayProp) => {
  return (
    <button className={styles.button} onClick={onClick}>
      {title}
    </button>
  );
};
