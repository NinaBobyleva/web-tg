import styles from './input.module.css'

type InputProp = {
    type: string;
}

export const Input = ({type}: InputProp) => {
    return <input className={styles.input} type={type} />
}