import * as actionTypes from './action';


const personState = {
    persons:[],
}


const reducer = (state = personState, action) => {
    switch(action.type){
        case actionTypes.ADD_PERSON:

            const newPerson = {
                id: Math.random(), // not really unique but good enough here!
                name: 'Max',
                age: Math.floor( Math.random() * 40 )
                }

            return {
                ...state,
                persons: state.persons.concat(newPerson),
            }
            break;

        case actionTypes.REMOVE_PERSN:
            return{
                ...state,
                persons: state.persons.filter(person => person.id !== action.personId)
            }
            break;
        default:
            return{ ...state }
    }
    return state;
}

export default reducer;



