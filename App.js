import { StatusBar } from 'expo-status-bar';
import { ImageBackground, StyleSheet, Text, View } from 'react-native';
import TodoMain from './screens/TodoMain';
import { bgImage } from './utils/ImageUtils';
// import * as Font from "expo-font"
// import AppLoading from 'expo-app-loading';
import { useState } from 'react';

// const getFont = ()=> Font.loadAsync({
//   'BorlowLight' : require('./assets/fonts/Barlow-Light.ttf'),
//   'BorlowMedium' : require('./assets/fonts/Barlow-Medium.ttf')
// })

export default function App() {
  const [isFont, setIsFont] = useState(true)
  if(isFont){
    return (
      <View style={styles.container}>
        <StatusBar style="auto" />
        <ImageBackground style={styles.bgImage} source={bgImage} resizeMode="cover">
          <TodoMain />
        </ImageBackground>
      </View>
    );
  } 
  // else {
  //  return (
  //   <AppLoading
  //   startAsync={getFont}
  //   onFinish={() => setIsFont(true)}
  //   onError={console.warn}
  // />
  //  )
  // }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  bgImage : {
    flex: 1,
    width: '100%'
  }
});
