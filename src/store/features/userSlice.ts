import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { UserType } from "../../types/types";

type SeminarsStateType = {
  user: UserType | null;
  id: number | undefined;
  error: string;
};

const initialState: SeminarsStateType = {
  user: null,
  id: 0,
  error: "",
};

const userSlice = createSlice({
  name: "user",
  initialState,
  reducers: {
    setUser: (state, action: PayloadAction<UserType | null>) => {
      state.user = action.payload;
      state.id = state.user?.id;
    },
  },
});

export const { setUser } = userSlice.actions;
export const userReducers = userSlice.reducer;
