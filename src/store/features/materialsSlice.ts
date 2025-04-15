import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { AddressType, CategoriesType, OrdersType } from "../../types/types";
import { setUser } from "./userSlice";

type SeminarsStateType = {
  categories: CategoriesType[];
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
    setIsLoad: (state, action: PayloadAction<boolean>) => {
      state.isLoad = action.payload;
    },
    setError: (state, action: PayloadAction<string>) => {
      state.error = action.payload;
    },
    setOrders: (state, action: PayloadAction<OrdersType[]>) => {
      state.orders = action.payload;
    },
    setAddresses: (state, action: PayloadAction<[]>) => {
      state.addresses = action.payload;
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
  setIsLoad,
  setError,
  setOrders,
  setAddresses
} = materialsSlice.actions;
export const materialsReducers = materialsSlice.reducer;
