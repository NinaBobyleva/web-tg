import { createSlice, createAsyncThunk, PayloadAction } from '@reduxjs/toolkit';

interface StorageState {
  data: Record<string, string>;
  status: 'idle' | 'loading' | 'succeeded' | 'failed';
  error: string | null;
}

const initialState: StorageState = {
  data: {},
  status: 'idle',
  error: null
};

export const loadFromTelegramStorage = createAsyncThunk(
  'storage/load',
  async () => {
    return new Promise<Record<string, string>>((resolve) => {
      if (window.Telegram?.WebApp?.CloudStorage?.getItems) {
        window.Telegram.WebApp.CloudStorage.getItems((err, items) => {
            resolve(err ? {} : items || {});
        });
      } else {
        resolve(JSON.parse(localStorage.getItem('tg_storage') || '{}'));
      }
    });
  }
);

export const saveToTelegramStorage = createAsyncThunk(
  'storage/save',
  async (payload: { key: string; value: string }) => {
    const { key, value } = payload;
    return new Promise<Record<string, string>>((resolve) => {
      if (window.Telegram?.WebApp?.CloudStorage?.setItem) {
        window.Telegram.WebApp.CloudStorage.setItem(key, value, (err) => {
          resolve(err ? {} : { [key]: value });
        });
      } else {
        const data = JSON.parse(localStorage.getItem('tg_storage') || '{}');
        data[key] = value;
        localStorage.setItem('tg_storage', JSON.stringify(data));
        resolve({ [key]: value });
      }
    });
  }
);

const telegramStorageSlice = createSlice({
  name: 'telegramStorage',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(loadFromTelegramStorage.pending, (state) => {
        state.status = 'loading';
      })
      .addCase(loadFromTelegramStorage.fulfilled, (state, action) => {
        state.status = 'succeeded';
        state.data = action.payload;
      })
      .addCase(saveToTelegramStorage.fulfilled, (state, action: PayloadAction<Record<string, string>>) => {
        state.data = { ...state.data, ...action.payload };
      });
  }
});

export const telegramStorageReducer = telegramStorageSlice.reducer;