import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';

// Action
export const fetchFilms = createAsyncThunk('fetchFilms', async ({url}) => {
     try {
        const response = await fetch(`${url}`);
        return response.json();
        } catch (error) {
                   console.log(error)
                  }
});



const filmSlice = createSlice({
       name: "film",
       initialState: {
       isLoading: true,
       data: null,
       esError: false,
    },
    extraReducers: (builder) => {
        builder.addCase(fetchFilms.pending, (state, action) => {
            state.isLoading = true
        })
       builder.addCase(fetchFilms.fulfilled, (state, action) => {
        state.isLoading = false;
        state.data = action.payload;
       });
       builder.addCase(fetchFilms.rejected, (state, action) => {
        state.isError = false;
       })
    }
});

export default filmSlice.reducer;