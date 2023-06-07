import { createSlice } from '@reduxjs/toolkit';
import { fetchUsers } from './operations';
import { usersFilters } from './constants';

const usersInitialState = {
  items: [],
  isLoading: false,
  error: null,
  fetchedData: false,
};

const usersSlice = createSlice({
  name: 'users',
  initialState: usersInitialState,
  reducers:{
      userFollowToggle(state, action) {
        for (const user of state.items) {
          if (user.id === action.payload) {
            if (user.status === usersFilters.follow) {
              user.status = usersFilters.followings;
              user.followers=user.followers+1; 
            } else {
              user.status = usersFilters.follow;
              user.followers=user.followers-1; 
            }
            break;
          }
        }
      },
  },
  extraReducers: {
    [fetchUsers.pending](state) {
      state.isLoading = true;
    },
    [fetchUsers.fulfilled](state, action) {
      state.isLoading = false;
      state.error = null;
      state.items = action.payload;
      state.fetchedData = true;
    },
    [fetchUsers.rejected](state, action) {
      state.isLoading = false;
      state.error = action.payload;
    },
  },
});

export const usersReducer = usersSlice.reducer;

export const { userFollowToggle } = usersSlice.actions;
