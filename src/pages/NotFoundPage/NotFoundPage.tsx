import { Link } from "react-router-dom";
// import styles from "./notFoundPage.module.css";
import { paths } from "../../paths";

export const NotFoundPage = () => {
    return(
        <div>
            <h2>Not Found</h2>
            <p>404</p>
            <Link to={paths.NOT_FOUND}>Вернитесь на главную страницу</Link>
        </div>
    );
}