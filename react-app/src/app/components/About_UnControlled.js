import React,  {Component} from "react";

export default class About extends Component{
    constructor(props){
        super(props);
        this.state ={
            members :['Member 1', "Member 2"]
        }
    }

    componentDidMount(){
        this.input.value ="Enter Name";
    }

    addMember(e){
        //this.state.members.push(this.input.value); // not a standard way to directly update state variable
        this.setState({
            members : [...this.state.members, this.input.value]
        })
    }
    render(){
         const list = this.state.members
                    .map( (m, i) => (
                        <li key={i}>
                            {m}
                        </li>
                    ))
        return (<div>
            <h2>About</h2>

            <input name="name"
                   ref = {(elem)=> this.input = elem}
            />
            <button onClick={(e) => this.addMember(e)}>Add</button>
            <ul>
                {list}
            </ul>
        </div>)
    }
}