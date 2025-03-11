import "./App.css";
import { Button } from "./components/Button/Button";
import { Form } from "./components/Form/Form";
import { Input } from "./components/Input/Input";

function App() {
  return (
    <>
      <Form>
        <Input type="text" />
        <Input type="text" />
        <Input type="text" />
        <Button title="Отправить" />
      </Form>
    </>
  );
}

export default App;
