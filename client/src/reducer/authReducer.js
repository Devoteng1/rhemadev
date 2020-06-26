import { TEST_DISPATCH} from '../actions/types'

const initilState = {
    isAuthentication:false,
    user: {}
}


export default function(state = initilState, action){
    switch(action.type){
       case TEST_DISPATCH:
           return {
               ...state,
               user: action.payload
           }
       default:
          return state;

    }
}