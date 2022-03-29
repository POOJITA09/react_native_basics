import { StyleSheet, Text, View } from "react-native";
import React from "react";
import TodoInputForm from "../components/TodoInputForm";
import HeaderTop from "../components/HeaderTop";
import COLORS from "../constants/COLORS";

const AddTodosScreen = () => {
  return (
  <>
    <HeaderTop title="ADD Form" color={COLORS.colorheader} />
    <View style={styles.container}> 
     <TodoInputForm />
    </View>
  </>
  );
};

export default AddTodosScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginTop:100,
    // justifyContent: "center",
    // alignItems: "center",
  },
});