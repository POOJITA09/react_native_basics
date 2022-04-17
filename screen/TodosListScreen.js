import { StyleSheet, Text, View, Button } from "react-native";
import React from "react";
import TodoList from "../components/TodoList";
import HeaderTop from "../components/HeaderTop";
import data from "../assets/data/todo-data";
import COLORS from "../constants/COLORS";
import {useSelector} from "react-redux";



const TodosListScreen = ({ navigation }) => {
  //const count = useSelector(state);
  const pendingData = useSelector(state=>state.todos.pendingList)
  console.log(pendingData)
  return (
    <>
      <HeaderTop title="TodosApp" color={COLORS.colorheader} />
      <TodoList todosList={pendingData} />
    </>
  );
};

export default TodosListScreen;

const styles = StyleSheet.create({});
