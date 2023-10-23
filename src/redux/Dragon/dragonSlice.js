import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';

const initialState = {
  isloading: false,
  dragons: [],
  isrejected: false,
};

export const DragonFetch = createAsyncThunk('fetchdragon', async () => {
  const response = await fetch('https://api.spacexdata.com/v4/dragons');
  const dragons = await response.json();
  const dragonsWithReservedFlag = dragons.map((dragon) => ({
    ...dragon,
    isreserved: false,
  }));

  return dragonsWithReservedFlag;
});
const DragonSlice = createSlice({
  name: 'Dragon',
  initialState,
  reducers: {
    reserveDragon: (state, action) => {
      const dragonId = action.payload;
      const updatedDragons = state.dragons.map((dragon) => {
        if (dragon.id === dragonId) {
          return {
            ...dragon,
            isreserved: !dragon.isreserved,
          };
        }
        return dragon;
      });
      return {
        ...state,
        dragons: updatedDragons,
      };
    },
  },
  extraReducers: (builder) => {
    builder.addCase(DragonFetch.pending, (state) => ({
      ...state,
      isloading: true,
    }));
    builder.addCase(DragonFetch.fulfilled, (state, action) => ({
      ...state,
      isloading: false,
      dragons: action.payload,
    })); builder.addCase(DragonFetch.rejected, (state) => ({
      ...state,
      isloadging: false,
      isrejected: true,
    }));
  },
});

export default DragonSlice.reducer;
export const { reserveDragon } = DragonSlice.actions;
