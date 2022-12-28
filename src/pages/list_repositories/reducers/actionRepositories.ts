import { createAsyncThunk } from '@reduxjs/toolkit';
import { octokit } from "../../../utilities/config"

export const getListRespositories = createAsyncThunk(
    'list-repositories',
    async(_, { rejectWithValue}) => {
        try {
            const data = await octokit.request('GET /users/{username}/repos', {
                username : 'Alifian1999'
            })
            if(data.status === 200){
                return { data : data.data}
            }
        } catch (error) {
            return rejectWithValue(error)
        }
    }
)

export const getSpecificRepository = createAsyncThunk(
    'specific-repository',
    async(name:string, { rejectWithValue }) => {
        try {
            const data = await octokit.request('GET /repos/{owner}/{repo}', {
                owner: 'Alifian1999',
                repo: `${name}`
            })
            if(data.status === 200){
                return { data : data.data}
            }
        } catch (error) {
            return rejectWithValue(error)
        }
    }
)