import { StatusBar } from 'expo-status-bar';
import { ImageBackground, StyleSheet, Text, View } from 'react-native';
import TodoMain from './screens/TodoMain';
import { bgImage } from './utils/ImageUtils';

export default function App() {
  return (
    <View style={styles.container}>
      <StatusBar style="auto" />
      <ImageBackground style={styles.bgImage} source={bgImage} resizeMode="cover">
        <TodoMain />
      </ImageBackground>
    </View>
  );
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
