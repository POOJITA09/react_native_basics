import { StyleSheet, Text, View } from "react-native";
import { StatusBar } from "expo-status-bar";
import React from "react";
import HeaderTop from "../components/HeaderTop";
import TodoInputForm from '../components/TodoInputForm';
import TodoList from "../components/TodoList";



const HomeScreen = () => {
  return (
    <>
      
      <HeaderTop title={'TodoApp'} color='yellow'/>
      <TodoInputForm/>
      <TodoList/>
      <StatusBar />
    </>
  );
};

export default HomeScreen;

const styles = StyleSheet.create({});
