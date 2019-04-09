import React, {Component} from 'react';
import {StyleSheet, Text,TextInput, View,Button,ImageBackground,ActivityIndicator} from 'react-native';
import {connect} from 'react-redux'
import {mudaEmail,mudaSenha,mudaNome,cadastro} from './AuthActions'
import { throwStatement } from '@babel/types';



class FormCadastro extends Component{
    
    _cadastro(){
        const {nome,email,password}= this.props
        this.props.cadastro({nome,email,password})
    }
    renderizarIndicator(){
        if(this.props.cadastrando){
            return(
                <ActivityIndicator size="large"/>
            )
        }
    }

    render(){
        return (

            <ImageBackground style={{flex:1}}source={require("../bg.png")}>
            <View style={{flex:1,padding:10,}}>
                <View style={{flex: 4, justifyContent:'center'}}>
                <TextInput value={this.props.nome} placeholderTextColor="white" onChangeText={(texto)=>{this.props.mudaNome(texto)}} placeholder="Nome" style={{fontSize:20,}} ></TextInput>
                <TextInput value={this.props.email}placeholderTextColor="white" placeholder="Email" onChangeText={(texto)=>{this.props.mudaEmail(texto)}}  style={{fontSize:20,}} ></TextInput>
                <TextInput secureTextEntry value={this.props.password} placeholderTextColor="white" placeholder="Senha" onChangeText={(texto)=>{this.props.mudaSenha(texto)}}  style={{fontSize:20,}} ></TextInput>
                <Text style={{color: 'red'}}>{this.props.erro}</Text>
                </View>
                <View style={{flex:1}}>
                    <Button onPress={()=>{this._cadastro()}} title="Cadastrar"></Button>
                    {this.renderizarIndicator()}
                </View>
                </View>
            </ImageBackground>
        )
    }

}

const mapStateToProps= state=>({
    nome: state.AuthReducer.nome,
    email: state.AuthReducer.email,
    password: state.AuthReducer.password,
    erro: state.AuthReducer.erro,
    cadastrando: state.AuthReducer.cadastrando,
}
)

export default connect(mapStateToProps,{mudaNome,mudaEmail,mudaSenha,cadastro})(FormCadastro)