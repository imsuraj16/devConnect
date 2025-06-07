import axios from "../../api/apiconfig";
import { getProject, loadProject } from "../reducers/projectSlice";

export const addProject = (project) => async (dispatch, getState) => {

    try {
        const {data} = await axios.post("/projects",project)
        dispatch(loadProject(data))
        
    } catch (error) {
        console.log(error);
        
    }
};



export const fetchProjects = () => async (dispatch, getState) => {

    try {
        const {data} = await axios.get("/projects")
        dispatch(getProject(data))
        
        
    } catch (error) {
        console.log(error);
        
    }
};
