import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { UserType } from "../../types/types";

type SeminarsStateType = {
  user: UserType | null;
  error: string;
};

const initialState: SeminarsStateType = {
  user: null,
  error: "",
};

const userSlice = createSlice({
  name: "user",
  initialState,
  reducers: {
    setUser: (state, action: PayloadAction<UserType | null>) => {
      state.user = action.payload;
    },
  },
});

export const { setUser } = userSlice.actions;
export const userReducers = userSlice.reducer;
