import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { CurrentOrderType } from '../../types/types';

interface StorageState {
  data: CurrentOrderType;
  status: 'idle' | 'loading' | 'succeeded' | 'failed';
}

const initialState: StorageState = {
  data: JSON.parse(
    typeof window !== 'undefined' 
      ? localStorage.getItem('tg_storage') || '{}'
      : '{}'
  ),
  status: 'idle',
};

const telegramStorageSlice = createSlice({
  name: 'telegramStorage',
  initialState,
  reducers: {
    setItem: (state, action: PayloadAction<CurrentOrderType>) => {
      state.data = action.payload;
    },
    // removeItem: (state, action: PayloadAction<string>) => {
    //   delete state.data[action.payload];
    // },
    // clearStorage: (state) => {
    //   state.data = {};
    // },
  },
});

export const { setItem } = telegramStorageSlice.actions;

export const telegramStorageReducer = telegramStorageSlice.reducer;