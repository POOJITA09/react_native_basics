import {
  StyleSheet,
  Button,
  TextInput,
  View,
  Keyboard,
  Alert,
  Dimensions,
  Text,
  Pressable
} from "react-native";
import React, { useState } from "react";
import { Fontisto } from '@expo/vector-icons';

const { width } = Dimensions.get("screen");

const TodoInputForm = ({ addTodoHandler }) => {
  const [text, onChangeText] = useState("");

  const addTodosHandler = () => {
    Keyboard.dismiss();
    addTodoHandler({
      key: new Date().toISOString(),
      item: text,
    });
    Alert.alert(
      "Add New Todo",
      `Todo Name : ${text}`
    );
  };

  const LabelHandler =({placeholder,label,styling})=>{
   return(
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
  }
  
  return (
    <>
      <View style={styles.container}>
        <LabelHandler placeholder={"Eg: React Native"} label={"Title"} styling={styles.input}/>
        <LabelHandler placeholder={"Eg: Learning react native in 10 days"} label={"Description"} styling={styles.input}/>
        <Text style={styles.text}>Deadline</Text>
        <View style={styles.sectionStyle}>
            <TextInput
              style={styles.input1}
              onChangeText={onChangeText}
              value={text}
              placeholder="Eg: 25/03/2022"
              underlineColorAndroid="transparent"
            />
          {/* <LabelHandler placeholder={"Eg:25/03/2022"} label={""} styling={styles.input1}/> */}
            <Fontisto name="date" style={styles.icon} size={24} color="black" />
        </View>
      </View>
        <Pressable  onPress={addTodosHandler} style={styles.btnContainer}>
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
    width: width-40,
  },
  input1: {   
    fontSize: 14,
    width: width-80,
  },
  sectionStyle: {
    flexDirection: 'row',
    alignItems:"center",
    borderWidth: 1,
    borderColor: '#ddd',
    borderRadius: 10,
    paddingHorizontal: 10,
    paddingVertical: 8,
    marginVertical: 10,
    marginHorizontal:20,
    width: width-40
  },
  btnContainer: {
    width: width /2,
    alignSelf: "center",
    backgroundColor: "#0074CC",
    borderRadius: 10,
    overflow: "hidden",
    position: 'absolute',
    bottom:135,
    height:40,
    justifyContent: 'center',

  },
  btn: {
    color: "white",
    fontSize:20,
    fontWeight: 'bold',
    lineHeight: 21,
    textAlign:"center",
  },
  text:{
    color: "grey",
    fontSize: 20,
    textAlign:"center",
    fontWeight:"bold",
    marginVertical: 10,
    
  },
  
  icon:{
   
  }
});