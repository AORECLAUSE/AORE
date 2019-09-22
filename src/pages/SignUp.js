import React, { Component } from 'react';
import {Text, View, StyleSheet, TouchableOpacity, TextInput} from 'react-native';
import Logo from '../components/Logo';
import firebase from 'react-native-firebase'

export default class SignUp extends React.Component {
  state = { email: '', password: '', errorMessage: null }
    handleSignUp = () => {
      const { email, password } = this.state
      firebase
        .auth()
        .createUserWithEmailAndPassword(email, password)
        .then(user => this.props.navigation.navigate('Dashboard'))
        .catch(error => this.setState({ errorMessage: error.message }))
    }
render() {
        return (
        <View style={styles.container}>
           
            <Logo/>
            <TextInput style={styles.inputBox} underlineColorAndroid='white' placeholder="Email" 
              placeholderTextColor='black'
              autoCapitalize="none"
              keyboardType="email-address"
              fontStyle='italic'
              onSubmitEditing={()=> this.password.focus()}
              value={this.state.email}
              onChangeText={email => this.setState({ email })}
               />
              <TextInput style={styles.inputBox} underlineColorAndroid='white' placeholder="Password"
              secureTextEntry={true}
              fontStyle='italic'
              autoCapitalize="none"
              ref={(input) => this.password = input}
              value={this.state.password}
              onChangeText={password => this.setState({ password })}
              />
            <TouchableOpacity style={styles.button} onPress={this.handleSignUp}>
               <Text style={styles.buttonText}>Signup</Text>
</TouchableOpacity>
            <View style={styles.signupTextCont}>
              <Text style={styles.signupText}>Already have an account?</Text>
              <TouchableOpacity onPress={() => this.props.navigation.navigate('Login')}>
              <Text style={styles.signupButton}>LOGIN</Text>
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