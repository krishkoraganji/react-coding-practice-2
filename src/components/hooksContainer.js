import React from "react"
import { useSelector,useDispatch } from "react-redux"
import { buy_laptop} from "../redux/actions"
const Laptop=()=>{
    const no_of_mobiles=useSelector(state=>state.laptop.numOfLaptops)
    const dispatch = useDispatch()
    console.log('laptops')
    return(
        <div>
             <h1>Welcome To Shop</h1>
                    <p>laptops</p>
            <h1>{no_of_mobiles}</h1>
            <button onClick={()=>dispatch(buy_laptop())}>DECRESE</button>
        </div>
    )
}
export default Laptop