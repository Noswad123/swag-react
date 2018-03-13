import {UPDATE_LANG} from '../actions/language-actions'
export default function langReducer(state, {type, payload}){
    
    switch(type){

        case UPDATE_LANG:
        return payload
        default:
        return state;


    }
    
    return state;
  }