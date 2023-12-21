import {BUY_LAPTOP,BUY_MOBILE, USER_DETAILS_REQUEST,USER_DETAILS_SUCESS,USER_DETAILS_FAILURE} from "./actionTypes"
import axios from 'axios'
export const buy_laptop=(numOfLap)=>{
    return{
        type:BUY_LAPTOP,
        payLoad:numOfLap
    }
}

export const buy_mobile=()=>{
    return{
        type:BUY_MOBILE
    }
}

export const get_user_request=(status)=>{
    return{
        type:USER_DETAILS_REQUEST,
    }
}

export const get_user_sucess=(users)=>{
    return{
        type:USER_DETAILS_SUCESS,
        payLoad:users
    }
}
export const get_user_failure=(errorMsg)=>{
    return{
        type:USER_DETAILS_FAILURE,
        payLoad:errorMsg
    }
}

export const fetchUsers=()=>{
    return (dispatch)=>{
        dispatch(get_user_request())
        axios.get("https://jsonplaceholder.typicode.com/users")
            .then(response => {
                const users=response.data
                dispatch(get_user_sucess(users))

            })
            .catch(response=>{
                const errorMsg=response.message
                dispatch(get_user_failure(errorMsg))
    })
    }
}