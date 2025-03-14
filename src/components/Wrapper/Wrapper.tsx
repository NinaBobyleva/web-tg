import classNames from 'classnames';
import styles from './wrapper.module.css'

type WrapperProp = {
    children: React.ReactNode;
}

export const Wrapper = ({children}: WrapperProp) => {
    return (
        <div className={classNames(styles.wrapper, styles.center)}>{children}</div>
    )
}