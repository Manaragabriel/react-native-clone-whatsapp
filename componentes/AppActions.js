import b64 from 'base-64'
import firebase from 'firebase'
import {Actions} from 'react-native-router-flux'
import _ from 'lodash'
export const mudaAddEmail = texto=>{
    return({
        type: 'mudaAddEmail',
        payload: texto,
    })
}


export const addContato= (email)=>{
    
    return dispatch=>{
        var database= firebase.database()
        let emailEncode= b64.encode(email)
        database.ref(`/contatos/${emailEncode}`).once('value').then((snapshot)=>{
            if(snapshot.val()){
                const dados= _.values(snapshot.val())
              
                const {currentUser}= firebase.auth()
                let emailDoUser= b64.encode(currentUser.email)
                firebase.database().ref(`/usuario_contatos/${emailDoUser}`).push({
                    email, 
                    nome: dados[0].nome,    
                }).then(()=>{
                    dispatch({
                        type:"addContatoSucesso",
                    })
                    Actions.Principal()
                }).catch((erro)=>{
                    dispatch({
                        type: 'addContatoError',
                        payload: erro,
                    })
                })
            }else{
                dispatch({
                    type: 'addContatoError',
                    payload: "Não existe este usuario",
                })
            }
            
        })
    }
}

export const fetch_contatos= ()=>{
    const {currentUser}= firebase.auth()
    return dispatch=>{
        let emailEncode= b64.encode(currentUser.email)
        
        firebase.database().ref(`/usuario_contatos/${emailEncode}`).on('value',(snap)=>{
            dispatch({
                type: 'fetch_contatos',
                payload: snap.val(),
            }) 
        })
        
    }
    /*return dispatch=>{
        
        firebase.database().ref(`/usuario_contatos/${emailEncode}`).on('value').then((snapshoot)=>{
            dispatch({
                type: 'fetch_contatos',
                payload: snapshoot.val(),
            })
        })
    }*/
}

export const teste= ()=>{
    return dispatch=>{
        dispatch({
            type:'teste',
            
        })
    }
}

export const mudaMensagem= (msg)=>{
    return{
        type:'mudaMensagem',
        payload: msg,
    }
}
export const enviaMensagem= ({nome,email,mensagem})=>{
    
    return dispatch=>{
        const {currentUser}= firebase.auth()
        const currentB64= b64.encode(currentUser.email)
        const contatoB64= b64.encode(email)
        firebase.database().ref(`/mensagens/${currentB64}/${contatoB64}`).push({
            mensagem,
            tipo: 'e',
        }).then(()=>{
            firebase.database().ref(`/mensagens/${contatoB64}/${currentB64}`).push({
                mensagem,
                tipo: 'r'
            }).then(()=>{ dispatch({type:'enviado'})})
        }).then(()=>{
            firebase.database().ref(`/conversas/${currentB64}/${contatoB64}`).set({
                nome,
                email,
            })
        }).then(()=>{
            firebase.database().ref(`/contatos/${currentB64}`).once('value').then((snap)=>{
                const nomeCurrent= _.first(_.values(snap.val()))
                firebase.database().ref(`/conversas/${contatoB64}/${currentB64}`).set({
                    nome: nomeCurrent.nome,
                    email: currentUser.email,
                })
            })
        })
    }
}


export const fetch_conversa= (emailContato)=>{
    
    let currentB64= b64.encode(firebase.auth().currentUser.email)
    let contatoB64= b64.encode(emailContato)
    return dispatch=>{
        firebase.database().ref(`/mensagens/${currentB64}/${contatoB64}`).on('value',(snap)=>{
            dispatch({
                type: 'receiveMsg',
                payload: snap.val()
            })
        })
    }
}


export const header_conversa= ()=>{
    const emailEncode= b64.encode(firebase.auth().currentUser.email)

    return dispatch=>{
        firebase.database().ref(`/conversas/${emailEncode}`).on('value',(snap)=>{
            dispatch({
                type:'receiveHeader',
                payload: snap.val()
            })
        })
    }
}