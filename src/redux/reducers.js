import { act } from "@testing-library/react"
import { BUY_LAPTOP ,BUY_MOBILE,USER_DETAILS_FAILURE,USER_DETAILS_REQUEST,USER_DETAILS_SUCESS} from "./actionTypes"

const laptops={numOfLaptops:100}
const mobile={numOfMobiles:180}
const userDetails={Loading:false,userData:[],errorMsg:''}

export const userReducer=(state=userDetails,action)=>{
    switch(action.type){
        case USER_DETAILS_REQUEST:
            return {Loading:true,userData:[],errorMsg:''}
        case USER_DETAILS_SUCESS:
            return {Loading:false,userData:action.payLoad,errorMsg:''}
        case USER_DETAILS_FAILURE:
            return {Loading:false,userData:[],errorMsg:action.payLoad}
        default:
            return state
    }
}

export const laptopReducer=(state=laptops,action)=>{
    console.log(action)
    switch(action.type){
        case BUY_LAPTOP:
            let items;
            if (state.numOfLaptops>=action.payLoad) {
                items=state.numOfLaptops-action.payLoad
            } else {
                items=state.numOfLaptops
            }
            return {...state,numOfLaptops:items}
        default: 
            return state
    }
}
export const mobileReducer=(state=mobile,action)=>{
    switch(action.type){
        case BUY_MOBILE:
            return {...state,numOfMobiles:state.numOfMobiles-1}
        default:
            return state
    }
}

