import styles from "./form.module.css";

type FormProp = {
  children: React.ReactNode;
};

export const Form = ({ children }: FormProp) => {
  return <form className={styles.form}>{children}</form>;
};
