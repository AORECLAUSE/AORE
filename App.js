import React, {Component} from 'react';
import {
  Text,
  View,
  StyleSheet,
  ImageBackground,
  TouchableOpacity,
} from 'react-native';
import Login from './src/pages/Login';
import SignUp from './src/pages/SignUp'
import Navigation from './src/components/Navigation'
import Loading from './src/components/Loading';
export default class App extends Component {
  render() {
    return (
      <View style={styles.container}>
      <Navigation/>
     </View>
    );
  }
}
const styles = StyleSheet.create({
  container : {
    backgroundColor:'white',
    flex: 1,
 
     justifyContent : 'center'
  },
});
