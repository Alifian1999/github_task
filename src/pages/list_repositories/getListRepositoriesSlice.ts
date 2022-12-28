import { createSlice } from '@reduxjs/toolkit';
import { getListRespositories } from './reducers/actionRepositories';
import { getSpecificRepository } from './reducers/actionRepositories';

const initialState :any = {
    data : [],
    loading : false,
    error : null
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
            state.error = null
         })
         .addCase(getListRespositories.rejected, (state, action) =>{
            state.loading = false,
            state.error = action.payload
         })

        //  specific
        .addCase(getSpecificRepository.pending, (state) =>{
            state.loading = true,
            state.error = null
        })
        .addCase(getSpecificRepository.fulfilled, (state,action) =>{
            state.loading = false,
            state.data = [action.payload?.data]
            state.error = null
        })
        .addCase(getSpecificRepository.rejected, (state,action) =>{
            state.loading = false,
            state.error = action.payload
        })
    },
})

export default repositories.reducer