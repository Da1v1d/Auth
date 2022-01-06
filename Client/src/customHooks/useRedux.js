import { useSelector } from "react-redux";


export const useRedux = (store) => {
    return useSelector(state=>state[store])
}