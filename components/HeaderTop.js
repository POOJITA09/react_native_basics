import { StyleSheet, Text, View, Dimensions } from "react-native";
import React from "react";

const HeaderTop = ({ title, color }) => {
  return (
    <View style={[styles.container, { backgroundColor: color }]}>
      <Text style={styles.title}>{title}</Text>
    </View>
  );
};

export default HeaderTop;

const styles = StyleSheet.create({
  container: {
    height: 100,
    backgroundColor: "yellow",
    alignItems: "center",
    justifyContent: "center",
  },
  title: {
    fontSize: 20,
    color:'#fff',
  },
});
