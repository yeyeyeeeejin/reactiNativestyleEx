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
      <View>
        <View style ={styles.container}>
        <Image source={require('./assets/img.jpg')} style={{width:150,height:150}}></Image>
        
        <View style={{flexDirection : 'column'}}>
        <View style={{flexDirection:'row'}}>
        <Text style={styles.title}>활동연대 </Text>
        <Text style={styles.detail}>2010, 2020</Text>
        </View>
        <View style={{flexDirection:'row'}}>
        <Text style={styles.title}>출생 </Text>
        <Text style={styles.detail}>1989년 7월 23일</Text>
        </View>
        <View style={{flexDirection:'row'}}>
        <Text style={styles.title}>활동유형 </Text>
        <Text style={styles.detail}> 남성 솔로</Text>
        </View>
        <View style={{flexDirection:'row'}}>
        <Text style={styles.title}>활동장르 </Text>
        <Text style={styles.detail}>R&B rap</Text>
        </View>
        <View style={{flexDirection:'row'}}>
        <Text style={styles.title}>데뷔 </Text>
        <Text style={styles.detail}>2016년 싱글 앨범 [Wavy]</Text>
        </View>
        <View style={{flexDirection:'row'}}>
        <Text style={styles.title}>활동 </Text>
        <Text style={styles.detail}>LATELY(Feat.Hoody)</Text>
        </View>
        </View>
        </View>
        <View style = {{width : 50,height :50, backgroundColor : 'lightblue'}}></View>
        <View style = {{width : 100,height :100, backgroundColor : 'skyblue'}}></View>
        <View style = {{width : 150,height :150, backgroundColor : 'steelblue'}}></View>

      </View>
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
  }
  
});

export default App;
