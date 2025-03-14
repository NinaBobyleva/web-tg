import { MaterialsType } from '../../types/types';
import styles from './categorias.module.css'

type CategoriesProp = {
    materials: MaterialsType[];
    name: string;
}

export const Categories = ({materials, name}: CategoriesProp) => {
    const nameM = materials.find((el) => el.name);
    console.log(nameM);
    return (
        <li className={styles.li}>
            <div className={styles.categoryBox}>
                <p className={styles.category}>{name}</p>
                {/* <div className={styles.buttonBox}>
                    <Button title='Подробнее' />
                </div> */}
            </div>
        </li>
    );
}