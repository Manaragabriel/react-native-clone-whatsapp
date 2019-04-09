import React from 'react';
import {Router,Scene,Stack} from 'react-native-router-flux'
import FormLogin from './formLogin'
import FormCadastro from './FormCadastro'
import Inicio from './Inicio'
import Principal from './Principal'
import AddContato from './AddContato'
import Chat from './Chat'

export default props=>(
    <Router navigationBarStyle={{backgroundColor:'#115E54'}} titleStyle={{color:'#fff'}}>
        <Stack key="root">
            <Scene component={Inicio} key="Inicio" title="Inicio" />
            <Scene hideNavBar component={FormLogin} key="FormLogin" initial title="Login" />
            <Scene component={FormCadastro} title="Cadastro" key="FormCadastro"/>
            <Scene hideNavBar component={Principal}title="Principal" key="Principal" />
            <Scene component={AddContato}title="Adicionar contato" key="AddContato"/>
            <Scene component={Chat}title="Chat" key="Chat"/>
        </Stack>
    </Router>
)


