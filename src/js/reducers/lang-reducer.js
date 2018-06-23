
export default function langReducer(state={isEng:true}, {type, payload}){ 
    switch(type){
        case "UPDATE_LANG":
            return Object.assign({},state,{isEng:!state.isEng})
        default:
            return state;
    }
  }