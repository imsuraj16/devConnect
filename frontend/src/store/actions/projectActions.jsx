import axios from "../../api/apiconfig";
import { loadProject } from "../reducers/projectSlice";



export const fetchProjects = () => async (dispatch, getState) => {

    try {
        const {data} = await axios.get("/projects")
        dispatch(loadProject(data))
        
        
    } catch (error) {
        console.log(error);
        
    }
};


export const addProject = (project) => async (dispatch, getState) => {

    try {
        const res = await axios.post("/projects",project)
        dispatch(fetchProjects())
        
    } catch (error) {
        console.log(error);
        
    }
};
