import {
  StyleSheet,
  Button,
  TextInput,
  View,
  Keyboard,
  Alert,
  Dimensions,
  Text,
  Pressable,
} from "react-native";
import React, { useState } from "react";
import { Fontisto } from "@expo/vector-icons";

const { width } = Dimensions.get("screen");

const TodoInputForm = ({ addTodoHandler }) => {
  const [text, onChangeText] = useState("");

  const addTodo = () => {
    Keyboard.dismiss();
    addTodoHandler({
      key: new Date().toISOString(),
      item: text,
    });
    Alert.alert("Add New Todo", `Todo Name : ${text}`);
    addTodoHandler({});
  };

  const LabelHandler = ({ placeholder, label, styling }) => {
    return (
      <>
        <Text style={styles.text}>{label}</Text>
        <TextInput
          style={styling}
          onChangeText={onChangeText}
          value={text}
          placeholder={placeholder}
        />
      </>
    );
  };

  return (
    <>
      <View style={styles.container}>
        <View style={styles.formGroup}>
          <Text style={styles.label}>Enter Title</Text>
          <TextInput style={styles.input} placeholder={"Enter Title"} />
        </View>
        <View style={styles.formGroup}>
          <Text style={styles.label}>Enter Description</Text>
          <TextInput style={styles.input} placeholder={"Enter Description"} />
        </View>
        <View style={styles.formGroup}>
          <Text style={styles.label}>Enter DeadLine</Text>
          <TextInput style={styles.input} placeholder={"Enter DeadLine"} />
        </View>
      </View>
      <Pressable onPress={addTodo} style={styles.btnContainer}>
        <Text style={styles.btn}>Add</Text>
      </Pressable>
    </>
  );
};

export default TodoInputForm;

const styles = StyleSheet.create({
  container: {
    marginTop: 10,
  },
  input: {
    borderWidth: 1,
    borderRadius: 10,
    borderColor: "#ddd",
    paddingHorizontal: 10,
    paddingVertical: 8,
    fontSize: 14,
    marginHorizontal: 20,
    marginVertical: 10,
    width: width - 40,
  },
  input1: {
    fontSize: 14,
    width: width - 80,
  },
  sectionStyle: {
    flexDirection: "row",
    alignItems: "center",
    borderWidth: 1,
    borderColor: "#ddd",
    borderRadius: 10,
    paddingHorizontal: 10,
    paddingVertical: 8,
    marginVertical: 10,
    marginHorizontal: 20,
    width: width - 40,
  },
  btnContainer: {
    width: width / 2,
    alignSelf: "center",
    backgroundColor: "#0074CC",
    borderRadius: 10,
    overflow: "hidden",
    position: "absolute",
    bottom: 135,
    height: 40,
    justifyContent: "center",
  },
  btn: {
    color: "white",
    fontSize: 20,
    fontWeight: "bold",
    lineHeight: 21,
    textAlign: "center",
  },
  text: {
    color: "grey",
    fontSize: 20,
    textAlign: "center",
    fontWeight: "bold",
    marginVertical: 10,
  },

  icon: {},
});
