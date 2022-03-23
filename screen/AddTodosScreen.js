import { StyleSheet, Text, View } from "react-native";
import React from "react";
import TodoInputForm from "../components/TodoInputForm";

const AddTodosScreen = () => {
  return (
    <View style={styles.container}>
     <TodoInputForm />
    </View>
  );
};

export default AddTodosScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
});
