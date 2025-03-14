import { useEffect } from "react";
import styles from "./app.module.css";
import { Wrapper } from "./components/Wrapper/Wrapper";
import { getAllMaterials } from "./api/apiMaterials";

function App() {
  useEffect(() => {
    const data = getAllMaterials();

    console.log("data", data);
  }, []);
  return (
    <Wrapper>
      <h1 className={styles.title}>Редактирование заказа</h1>
    </Wrapper>
  );
}

export default App;
