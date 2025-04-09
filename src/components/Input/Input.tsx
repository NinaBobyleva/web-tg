import styles from "./input.module.css";

type InputProp = {
  type: string;
  placeholder: string;
  value: string;
};

export const Input = ({ type, placeholder, value }: InputProp) => {
  return <input className={styles.input} type={type} placeholder={placeholder} value={value} />;
};
