import { AddMaterialsBlock } from "../AddMaterialsBlock/AddMaterialsBlock";
import { DirectoryOrders } from "../DirectoryOrders/DirectoryOrders";
import { EditOrderBlock } from "../EditOrderBlock/EditOrderBlock";

export const CreateOrder = () => {
  return (
    <>
      <EditOrderBlock />
      <AddMaterialsBlock />
      <DirectoryOrders />
    </>
  );
};
