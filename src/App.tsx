import { useEffect } from "react";
// import styles from "./app.module.css";
import { Wrapper } from "./components/Wrapper/Wrapper";
import { getAllMaterials } from "./api/apiMaterials";
import { EditOrderBlock } from "./components/EditOrderBlock/EditOrderBlock";

function App() {
  useEffect(() => {
    const data = getAllMaterials();

    console.log("data", data);
  }, []);
  return (
    <Wrapper>
      <EditOrderBlock />
    </Wrapper>
  );
}

export default App;
