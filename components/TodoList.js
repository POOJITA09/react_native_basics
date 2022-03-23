import {
  View,
  Text,
  ScrollView,
  FlatList,
  StyleSheet,
  TouchableOpacity,
} from "react-native";
import React, { useState } from "react";
import { useNavigation } from "@react-navigation/native";
import { AntDesign } from "@expo/vector-icons";

const TodoList = ({ todosList }) => {
  const navigation = useNavigation();
  const onClickHandler = (data) => {
    navigation.navigate("Detail", data);
  };

  return (
    <FlatList
      contentContainerStyle={styles.container}
      keyExtractor={(item) => item.key.toString()}
      data={todosList}
      renderItem={({ item }) => (
        <TouchableOpacity onPress={()=>onClickHandler(item)}>
          <View style={styles.item}>
            <Text style={styles.text}>{item.item}</Text>
            <AntDesign name="checkcircle" size={24} color="#0074CC" />
          </View>
        </TouchableOpacity>
      )}
    />
  );
};

const styles = StyleSheet.create({
  container: {
    padding: 10,
  },
  item: {
    margin: 10,
    paddingHorizontal: 25,
    paddingVertical: 12,
    backgroundColor: "#f4f4f4",
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },
  text: {
    color: "grey",
    fontSize: 15,
    fontStyle: "italic",
    marginBottom: 10,
  },
});

export default TodoList;
