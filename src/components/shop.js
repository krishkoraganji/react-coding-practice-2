import React, { Component} from "react";
import {connect} from 'react-redux'
import { buy_laptop } from '../redux/actions'

class Shop extends Component{
    constructor(props) {
        super(props)
        this.state = { numOfLap: 1 }
        this.canvasRef = React.createRef()
        this.inputRef=React.createRef()
        
    }

    componentDidMount() {
        const input = this.inputRef.current.focus()
        const canvas = this.canvasRef.current
        const ctx = canvas.getContext('2d')
        ctx.fillStyle = 'red'
        ctx.font = '30px roboto'
        ctx.fillText('hello world!',100,100,)
        console.log(ctx)   
    }

    setValue=(event)=>{
        this.setState({numOfLap:event.target.value})
    }
    render(){
        const {numOfLap}=this.state
        
        return(
            <div>
                <h1 >Welcome To Shop</h1>
                <p >هذا نص من اليمين إلى اليسار.</p>

                    <p>Dell Inspiron Laptop</p>
                    <p>Availble: {this.props.numOfLaptops}</p>
                <input ref={this.inputRef} value={numOfLap} onChange={this.setValue} />
                <button type='button' onClick={() => this.props.buyLaptop(numOfLap)}>Buy {numOfLap}</button>
                <canvas ref={this.canvasRef}></canvas>
                {numOfLap>this.props.numOfLaptops&&<p>out of stock</p>}
            </div>
        )
    }
}
const mapStateToProps=(state)=>{
    return{
        numOfLaptops:state.laptop.numOfLaptops
    }
}

const mapDispatchToProps=(dispatch)=>{
    return{
        buyLaptop: (numOfLap)=>dispatch(buy_laptop(numOfLap))
    }
}

export default connect(mapStateToProps,mapDispatchToProps)(Shop)