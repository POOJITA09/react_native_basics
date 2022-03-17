import { View, Text, ScrollView, FlatList, StyleSheet } from "react-native";
import React, { useState } from "react";
import { AntDesign } from "@expo/vector-icons";

const TodoList = () => {
  const [Items, setItems] = useState([
    { key: 1, item: "Item 1" },
    { key: 2, item: "Item 2" },
    { key: 3, item: "Item 3" },
    { key: 4, item: "Item 4" },
    { key: 5, item: "Item 5" },
    { key: 6, item: "Item 6" },
    { key: 7, item: "Item 7" },
    { key: 8, item: "Item 8" },
    { key: 9, item: "Item 9" },
    { key: 10, item: "Item 10" },
    { key: 11, item: "Item 11" },
  ]);
  return (
    <FlatList
      contentContainerStyle={styles.container}
      keyExtractor={(item) => item.key.toString()}
      data={Items}
      renderItem={({ item }) => (
        <View style={styles.item}>
          <Text style={styles.text}>{item.item}</Text>
          <AntDesign name="checkcircle" size={24} color="#0074CC" />
        </View>
      )}
    />
  );
};

const styles = StyleSheet.create({
  container: {
    padding:10,
  },
  item: {
    margin: 10,
    paddingHorizontal: 25,
    paddingVertical: 12,
    backgroundColor: "#f4f4f4",
    flexDirection:'row',
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
