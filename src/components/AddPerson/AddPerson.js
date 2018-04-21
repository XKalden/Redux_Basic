import React, {Component} from 'react';

import './AddPerson.css';

class AddPerson extends Component {
    state={
        name: '',
        age: ''
    }

    nameChangeHandler = (event) => {
        this.setState({name: event.target.value});
    }

    ageChangedValue = (event) => {
        this.setState({age:event.target.value});
    } 


    render(){

        console.log(this.state);
        return(
    
        <div className="AddPerson">

        <input 
            type="text" 
            placeholder="Name" 
            onChange={this.nameChangeHandler}
            value={this.state.name}></input>
        <input 
            type="number" 
            placeholder="Age" 
            onChange={this.ageChangedValue}
            value={this.state.age}/>

        <button onClick={() => this.props.personAdded(this.state.name, this.state.age)}>Add Person</button>
        </div>
        )
    }
};

export default AddPerson;