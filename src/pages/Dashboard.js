
import React from 'react'
import { StyleSheet, Platform, Image, Text, View, Dimensions, ScrollView, TouchableOpacity} from 'react-native'
import firebase from 'react-native-firebase'

export default class Dashboard extends React.Component {
  handleLogout = () => {
    firebase
    .auth()
    .signOut()
    .then(() => this.props.navigation.navigate('Loading'))
    .catch(error => this.setState({ errorMessage: error.message }));
    };
  state = { currentUser: null }

  componentDidMount() {
    const { currentUser } = firebase.auth()

    this.setState({ currentUser })
  }

  render() {
    const { currentUser } = this.state

    return (
      <View style={styles.profileOverlay}>
            <View style={styles.popup}>
              <View style={styles.profileView}>
                <ScrollView contentContainerStyle={styles.profileContainer}>
                    <Image style={styles.image} source={require("../images/profile.png")}/>
                    <Text style={styles.name}>{currentUser && currentUser.email}</Text>
                    <Text style={styles.position}>USER</Text>
                    <Text style={styles.about}>
                    Make a simple app that does registration, login and opens a dashboard.
                    Your registration should accept:
                    Login should be by email or username and password.
                    After login, it should welcome me with my name and display my other information except password.
                    Android: Java / Kotlin
                    iOS: React Native
                    Deadline: 22/Sept. 2019
                    </Text>
                </ScrollView>
              </View>
              <View style={styles.logoutView}>
                <TouchableOpacity onPress={this.handleLogout} style={styles.logoutOpacity}>
                  <Text style={styles.logoutText}>LOGOUT</Text>
                </TouchableOpacity>
              </View>
            </View>
          </View>
    )
  }
}
    const styles = StyleSheet.create({
    profileOverlay: {
      backgroundColor: "#800000",
      flex: 1,
    },
    popup: {
      backgroundColor: 'white',
      marginTop: 100,
      marginHorizontal: 20,
      borderRadius: 7,
      alignSelf:'center',
    },
    profileView: {
      alignItems: 'center',
      margin: 5,
      height:250,
    },
    profileContainer:{
      alignItems:'center',
      justifyContent:'center',
    },
    name:{
      fontSize:18,
      flex:1,
      alignSelf:'center',
      color:"#008080",
      fontWeight:'bold'
    },
    image:{
      width:90,
      height:90,
      borderRadius:45,
    },
    about:{
      marginHorizontal:10
    },
    position:{
      fontSize:14,
      flex:1,
      alignSelf:'center',
      color:"#696969"
    },
    logoutView: {
      marginTop: 20,
      marginBottom:10,
      flexDirection: 'row',
      justifyContent:'center'
    },
    logoutOpacity:{
      height:20,
      borderRadius:5,
      width:70,
      backgroundColor:'#FFD300',
      paddingBottom:20,
    },
    logoutText:{
      alignSelf:'center',
      fontSize:15,
      fontWeight:'bold',
      color:'white',
    }
  }); 