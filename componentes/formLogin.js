import React, {Component} from 'react';
import {StyleSheet, Text,TextInput, View,Button,TouchableHighlight,ImageBackground,ActivityIndicator} from 'react-native';
import {Actions} from 'react-native-router-flux'
import {connect} from 'react-redux'
import {mudaEmail,mudaSenha,login,clear} from './AuthActions'

 class FormLogin extends Component{


    constructor(props){
        super(props)
        this.props.clear()
    }
    _login(){
        const {email,password}= this.props
        this.props.login({email,password})
    }
    renderizarIndicator(){
        if(this.props.logando){
            return(
                <ActivityIndicator />
            )
        }
    }
    render(){
        
        return(
            <ImageBackground style={{flex:1}} source={require("../bg.png")}>
                <View style={styles.tudo}>
                <View style={styles.topo}>
                    <Text style={{fontSize: 25,}}>Chat</Text>
                </View>
                
                <View style={styles.inputs}> 
                    <TextInput value={this.props.email} placeholderTextColor="white" onChangeText={(texto)=>{this.props.mudaEmail(texto)}} placeholder="Email" style={{fontSize:20,height:45}} ></TextInput>
                    <TextInput secureTextEntry placeholderTextColor="white" value={this.props.password} onChangeText={(texto)=>{this.props.mudaSenha(texto)}}placeholder="Senha" style={{fontSize:20,height:45}}></TextInput>
                    <Text>{this.props.erroLogin}</Text>
                    <TouchableHighlight onPress={()=>{Actions.FormCadastro()}}>
                        <Text style={{fontSize:20,color:'white'}} >Ou cadastre-se</Text>
                    </TouchableHighlight>
                    
                </View>
                <View style={styles.botao}>
                    <Button color="#115E54" title="Login" onPress={()=>{this._login()}}></Button>   
                    {this.renderizarIndicator()}
                </View>

            </View>
            </ImageBackground>
        )

        
    }

}
const mapStateToProps= state=>(
    {
        email:state.AuthReducer.email,
        password:state.AuthReducer.password,
        erroLogin: state.AuthReducer.erroLogin,
        logando: state.AuthReducer.logando
    }
)
export default connect(mapStateToProps,{mudaEmail,mudaSenha,login,clear})(FormLogin)

const styles= StyleSheet.create({
    
    tudo:{
        flex:1,
    },

    topo:{
        flex: 1,
        
        alignItems: 'center',
    },
    inputs:{
        flex: 2,
    },
    botao:{
        flex: 2,
    }

})