import React,{Component} from 'react'
import {View,Text,TextInput,Image,TouchableHighlight,ListView} from 'react-native'
import {connect} from 'react-redux'
import _ from 'lodash'
import {mudaMensagem,enviaMensagem,fetch_conversa} from './AppActions'
class Chat extends Component{
    
    _enviaMensagem(){
        const {nome,email,mensagem}= this.props
        this.props.enviaMensagem({nome,email,mensagem})
    }
   
    componentWillMount(){
        this.props.fetch_conversa(this.props.email)
        this.criarFonte(this.props.conversas)
    }

    componentWillReceiveProps(props){
        
        this.criarFonte(props.conversas)
    }
    criarFonte(conversas){
        const source= new ListView.DataSource({rowHasChanged:(r1,r2)=>r1 !== r2})
        this.data= source.cloneWithRows(conversas)
    }

    renderRow(conversa){
        if(conversa.tipo == 'e'){
            return(
                <View style={{alignItems:'flex-end',marginTop: 5, marginBottom: 5,marginLeft:50}}>
                    <Text style={{fontSize:18,color: "#000",padding:10,backgroundColor:'#dbf5b4'}}>{conversa.mensagem}</Text>
                </View>
            )
        }else{
            return(
                <View style={{alignItems:'flex-start',marginTop: 5, marginBottom: 5,marginRight:50}}>
                    <Text style={{fontSize:18,color: "#000",padding:10,backgroundColor:'#dbf5b4'}}>{conversa.mensagem}</Text>
                </View>
            ) 
        }
    }

    render(){
       
        return(
            <View style={{flex:1, marginTop:50,padding:10,backgroundColor:'#eee4dc',}}>
                <View style={{flex:1,paddingBottom:20,}}>
                    <ListView 
                    
                    dataSource={this.data}
                    renderRow={this.renderRow}
                    />

                </View>
                <View style={{flexDirection:'row',height:60}}>
                    <TextInput onChangeText={(msg)=>{this.props.mudaMensagem(msg)}} value={this.props.mensagem} style={{flex:4,fontSize:18,backgroundColor:'white'}}/>
                    <TouchableHighlight onPress={()=>this._enviaMensagem()} underlayColor="#fff">
                        <Image source={require("../enviar_mensagem.png")}/>
                    </TouchableHighlight>
                </View>
            </View>
        )
    }
}

const mapStateToProps= state=>{
    const conversas= _.map(state.ListaConversaReducer,(val,id)=>{
        return {...val,id}
    })
    return({
        conversas,
        mensagem: state.AppReducer.mensagem
        
    })
}

export default connect(mapStateToProps,{mudaMensagem,enviaMensagem,fetch_conversa})(Chat)