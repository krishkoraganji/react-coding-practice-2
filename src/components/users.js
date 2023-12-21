import { Component } from "react";
import {connect} from 'react-redux'
import { fetchUsers } from "../redux/actions";
class UserList extends Component{
   
    componentDidMount(){
        const {fetchUsers}=this.props
        const getData=fetchUsers()
        
    }
    render(){
        const { user, isLoading, ErrorMsg } = this.props
        return isLoading ? <p>Loading</p>:
          user.length===0 ? <p>{ErrorMsg}</p>:
            <div>
                  {user.map(each=><p key={each.id}>{each.name}</p>)} 
            </div>
        
    
}
}
const mapStateToProps = (state) => {
    return{
        user:state.user.userData,
        isLoading:state.Loading,
        ErrorMsg:state.errorMsg
    }
}

const mapDispatchToProps=(dispatch)=>{
    return{
        fetchUsers: ()=>dispatch(fetchUsers())
    }
}

export default connect(mapStateToProps,mapDispatchToProps)(UserList)