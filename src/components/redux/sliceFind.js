const { createSlice } = require('@reduxjs/toolkit');

const initialState = { value: '' };

export const findSlice = createSlice({
  name: 'find',
  initialState: initialState,
  reducers: {
    getFindValue(state, action) {
      state.value = action.payload;
    },
  },
});

export const { getFindValue } = findSlice.actions;
export const selectFind = state => state.find.value;
export const findReduser = findSlice.reducer;
