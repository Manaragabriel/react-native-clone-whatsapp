import React,{Component} from 'react'
import {StyleSheet,View,Button,Text,Dimensions} from 'react-native'
import {TabView,SceneMap,TabBar} from 'react-native-tab-view'
import Menu from './TabBarMenu'
import Conversas from './Conversas'
import Contatos from './Contatos'
  
  export default class Principal extends Component {
    state = {
      index: 0,
      routes: [
        { key: 'Conversas', title: 'Conversas' },
        { key: 'Contatos', title: 'Contatos' },
      ],
    };
  
    
    render() {
      return (
        <TabView
          navigationState={this.state}
          renderScene={SceneMap({
            Conversas,
            Contatos,
          })}
          renderTabBar={Menu}
          onIndexChange={index => this.setState({ index })}
          initialLayout={{ width: Dimensions.get('window').width }}
        />
      );
    }
  }
  
  const styles = StyleSheet.create({
    scene: {
      flex: 1,
    },
  })