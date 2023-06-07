import axios from "axios";
import { createAsyncThunk } from "@reduxjs/toolkit";

axios.defaults.baseURL = "https://647def07af984710854aa293.mockapi.io/";

export const fetchUsers = createAsyncThunk("users/fetchAll",
 async (_,thunkAPI) => {
    try{
      
    const response = await axios.get("/users");
    let result = response.data.map((item)=>{return {...item, status:"follow"}});

    return result;
    }
    catch (e) {
        return thunkAPI.rejectWithValue(e.message);
    }  
});