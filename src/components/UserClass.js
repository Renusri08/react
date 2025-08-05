import React from "react";

class UserClass extends React.Component{
    constructor(props){
        super(props);
        this.state={
            count:0,
            //count2:2,
        };
        console.log(this.props.name+"child constructor");
    }//state is a big object used for state variables.

    componentDidMount(){
        console.log(this.props.name+"child component Did Mount");
    }
    render(){
        console.log(this.props.name+"child render");
        return  < >
        <div className="user-card">
            <h1>Count:{this.state.count}</h1>
            {/**<h1>Count2:{this.state.count2}</h1>*/}
            <button onClick={()=>{
                /** NEVER UPDATE STATE VARIABLES DIRECTLY
                this.state.count=this.state.count+1*/
                this.setState({
                    count:this.state.count+1,
                })
            }}>count incrementer</button>
            <h2>Name:{this.props.name}</h2>
            <h3>Location:{this.props.location}</h3>
            <h4>Contact:renusripotru08@gmail.com</h4>
        </div>
        </>
    };
};
export default UserClass;