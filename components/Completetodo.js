import { StyleSheet, Text, View ,FlatList, TouchableOpacity} from 'react-native'
import React from 'react'
import { useNavigation } from "@react-navigation/native";
import { AntDesign } from "@expo/vector-icons";
import { MaterialIcons } from '@expo/vector-icons';
import { Ionicons } from '@expo/vector-icons';
 import { Entypo } from '@expo/vector-icons';
import TodoList from './TodoList';

const Completetodo = ({ todosList }) => {
  const navigation = useNavigation();
  const onClickHandler = (data) => {
    navigation.navigate("Detail", data);
  };
  return (
      <>
    
  <FlatList
    contentContainerStyle={styles.container}
    keyExtractor={(item) => item.key.toString()}
    data={todosList}
    renderItem={({ item }) => (
      <TouchableOpacity onPress={()=>onClickHandler(item)}>


        <View style={styles.item}>
        
          <Text style={styles.text}>{item.item}</Text>
          <View style={styles.buttongrp1}>
          <AntDesign name="checkcircle" size={20} color="#0074CC" />
          </View>
            </View>
      
      </TouchableOpacity>
    )} />
  </>
  )
}
export default Completetodo;

const styles = StyleSheet.create({
    
     container: {
       padding: 10,
       
       // top:100,
       
     },
     flat:{
       flex:1,
       
       
     },
     item: {
       // margin: 10,
       marginVertical:10,
       marginRight:-15,
       paddingHorizontal: 25,
       paddingVertical: 12,
       backgroundColor: "#f4f4f4",
       flexDirection: "row",
       justifyContent: "space-between",
       alignItems: "center",
       
     },
     text: {
      color:'#595959',
     
       fontSize: 15,
       fontStyle: "italic",
       flex:10,
       padding:5,
       textDecorationLine: 'line-through'
       
       
       
     },
     
})