import React,{Component} from 'react'
import {View,TextInput,Button,Text} from 'react-native'
import {connect} from 'react-redux'
import { statement } from '@babel/template';
import {mudaAddEmail,addContato} from './AppActions'
class AddContato extends Component{
    render(){
        return(
            <View style={{flex: 1,}}>
              <View style={{flex: 1,justifyContent: "center"}}>
                    <TextInput onChangeText={(texto)=>{this.props.mudaAddEmail(texto)}} value={this.props.adicionar_email} placeholder="Digite o email do amigo"/>
                    <Text>{this.props.addContatoErro}</Text>
              </View>
              <View style={{flex: 1}}>
                    <Button title="Adicionar" onPress={()=>{this.props.addContato(this.props.adicionar_email)}}></Button>
              </View>
             
            </View>
        )
    }
}  

const mapStateToProps= state=>({
    adicionar_email: state.AppReducer.adicionar_email,
    addContatoErro: state.AppReducer.addContatoErro
})

export default connect(mapStateToProps,{mudaAddEmail,addContato})(AddContato)