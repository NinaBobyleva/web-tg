import styles from "./buttonGray.module.css";
import classNames from "classnames";

type ButtonGrayProp = {
  title: string;
  isDisabled?: boolean;
  onClick?: (e: React.FormEvent<HTMLButtonElement>) => void;
};

export const ButtonGray = ({ title, isDisabled, onClick }: ButtonGrayProp) => {
  return (
    <button disabled={isDisabled} className={classNames(isDisabled ? styles.buttonDisabled : styles.button)} onClick={onClick}>
      {title}
    </button>
  );
};
