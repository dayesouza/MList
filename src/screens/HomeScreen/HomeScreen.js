import React from 'react'
import { Text, View } from 'react-native'
import { firebase } from '../../firebase/config'

export default function HomeScreen({navigation, user}) {

  const logoff = () => {
    firebase.auth().signOut().then(function() {
      // Sign-out successful.
      // navigation.navigate('Login');
      console.log('signed our', user)
    }).catch(function(error) {
      // An error happened.
      console.log('ue erro')
    });
  }
    return (
        <View>
          {console.log('home screen',user)}
          <Text onPress={() => navigation.navigate('Login')}>Log in</Text>
            <Text>Home Screen</Text>
            <Text>{user && user.fullName}</Text>
          <Text onPress={logoff}>Log out</Text>

        </View>
    )
}