import React,{Component} from 'react'
import {View,Text,ListView,TouchableHighlight} from 'react-native'
import {connect} from 'react-redux'
import {fetch_contatos,teste} from './AppActions'
import _ from 'lodash'
import {Actions} from 'react-native-router-flux'
import { throwStatement } from '@babel/types';
class Contatos extends Component{
    


    
   
    componentWillMount(){
        this.props.fetch_contatos()
        this.getDataSource(this.props.contatos)
    }

    componentWillReceiveProps(nextProps){
        
        this.getDataSource(nextProps.contatos)
    }
    getDataSource(contatos){
        const source= new  ListView.DataSource({rowHasChanged: (r1,r2)=> r1 !== r2})
        this.fonte= source.cloneWithRows(contatos)
    }
    
    render(){
        
        return(
            
                <ListView dataSource={this.fonte} renderRow={data=>{
                    return(
                        <TouchableHighlight onPress={()=>{Actions.Chat({title:data.nome,nome:data.nome,email:data.email})}}>
                            <View style={{flex:1,padding:20,borderColor: '#CCC'}}>
                                <Text style={{fontSize:25}}>{data.nome}</Text>
                                <Text style={{fontSize:18}}>{data.email}</Text>
                            
                            </View>
                        </TouchableHighlight>
                    )
                }}/>   
            
        )
    }
}  

const mapStateToProps = state=>{
    const contatos= _.map(state.ContatosReducer,(val,id)=>{
        return {...val,id}
    })
    
    return {contatos,}
}

export default connect(mapStateToProps,{fetch_contatos,teste})(Contatos)