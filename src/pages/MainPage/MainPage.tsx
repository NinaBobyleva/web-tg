import { AddMaterialsBlock } from "../../components/AddMaterialsBlock/AddMaterialsBlock";
import { DirectoryOrders } from "../../components/DirectoryOrders/DirectoryOrders";
import { EditOrderBlock } from "../../components/EditOrderBlock/EditOrderBlock";
import { Wrapper } from "../../components/Wrapper/Wrapper";

export const MainPage = () => {
  return (
    <Wrapper>
      <EditOrderBlock />
      <AddMaterialsBlock />
      <DirectoryOrders />
    </Wrapper>
  );
};
