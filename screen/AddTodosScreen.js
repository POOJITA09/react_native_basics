import { SafeAreaView, StyleSheet, Text, View } from "react-native";
import { useSelector, useDispatch } from "react-redux";
import { addItemAsync } from "../store/reducerAndAction";
import React from "react";
import TodoInputForm from "../components/TodoInputForm";
import HeaderTop from "../components/HeaderTop";
import COLORS from "../constants/COLORS";

const AddTodosScreen = () => {
  const dispatch = useDispatch();
  const addTodoHandler = (data) => {
    dispatch(addItemAsync(data));
  };
  return (
    <>
      <HeaderTop title="ADD Form" color={COLORS.colorheader} />
      <View style={styles.container}>
        <TodoInputForm addTodoHandler={addTodoHandler} />
      </View>
    </>
  );
};

export default AddTodosScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginTop: 100,
    // justifyContent: "center",
    // alignItems: "center",
  },
});
