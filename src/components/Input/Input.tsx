import styles from "./input.module.css";

type InputProp = {
  type: string;
  value: string;
};

export const Input = ({ type, value }: InputProp) => {
  return <input className={styles.input} readOnly type={type} value={value} />;
};
