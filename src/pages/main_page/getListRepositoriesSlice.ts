import { createSlice } from '@reduxjs/toolkit';
import { getListRespositories } from './reducers/actionRepositories';

const initialState :any = {
    data : [],
    loading : false,
    total_repositories : null,
    error : []
}

const repositories = createSlice({
    name : 'list-repositories',
    initialState,
    reducers : {},
    extraReducers : (builder) => {
        builder
         .addCase(getListRespositories.pending, (state) =>{
            state.loading = true,
            state.error = null
         })
         .addCase(getListRespositories.fulfilled, (state, action) =>{
            state.loading = false,
            state.data = action.payload?.data,
            state.total_repositories = action.payload?.total_repositories,
            state.error = null
         })
         .addCase(getListRespositories.rejected, (state, action) =>{
            state.loading = false,
            state.error = 'error'
         })
    },
})

export default repositories.reducer