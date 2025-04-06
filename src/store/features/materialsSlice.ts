import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { CategoriesBasketType, CategoriesType } from "../../types/types";

type SeminarsStateType = {
  categories: CategoriesType[];
  order: CategoriesBasketType[];
  isLoad: boolean;
  orderId: number
};

const initialState: SeminarsStateType = {
  categories: [],
  order: [],
  isLoad: false,
  orderId: 0,
};

const materialsSlice = createSlice({
  name: "materials",
  initialState,
  reducers: {
    setCategories: (state, action: PayloadAction<[]>) => {
      state.categories = action.payload;
    },
    setOrder: (state, action: PayloadAction<[]>) => {
        state.order = action.payload;
      },
    setIsLoad: (state, action: PayloadAction<boolean>) => {
        state.isLoad = action.payload;
    },
    setOrderId: (state, action: PayloadAction<number>) => {
        state.orderId = action.payload;
    },
  },
});

export const { setCategories, setOrder, setIsLoad, setOrderId } = materialsSlice.actions;
export const materialsReducers = materialsSlice.reducer;
