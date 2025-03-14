import styles from './buttonRed.module.css'

type ButtonRedProp = {
    title: string;
    onClick?: () => void;
}

export const ButtonRed = ({title, onClick}: ButtonRedProp) => {
    return <button className={styles.buttonRed} onClick={onClick}>{title}</button>
}