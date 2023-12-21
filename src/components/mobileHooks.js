import React from "react"
import { useSelector,useDispatch } from "react-redux"
import { buy_mobile} from "../redux/actions"
const MobileHook=()=>{
    const no_of_mobiles=useSelector(state=>state.mobile.numOfMobiles)
    const dispatch=useDispatch()
    return(
        <div>
             <h1>Welcome To Shop</h1>
                    <p>laptops</p>
            <h1>{no_of_mobiles}</h1>
            <button onClick={()=>dispatch(buy_mobile())}>DECREASE</button>
        </div>
    )
}
export default MobileHook 