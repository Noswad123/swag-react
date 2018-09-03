export const CHANGE_INVOLVEMENT='involvement:changeInvolvement';

export function changeInvolvement(involvement){
    return{
        type:CHANGE_INVOLVEMENT,
        payload:involvement
    }
}