
const initial_state={

}


export default(state=initial_state,action)=>{
    switch(action.type){

        
        case 'receiveHeader':
            return action.payload
        default:
            return state
    }
}