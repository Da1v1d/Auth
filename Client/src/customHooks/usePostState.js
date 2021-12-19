import { useSelector } from "react-redux";



export const usePostState = () => {
    return useSelector(state=>state.postReducer)
}