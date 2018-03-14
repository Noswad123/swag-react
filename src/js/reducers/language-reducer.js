
export default function langReducer(state, {type, payload}){ 
    switch(type){
        case "UPDATE_LANG":
            console.log(state.isEng);
            return Object.assign({},state,{isEng:!state.isEng})
        default:
            return state;
    }
  }