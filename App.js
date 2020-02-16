/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React, {Component} from 'react';
import {Platform, StyleSheet, Text, View, TouchableOpacity, ToastAndroid} from 'react-native';
import Video from 'react-native-video';

const instructions = Platform.select({
  ios: 'Press Cmd+R to reload,\n' + 'Cmd+D or shake for dev menu',
  android:
    'Double tap R on your keyboard to reload,\n' +
    'Shake or press menu button for dev menu',
});


export default class App extends Component {

  state={
    pauseVideo:false,
    mutedVideo:false,
    url:'https://svc-lvanvato-cxtv-koki.cmgvideo.com/koki/master.m3u8',
  }

  onBuffer = () => (
    <View style={{flex:1, justifyContent:'center', alignItems:'center'}}>
        <Text>Carregando...</Text>
    </View>
  );

  renderVideo(){
    return(
      <Video
        source={{uri:this.state.url}}
        //source={{uri:'http://bit.do/megaboxseries'}}
        //onBuffer={this.onBuffer}                // Callback when remote video is buffering
        onError={this.errorVideo}               // Callback when video cannot be loaded
        //controls={true}
        //fullscreen={true}
        paused={this.state.pauseVideo}
        //source={require('./src/assets/video.mp4')}
        style={{ flex:1 }}
        muted={this.state.mutedVideo}
        repeat={false}
        resizeMode={"stretch"} // none, contain, cover, stretch
        volume={1.0}
        rate={1.0}
        ignoreSilentSwitch={"obey"}
      />
    );
  }

  errorVideo = ()=>{
    ToastAndroid.show('Erro no video', ToastAndroid.SHORT);
  }

  clickPaused= ()=>{
    //ToastAndroid.show('Hey, teste!', ToastAndroid.SHORT);
    this.setState({pauseVideo: !this.state.pauseVideo});
  }

  clickedMuted = ()=> {
    this.setState({mutedVideo: !this.state.mutedVideo});
  }

  render() {
    return (
      <View style={{
        flex:1,
        backgroundColor:'#f5fcff',
      }}>
        <View style={{
          height:400,
          backgroundColor:'#d2d2d2',
          borderColor:'#000',
          borderWidth:0.3,
          //marginHorizontal:20,
          //marginTop:10,
        }}>
          {
            this.renderVideo()
          }
        </View>
        <View style={{
          marginTop:20,
          justifyContent:'center',
          //alignItems:'center',
        }}>
          <TouchableOpacity style={{
            marginHorizontal:40,
            borderRadius:40,
            borderColor:'#000',
            height:42,
            borderWidth:0.5,
            backgroundColor:'yellow',
            justifyContent:'center',
            alignItems:'center',
          }}
            onPress={
              this.clickPaused
            }>
            <Text>Pausar</Text>
          </TouchableOpacity>
        </View>

        <View style={{
          marginTop:20,
          justifyContent:'center',
          //alignItems:'center',
        }}>
          <TouchableOpacity style={{
            marginHorizontal:40,
            borderRadius:40,
            borderColor:'#000',
            height:42,
            borderWidth:0.5,
            backgroundColor:'yellow',
            justifyContent:'center',
            alignItems:'center',
          }}
            onPress={
              this.clickedMuted
            }>
            <Text>Mudo</Text>
          </TouchableOpacity>
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF',
  },
  welcome: {
    fontSize: 20,
    textAlign: 'center',
    margin: 10,
  },
  instructions: {
    textAlign: 'center',
    color: '#333333',
    marginBottom: 5,
  },
});
