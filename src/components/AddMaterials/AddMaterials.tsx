import { AddMaterialsBlock } from "../AddMaterialsBlock/AddMaterialsBlock";
import { DirectoryOrders } from "../DirectoryOrders/DirectoryOrders";
import { EditOrderBlock } from "../EditOrderBlock/EditOrderBlock";

export const AddMaterials = () => {
  return (
    <>
      <EditOrderBlock />
      <AddMaterialsBlock />
      <DirectoryOrders />
    </>
  );
};
