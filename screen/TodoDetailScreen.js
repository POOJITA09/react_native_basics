import { StyleSheet, Text, View, Button } from "react-native";
import React from "react";
import HeaderTop from "../components/HeaderTop";

const TodoDetailScreen = ({ route, navigation }) => {
  const { key, item } = route.params;

  console.log(route.params);
  return (
    <>
      <HeaderTop title="TodosApp" color="#0074CC" />
      <View
        style={{
          flex: 1,
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <Text>{key}</Text>
        <Text>{item}</Text>
        <Button
          title="GoBack"
          onPress={() => {
            navigation.goBack();
          }}
        />
      </View>
    </>
  );
};

export default TodoDetailScreen;

const styles = StyleSheet.create({});
