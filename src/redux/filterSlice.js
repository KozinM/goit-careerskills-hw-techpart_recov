import { createSlice } from '@reduxjs/toolkit';
import { usersFilters } from './constants';

const filterInitialState = usersFilters.all;

const filterSlice = createSlice({
  name: 'filter',
  initialState: filterInitialState,
  reducers: {
    setUsersFilter(state, action) {
      return action.payload;
    },
  },
});


export const { setUsersFilter } = filterSlice.actions;

export const filterReducer = filterSlice.reducer;
