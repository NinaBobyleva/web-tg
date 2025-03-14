import styles from './wrapper.module.css'

type WrapperProp = {
    children: React.ReactNode;
}

export const Wrapper = ({children}: WrapperProp) => {
    return (
        <div className={styles.wrapper}>{children}</div>
    )
}