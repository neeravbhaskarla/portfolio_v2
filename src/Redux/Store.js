import {configureStore} from '@reduxjs/toolkit'
import ProjectReducer from './ProjectSlice'
import SkillReducer from './SkillSlice'
export default configureStore({
    reducer:{
        projects: ProjectReducer,
        skills: SkillReducer
    }
})