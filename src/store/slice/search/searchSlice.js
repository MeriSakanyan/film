import { createSlice } from '@reduxjs/toolkit';
import { fetchSearch } from './searchApi';  
 
const searchSlice = createSlice({
       name: "search",
       initialState: {
        isLoading: true,
        data: [],
        isError: false,
        },
    extraReducers: (builder) => {
        builder.addCase(fetchSearch.pending, (state, action) => {
        state.isLoading = true
        })
        .addCase(fetchSearch.fulfilled, (state, action) => {
        state.isLoading = false;
        state.data = action.payload;
       })
       .addCase(fetchSearch.rejected, (state, action) => {
        state.isLoading = false;
        state.isError = true;
       })
    }
});

export const selectSearch = state => state.search;
export const searchReducer = searchSlice.reducer;