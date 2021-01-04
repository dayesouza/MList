import React, { useEffect } from "react";
import { View, Text, ActivityIndicator, StyleSheet } from "react-native";
import { firebase } from "../../firebase/config";
import * as RootNavigation from "../../helpers/RootNavigation";

export default function Loading({ changeLoading }) {
  useEffect(() => {
    firebase.auth().onAuthStateChanged((user) => {
      // if(!user) {
      //   changeLoadinga();
      // }
      // RootNavigation.navigate('Login')
    });
  }, []);

  return (
    <View style={styles.container}>
      <Text>Loading</Text>
      <ActivityIndicator size="large" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
});
