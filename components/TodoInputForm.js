import {
  StyleSheet,
  Button,
  TextInput,
  View,
  Keyboard,
  Alert,
  Dimensions,
} from "react-native";
import React from "react";

const { width } = Dimensions.get("screen");
const TodoInputForm = () => {
  const [text, onChangeText] = React.useState("");
  const addTodosHandler = () => {
    Keyboard.dismiss();
    Alert.alert("Done");
  };
  return (
    <View style={styles.container}>
      <TextInput
        style={styles.input}
        onChangeText={onChangeText}
        value={text}
        placeholder="Search here!"
      />
      <View style={styles.btnContainer}>
        <Button
          title="Add"
          onPress={addTodosHandler}
          color="#0074CC"
          style={styles.btn}
        />
      </View>
    </View>
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
  },
  btnContainer: {
    width: width / 2,
    alignSelf: "center",
    backgroundColor: "yellow",
    borderRadius: 10,
    overflow: "hidden",
  },
  btn: {},
});
