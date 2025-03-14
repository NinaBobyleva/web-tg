import styles from './materials.module.css'

export const Materials = ({name}: {name: string}) => {
    return (
        <div className={styles.materialsBox}>
            <li className={styles.li}>{name}</li>
        </div>
    );
}