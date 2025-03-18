import { AddMaterialsBlock } from "../AddMaterialsBlock/AddMaterialsBlock";
import { DirectoryOrders } from "../DirectoryOrders/DirectoryOrders";
import { EditOrderBlock } from "../EditOrderBlock/EditOrderBlock";
import { Header } from "../Header/Header";
import { Wrapper } from "../Wrapper/Wrapper";

export const Main = () => {
  return (
    <Wrapper>
      <Header />
      <EditOrderBlock />
      <AddMaterialsBlock />
      <DirectoryOrders />
    </Wrapper>
  );
};
