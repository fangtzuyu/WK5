import React from 'react';
import {
  AppRegistry,
  StyleSheet,
  Text,
  View,
  Image
} from 'react-native';

const page1 = () => {
    const { img, back } =styles;
    return(
        <View style={[back]}>
            <Image source={require('./Asset/logo_twitch.png')} style={[img]}/>
        </View>
    );
}

const styles = StyleSheet.create({
  img: {
    width: 185.5,
    height: 61.5,
    
  },
  back: {
    backgroundColor:'#6441a5',
    flex:1,
    alignItems: 'center',
    justifyContent: 'center',
  }
});
export default page1;