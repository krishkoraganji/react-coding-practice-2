import React ,{ Component } from "react";
import {connect} from 'react-redux'
import {buy_mobile} from '../redux/actions'
class Mobile extends Component{
    render() {
        console.log('mobiles')
        return(
            <div>
                    <h1>Welcome To Shop</h1>
                    <p>Iphone</p>
                    <p>Availble: {this.props.numOfMobiles}</p>
                    <button
                    type='button' onClick={this.props.buyMobile}>Buy</button>
            </div>
        )
    }
}
const mapStateToProps=(state)=>{
    return{
        numOfMobiles:state.mobile.numOfMobiles
    }
}

const mapDispatchToProps=(dispatch)=>{
    return{
        buyMobile: ()=>dispatch(buy_mobile())
    }
}

export default connect(mapStateToProps,mapDispatchToProps)(Mobile)