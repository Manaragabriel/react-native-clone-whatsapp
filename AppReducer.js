const initialState= {
    adicionar_email: '',
    addContatoErro: '',
    mensagem: '',
}


export default (state=initialState,action)=>{
    
    switch(action.type){
        case 'mudaAddEmail':
            return {...state,adicionar_email:action.payload}
        
        case 'addContatoError':
            return{...state,addContatoErro: action.payload}
        case 'addContatoSucesso':
            return{...state,adicionar_email:''}
        
        case 'mudaMensagem':
            return {...state,mensagem:action.payload}

        case 'enviaMensagem':
            return {...state}

        case 'enviado':
            return {...state,mensagem: ''}
        default:
            return state
        }

}