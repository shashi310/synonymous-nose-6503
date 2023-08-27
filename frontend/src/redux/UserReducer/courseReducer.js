import { COURSE_ERROR, COURSE_LOADING, COURSE_SUCESS } from "./actionType"



const initialState={
    isLoading:false,
    isError:false,
    Courses:[],
}



export const CourseReducer=(state=initialState,{type,payload})=>{
    switch(type){
        case COURSE_LOADING: return {isLoading:true}
        case COURSE_SUCESS: return {isLoading:false,isError:false,Courses:payload}
        case COURSE_ERROR : return {isLoading:false,isError:true}
        default:return state
    }
}