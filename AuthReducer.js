const initialState= {
    nome:'',
    email:'',
    password:'',
    erro: '',
    erroLogin: '',
    logando: false,
    cadastrando: false,

}


export default(state=initialState,action)=>{
    switch(action.type){
        
        case 'clear':
            return {...state,nome:'',email:'',password:'',erro:'',logando:false}
        case 'mudaEmail':
            return{...state,email: action.payload}
        case 'mudaSenha':
            return{...state,password: action.payload}
        case 'mudaNome':
            return{...state,nome:action.payload}
        case 'erro':
            return {...state,erro:action.payload.message,cadastrando:false,}
        case 'sucesso':
            return{...state,nome:'',email:'',password:'',erro:''}
        case 'loginErro':
            return {...state, erroLogin: action.payload,logando:false}
        case 'logando':
            return {...state,logando: true}
        case 'cadastrando':
            return{...state,cadastrando: true}
    }
    
    
    return state
}