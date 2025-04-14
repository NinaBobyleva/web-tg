import { deleteOrder } from "../api/apiOrders";
import { setError, setOrders } from "../store/features/materialsSlice";
import { useAppDispatch } from "../store/store";
import { CurrentOrderType } from "../types/types";

export const useDeleteOrder = ({id}: {id: number | CurrentOrderType | undefined}) => {
  const dispatch = useAppDispatch();
  const handleDeleteOrder = async () => {
    deleteOrder({ id }).then((res) => {
      dispatch(setOrders(res.results));
    })
    .catch((error) => {
      dispatch(setError(error));
    })
  };

  return handleDeleteOrder;
};
