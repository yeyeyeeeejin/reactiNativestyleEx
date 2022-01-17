/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React from 'react';
import type {Node} from 'react';
import {
  SafeAreaView,
  ScrollView,
  StatusBar,
  StyleSheet,
  Text,
  Image,
  View,
  useColorScheme,
} from 'react-native';

import { Component, Fragment } from 'react/cjs/react.production.min';



class App extends Component {
  render(){
    return (
  /*       <View style = {styles.flexcontainer}>
        <View style = {{flex : 1, backgroundColor : 'lightblue'}}></View>
        <View style = {{flex:2, backgroundColor : 'skyblue'}}></View>
        <View style = {{flex:3, backgroundColor : 'steelblue'}}></View>
        </View> */
        <SafeAreaView style = {styles.flexcontainer}>
        <View style = {{width:50, height:50, backgroundColor : 'lightblue'}}></View>
        <View style = {{width:50, height:50, backgroundColor : 'skyblue'}}></View>
        <View style = {{ height:50, backgroundColor : 'steelblue'}}></View>
        </SafeAreaView>

    );
  }
  
};

const styles = StyleSheet.create({
  container : {
    marginTop : 50,
    marginLeft : 20,

    flexDirection : 'row'//가로로 나란히, colum은 디폴트
  },
  title : {
    marginLeft : 20,
    fontWeight : 'bold',
    fontSize : 15,
    color : 'grey'
  },
  detail : {
    marginLeft : 10,
    color : 'black',
  },
  flexcontainer : {
    flexDirection:'column',
    //justifyContent : 'space-between',//sapce-around..
    //flexDirection:'column-reverse',
    alignItems : 'center',
    justifyContent : 'center',
    flex:1,
  }
  
});

export default App;
