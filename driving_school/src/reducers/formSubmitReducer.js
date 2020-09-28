export default (state = false, action) => {
    switch(action.type){
        case 'FORM_SUBMITTED':
            return action.payload;
        default:
            return state;
    }
}