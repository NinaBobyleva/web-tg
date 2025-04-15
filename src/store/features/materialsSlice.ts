import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { AddressType, CategoriesType, CurrentOrderType, OrdersType } from "../../types/types";
import { setUser } from "./userSlice";

type SeminarsStateType = {
  categories: CategoriesType[];
  currentOrder: CurrentOrderType | null;
  orders: OrdersType[];
  addresses: AddressType[];
  currentAddress: string;
  isLoad: boolean;
  currentOrderId: number;
  error: string;
  userId: number | undefined;
};

const initialState: SeminarsStateType = {
  categories: [],
  currentOrder: null,
  orders: [],
  addresses: [],
  currentAddress: "",
  isLoad: false,
  currentOrderId: 0,
  error: "",
  userId: undefined,
};

const materialsSlice = createSlice({
  name: "materials",
  initialState,
  reducers: {
    setCategories: (state, action: PayloadAction<[]>) => {
      state.categories = action.payload;
    },
    setCurrentOrder: (state, action: PayloadAction<CurrentOrderType | null>) => {
      state.currentOrder = action.payload;
    },
    setIsLoad: (state, action: PayloadAction<boolean>) => {
      state.isLoad = action.payload;
    },
    setCurrentOrderId: (state, action: PayloadAction<number>) => {
      state.currentOrderId = action.payload;
    },
    setError: (state, action: PayloadAction<string>) => {
      state.error = action.payload;
    },
    setOrders: (state, action: PayloadAction<OrdersType[]>) => {
      state.orders = action.payload;
    },
    setAddresses: (state, action: PayloadAction<[]>) => {
      state.addresses = action.payload;
    },
    setCurrentAddress: (state, action: PayloadAction<string>) => {
      state.currentAddress = action.payload;
    }
  },
  extraReducers: (builder) => {
    builder.addCase(setUser, (state, action) => {
      state.userId = action?.payload?.id;
    });
  },
});

export const {
  setCategories,
  setCurrentOrder,
  setIsLoad,
  setCurrentOrderId,
  setError,
  setOrders,
  setAddresses,
  setCurrentAddress
} = materialsSlice.actions;
export const materialsReducers = materialsSlice.reducer;
