import styles from "./modal.module.css";

export const Modal = ({title}: {title: string}) => {
  return (
    <div className={styles.modalBox}>
      <p className={styles.modalTitle}>{title}</p>
      <img className={styles.modalImg} src="./img/icons-completed.svg" alt="completed" />
    </div>
  );
};
