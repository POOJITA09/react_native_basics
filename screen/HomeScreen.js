import { StyleSheet, Text, View } from "react-native";
import { StatusBar } from "expo-status-bar";
import React from "react";
import HeaderTop from "../components/HeaderTop";

const HomeScreen = () => {
  return (
    <>
      <HeaderTop title={'TodoApp'} color="red" />
      <StatusBar />
    </>
  );
};

export default HomeScreen;

const styles = StyleSheet.create({});
