import React, { useState, useEffect } from "react";
import {
  FlatList,
  Keyboard,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from "react-native";
import styles from "./styles";
import FirebaseService from "../../services/firebaseService";

export default function HomeScreen({ navigation, user }) {
  const [entityText, setEntityText] = useState("");
  const [entities, setEntities] = useState([]);

  const userID = user.id;

  useEffect(() => {
    FirebaseService.getDataOrdered(
      "entities",
      userID,
      "createdAt",
      (dataReceived) => setEntities(dataReceived)
    );
  }, []);

  const onAddButtonPress = () => {
    if (entityText && entityText.length > 0) {
      const data = {
        text: entityText,
        authorID: userID,
      };
      FirebaseService.saveData("entities", data)
        .then((_doc) => {
          setEntityText("");
          Keyboard.dismiss();
        })
        .catch((error) => {
          alert(error);
        });
    }
  };

  const renderEntity = ({ item, index }) => {
    return (
      <View style={styles.entityContainer}>
        <Text style={styles.entityText}>
          {index}. {item.text}
        </Text>
      </View>
    );
  };

  const logoff = () => {
    firebase
      .auth()
      .signOut()
      .catch(function (error) {
        console.log("ue erro");
      });
  };
  return (
    <View style={styles.container}>
      <View style={styles.formContainer}>
        <TextInput
          style={styles.input}
          placeholder="Add new entity"
          placeholderTextColor="#aaaaaa"
          onChangeText={(text) => setEntityText(text)}
          value={entityText}
          underlineColorAndroid="transparent"
          autoCapitalize="none"
        />
        <TouchableOpacity style={styles.button} onPress={onAddButtonPress}>
          <Text style={styles.buttonText}>Add</Text>
        </TouchableOpacity>
      </View>
      {entities && (
        <View style={styles.listContainer}>
          <FlatList
            data={entities}
            renderItem={renderEntity}
            keyExtractor={(item) => item.id}
            removeClippedSubviews={true}
          />
        </View>
      )}
      <Text onPress={logoff}>Log out</Text>
    </View>
  );
}
