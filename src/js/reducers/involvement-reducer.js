
export default function InvolvementReducer(state={involvement:"HS Mentee"}, action){ 
    switch(action.type){
        case "CHANGE_INVOLVEMENT":
            console.log(action.payload);
            return Object.assign({},state,{involvement:action.payload})
        default:
            return state;
    }
  }