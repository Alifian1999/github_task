import { createAsyncThunk } from '@reduxjs/toolkit';
import { octokit } from "../../../utilities/config"
import  Swal  from 'sweetalert2'

export const getListRespositories = createAsyncThunk(
    'list-repositories',
    async(value:any, { rejectWithValue }) => {
        try {
            let name : string = value.name !== undefined? value.name : 'Alifian1999'
            let toPage : number = value.page;
            
            let totalRepository = await octokit.request('GET /users/{username}',{
                username : name
            })
            const data = await octokit.request(`GET /users/{username}/repos?visibility=all&type=all&page=${toPage}&per_page=10&sort=updated`, {
                username : name
            }) 
            if(data.status === 200){
                return { data : data.data, total_repositories : totalRepository.data.public_repos}
            }
        } catch (error) {
            Swal.fire({
                icon: 'error',
                title: 'Oops...',
                text: 'User not found',
              })
            return rejectWithValue(error)
        }
    }
)

export const getSpecificRepository = createAsyncThunk(
    'specific-repository',
    async(value:any, { rejectWithValue }) => {
        let user = value.user;
        let repo = value.repo
        try {
            const data = await octokit.request('GET /repos/{owner}/{repo}', {
                owner: user,
                repo: repo
            })
            let url = data.data.html_url
            window.open(url, 'blank')

        } catch (error) {
            return rejectWithValue(error)
        }
    }
)
