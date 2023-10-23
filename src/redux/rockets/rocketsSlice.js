import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';

const initialState = {
  rockets: [],
  isLoading: true,
};

// function to get api data
export const getRockets = createAsyncThunk('rockets/getRocket', async () => {
  const response = await fetch('https://api.spacexdata.com/v3/rockets');
  const output = response.json();
  return output;
});

const rocketsSlice = createSlice({
  name: 'rockets',
  initialState,
  reducers: {
    toggleReserve: (state, action) => {
      const id = action.payload;
      const rocket = state.rockets.find((rocket) => rocket.rocketId === id);
      rocket.reserved = !rocket.reserved;
      localStorage.setItem(id, JSON.stringify(rocket.reserved));
    },
  },
  extraReducers: {
    [getRockets.pending]: (state) => {
      state.isLoading = true;
    },
    [getRockets.fulfilled]: (state, action) => {
      state.isLoading = false;
      const rocketDB = action.payload;
      if (rocketDB) {
        const newRockets = rocketDB.map((rocket) => {
          const {
            rocket_name: rocketName,
            rocket_id: rocketId,
            description,
            flickr_images: flickrImages,
          } = rocket;
          const reserved = JSON.parse(localStorage.getItem(rocketId)) || false;
          return {
            rocketName,
            rocketId,
            description,
            flickrImages,
            reserved,
          };
        });
        state.rockets = newRockets;
      }
    },
    [getRockets.rejected]: (state) => {
      state.isLoading = false;
    },
  },
});

export const { toggleReserve } = rocketsSlice.actions;

export default rocketsSlice.reducer;
