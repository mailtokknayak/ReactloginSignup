export default( state = [] , payload) => {
    switch(payload){
        case 'showAll' :
            return [...state, payload.book];
            default:
                return state;
    }
}