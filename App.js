/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React, {Component} from 'react';
import {Platform, StyleSheet, } from 'react-native';
import FormLogin from './componentes/formLogin'
import FormCadastro from './componentes/FormCadastro'
import Rota from './componentes/Rotas'
import {Provider} from 'react-redux'
import {createStore,applyMiddleware} from 'redux'
import reducers from  './Reducers'
import firebase from 'firebase'
import ReduxThunk from 'redux-thunk'
const instructions = Platform.select({
  ios: 'Press Cmd+R to reload,\n' + 'Cmd+D or shake for dev menu',
  android:
    'Double tap R on your keyboard to reload,\n' +
    'Shake or press menu button for dev menu',
});

type Props = {};
export default class App extends Component{ 
   
    componentWillMount(){
        
        var config = {
            apiKey: "AIzaSyAe-gk6sbuK6IN6O6HxPkBhZFXaMCm_hKo",
            authDomain: "chat-8deae.firebaseapp.com",
            databaseURL: "https://chat-8deae.firebaseio.com",
            projectId: "chat-8deae",
            storageBucket: "chat-8deae.appspot.com",
            messagingSenderId: "395321169449"
          };
        firebase.initializeApp(config);
    
    }

    render(){
        return(
        <Provider store={createStore(reducers,{},applyMiddleware(ReduxThunk))}>
            <Rota />
        </Provider>
        )
}
   
      
   
  

}

const styles = StyleSheet.create({
  
 
  
});
