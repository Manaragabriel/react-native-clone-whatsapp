import React, {Component} from 'react'
import {View,Text,StatusBar,Image,TouchableHighlight} from 'react-native'
import {TabBar} from 'react-native-tab-view'
import {Actions} from 'react-native-router-flux'
import firebase from 'firebase'

const sair= ()=>{
    firebase.auth().signOut()
    Actions.FormLogin()
}

export default props=>(
    <View style={{backgroundColor: '#115E54'}}>
        <StatusBar backgroundColor='#114D44' />
        <View style={{flexDirection: 'row',justifyContent: 'space-between'}}>
            <View style={{height:50,alignItems: 'center',justifyContent: 'center'}}>
                <Text style={{fontSize:20,color: '#fff',}}>Clone do WhatsApp</Text>
            </View>
            <View style={{flexDirection:'row',marginRight:20}}>
                <View style={{width: 50,justifyContent:'center'}}>
                    <TouchableHighlight onPress={()=>{Actions.AddContato()}}>
                        <Image source={require("../adicionar-contato.png")} />
                    </TouchableHighlight>
                </View>
                <View style={{justifyContent:'center'}}>
                    <TouchableHighlight onPress={()=>{sair()}}>
                        <Text style={{color: "#fff",fontSize:20}}>Sair</Text>
                    </TouchableHighlight>
                </View>
            </View>
        </View>
        <TabBar {...props} style={{backgroundColor:'#115E54' }}/>
    </View>
)