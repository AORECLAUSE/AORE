import React, { Component } from 'react';
import {Text, View, StyleSheet, TouchableOpacity, TextInput} from 'react-native';
import Logo from '../components/Logo';
import firebase from 'react-native-firebase';
export default class Login extends React.Component {
  state = { email: '', password: '', errorMessage: null }

  handleLogin = () => {
    const { email, password } = this.state
    firebase
      .auth()
      .signInWithEmailAndPassword(email, password)
      .then(() => this.props.navigation.navigate('Dashboard'))
      .catch(error => this.setState({ errorMessage: error.message }))
  }
render() {
        return (
        <View style={styles.container}>
           
            <Logo/>
            {this.state.errorMessage &&
          <Text style={{ color: 'red' }}>
            {this.state.errorMessage}
          </Text>}
            <TextInput style={styles.inputBox} underlineColorAndroid='white' placeholder="Email" 
              placeholderTextColor='black'
              autoCapitalize="none"
              keyboardType="email-address"
              fontStyle='italic'
              onChangeText={email => this.setState({ email })}
              onSubmitEditing={()=> this.password.focus()}
              value={this.state.email}
               />
              <TextInput style={styles.inputBox} underlineColorAndroid='white' placeholder="Password"
              secureTextEntry={true}
              fontStyle='italic'
              autoCapitalize="none"
              ref={(input) => this.password = input}
              onChangeText={password => this.setState({ password })}
              value={this.state.password}
              />
            <TouchableOpacity style={styles.button} onPress={this.handleLogin}>
               <Text style={styles.buttonText}>Login</Text>
</TouchableOpacity>
            <View style={styles.signupTextCont}>
              <Text style={styles.signupText}>Don't have account yet?</Text>
              <TouchableOpacity onPress={() => this.props.navigation.navigate('SignUp')}>
              <Text style={styles.signupButton}>SIGNUP</Text>
              </TouchableOpacity>
            </View>
            </View>
        )
    }
}
const styles = StyleSheet.create ({
  container : {
    backgroundColor:'#800000',
    flex: 1,
    alignItems : 'center',
    justifyContent : 'center'
  },
  signupTextCont :{
    flexGrow: 1,
    alignItems : 'flex-end',
    justifyContent : 'center',
    paddingVertical: 30,
    flexDirection:'row'
  },
  signupText :{
    color:'white',
    fontSize: 15
  },
  signupButton: {
    color:'gold',
    fontWeight: '500',
    fontSize: 16
  },
  buttonText:{
    fontSize: 16,
    fontWeight:'500',
    color:'black',
    textAlign: 'center'
},
button: {
  width:300,
  backgroundColor:'gold',
  borderRadius:25,
  marginVertical:10,
  paddingVertical: 13
},
inputBox: {
  width:300,
  backgroundColor:'white',
  borderRadius:25,
  paddingHorizontal:16,
  fontSize:15,
  color:'black',
  marginVertical:10,
},
forgotText:{
  color :'white',
}
});