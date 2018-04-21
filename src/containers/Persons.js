import React, { Component } from 'react';

import Person from '../components/Person/Person';
import AddPerson from '../components/AddPerson/AddPerson';
import { connect } from 'react-redux';
import * as actionType from '../Store/action';

class Persons extends Component {
    render () {
        return (
            <div>
                <AddPerson personAdded={this.props.personAddedHandler} />
                
                {this.props.reduxState.map(person => (
                    <Person 
                        key={person.id}
                        name={person.name} 
                        age={person.age} 
                        clicked={() => this.props.personDeletedHandler(person.id)}/>
                ))}
            </div>
        );
    }
}

const mapStatetoProps = state => {
    return {
        reduxState: state.persons
    };
};

const mapDispatchToProps = dispatch => {
    return {
        personAddedHandler: (name, age) => dispatch({type:actionType.ADD_PERSON, personData: {name: name, age: age}}),
        personDeletedHandler: (id) => dispatch({type: actionType.REMOVE_PERSN, personId:id})
    }    
}

export default connect(mapStatetoProps, mapDispatchToProps)(Persons);
