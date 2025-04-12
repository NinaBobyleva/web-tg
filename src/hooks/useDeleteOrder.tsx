import { deleteOrder } from "../api/apiOrders";
import { setOrders } from "../store/features/materialsSlice";
import { useAppDispatch } from "../store/store";
import { CurrentOrderType } from "../types/types";

export const useDeleteOrder = ({id}: {id: number | CurrentOrderType | undefined}) => {
  const dispatch = useAppDispatch();
  const handleDeleteOrder = async () => {
    deleteOrder({ id }).then((res) => {
      dispatch(setOrders(res.results));
      // dispatch(setUserOrders());
    });
  };

  return handleDeleteOrder;
};
