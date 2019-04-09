import firebase from 'firebase'
import {Actions} from 'react-native-router-flux'
import base64 from 'base-64'

export const clear=()=>{
    return{
        type:'clear'
    }
}

export const mudaEmail= (texto)=>{
    return{
        type: 'mudaEmail',
        payload: texto,
    }
}

export const mudaSenha= (data)=>{
    return{
        type: 'mudaSenha',
        payload: data,
    }
}

export const mudaNome=(data)=>{
    return{
        type: 'mudaNome',
        payload: data,
    }
}

export const cadastro= ({nome,email,password})=>{
    return dispatch=>{
        dispatch({type:"cadastrando"})
        firebase.auth().createUserWithEmailAndPassword(email,password).then((user)=>{
            let emailEncode= base64.encode(email)
            
           
            firebase.database().ref(`/contatos/${emailEncode}`).push({
                nome,
            }).then((value)=>{
                dispatch({type: 'sucesso',})
            })
            
            Actions.Inicio()
        }).catch((erro)=>{
            dispatch({type:'erro',payload: erro})
        })
    }
        
}

export const login= ({email,password})=>{
    return dispatch=>{
        dispatch({type:"logando"})
        firebase.auth().signInWithEmailAndPassword(email,password).then((value)=>{
            
            dispatch(
                {type: "login"}
            )
            Actions.Principal()
        }).catch((erro)=>{
                dispatch(
                    {type: "loginErro",payload: erro.message}
                    )
                }
                )
    }
    
}