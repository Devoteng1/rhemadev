import { GET_ERRORS } from '../actions/authActions'

const initilState = {}

export default function(state = initilState, action){
    switch(action.type){
      case GET_ERRORS:
          return action.payload;
       default:
          return state;

    }
}