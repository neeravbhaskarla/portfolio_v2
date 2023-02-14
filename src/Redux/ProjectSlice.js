import {createAsyncThunk, createSlice} from '@reduxjs/toolkit'
import axios from 'axios'

const initialState = {
    projects: [],
    loading: true
}

export const fetchProjects = createAsyncThunk('projects', ()=>{
    return axios
            .get("https://baconipsum.com/api/?type=tst")
            .then((response)=>response.data)
})


const ProjectSlice = createSlice({
    name: "projects",
    initialState,
    extraReducers: (builder)=>{
        builder.addCase(fetchProjects.pending, (state)=>{
            state.loading = true;
        })
        builder.addCase(fetchProjects.fulfilled, (state, action)=>{
            state.loading = false;
            state.projects = action.payload;
        })
    }
})

export default ProjectSlice.reducer