const initial_state={
    contatos:null
}

export default (state=initial_state,action)=>{
    switch(action.type){
        
        
        case 'fetch_contatos':
            
            return  action.payload
        
        default:
            return state
    }
}