import React, {Component} from 'react';
import {ImageBackground,StyleSheet,Text,Image,Button,View} from 'react-native'
import {Actions} from 'react-native-router-flux'
export default class Inicio extends Component{

    render(){
        return(
            <ImageBackground source={require("../bg.png")} style={styles.tudo}>
                <View style={{ flex: 2,justifyContent:'center',alignItems:'center',}}>
                    <Image source={require("../logo.png")}/>
                </View>
                <View style={{flex:1}}>
                    <Button title="Fazer login" onPress={()=>{Actions.FormLogin()}}/>
                </View>
            </ImageBackground>
        )
    }

}

const styles= StyleSheet.create({
    tudo:{
        flex: 1, 
        padding: 15,
         
    }
})