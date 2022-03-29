import { StyleSheet, Text, View, Button } from "react-native";
import React from "react";
import Completetodo from "../components/Completetodo";
import HeaderTop from "../components/HeaderTop";
import data from "../assets/data/todo-data";
import COLORS from "../constants/COLORS";

const Completetodoscreen = ({ navigation }) => {
  return (
    <>
      <HeaderTop title="Completetodo" color={COLORS.colorheader} />
      <Completetodo todosList={data} />
    </>
  );
};

export default Completetodoscreen;

const styles = StyleSheet.create({});
