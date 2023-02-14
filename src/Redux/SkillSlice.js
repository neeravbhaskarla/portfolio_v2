import {createAsyncThunk, createSlice} from '@reduxjs/toolkit'
import axios from 'axios'

const initialState = {
    skills: [],
    loading: true
}

export const fetchSkills = createAsyncThunk('skills', async()=>{
    return axios.get("https://jsonplaceholder.typicode.com/todos").then((response)=>response.data)
})

const SkillSlice = createSlice({
    name: "skills",
    initialState,
    extraReducers: (builder)=>{
        builder.addCase(fetchSkills.pending, (state)=>{
            state.loading = true;
        })
        builder.addCase(fetchSkills.fulfilled, (state, action)=>{
            state.loading = false;
            state.skills = action.payload;
        })
    }
})

export default SkillSlice.reducer