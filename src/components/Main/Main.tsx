import { AddMaterialsBlock } from "../AddMaterialsBlock/AddMaterialsBlock";
import { DirectoryOrders } from "../DirectoryOrders/DirectoryOrders";
import { EditOrderBlock } from "../EditOrderBlock/EditOrderBlock";
import { Wrapper } from "../Wrapper/Wrapper";

export const Main = () => {
  return (
    <Wrapper>
      <EditOrderBlock />
      <AddMaterialsBlock />
      <DirectoryOrders />
    </Wrapper>
  );
};
