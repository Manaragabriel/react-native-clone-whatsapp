import React,{Component} from 'react'
import {View,Text,ListView,TouchableHighlight} from 'react-native'
import  {connect} from 'react-redux'
import {Actions} from 'react-native-router-flux'
import  {header_conversa} from './AppActions'
import _ from 'lodash'
class Conversas extends Component{
    
    
    componentWillMount(){
        this.props.header_conversa()
        this.criarFonte(this.props.listaConversas)
    }

    componentWillReceiveProps(props){
        this.criarFonte(props.listaConversas)
    }
    criarFonte(conversas){
        const source= new ListView.DataSource({rowHasChanged: (r1,r2)=>{r1 !== r2}})
        this.lista_conversas= source.cloneWithRows(conversas)
    }

    renderRow(lista_conversas){
        return(
            <TouchableHighlight onPress={()=>{Actions.Chat({
                title: lista_conversas.nome,
                nome: lista_conversas.nome,
                email: lista_conversas.email
            })}}>
                <View style={{flex:1,padding:20,borderColor: 'black'}}>
                    <Text style={{fontSize:25}}>{lista_conversas.nome}</Text>
                </View>
            </TouchableHighlight>
        )
    }
    
    render(){
        return(
            <View>
                <ListView 
                dataSource={this.lista_conversas}
                renderRow={this.renderRow}
                />
            </View>
        )
    }
}

const mapStateToProps= state=>{
    const listaConversas = _.map(state.ListaConversasReducer,(val,id)=>{
        return {...val,id}
    })
    return({
        listaConversas,
    })
}

export default connect(mapStateToProps,{header_conversa})(Conversas)