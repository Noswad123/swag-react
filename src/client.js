import {createStore} from "redux";

const reducer = function(state, action){

}

const store = createStore(reducer,0);

store.subscribe(()=>{
    console.log("Store Changed", store.getState())
    
})

store.dispatch({type:"Inc",payload:1})