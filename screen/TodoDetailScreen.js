import React from 'react';
import {SafeAreaView, StyleSheet, View, Text, Image,Pressable,Dimensions} from 'react-native';
import {ScrollView} from 'react-native';
import COLORS from '../constants/COLORS';
import HeaderTop from "../components/HeaderTop";
const { width } = Dimensions.get("screen");
import { Ionicons } from '@expo/vector-icons';


const TodoDetailScreen = ({navigation, route}) => {
  const item = route.params;
  

  return (
    <>
    <View style={style.header}>

      <Ionicons name="chevron-back" size={24} color="black" onPress={navigation.goBack} />
      <View style={{marginHorizontal:120}}>
      <HeaderTop title="TodoDetails" color={COLORS.colorheader} />
      </View>
      
      </View>
      
      <SafeAreaView style={{backgroundColor: COLORS.white}}>
    <ScrollView showsVerticalScrollIndicator={true}>
      <View
        style={{
          justifyContent: 'center',
          alignItems: 'center',
          height: 280,
          backgroundColor:COLORS.primary,
          //borderRadius:15
        }}>
        <Image source={{
          uri:'https://assets-global.website-files.com/619cef5c40cb8925cd33ece3/619cef5c40cb8963c133f5fc_6076f40a7bc433d96f4663f4_template-vignette-TO-DO-LIST-1200x900.png'
        }} style={{height: 250, width: 350,borderRadius:45}} />
      </View>
      <View style={style.details}>
        <View
          style={{
            flexDirection: 'row',
            justifyContent: 'space-between',
            alignItems: 'center',
          }}>
          <Text
            style={{fontSize: 25, fontWeight: 'bold', color: '#737373'}}>
            {item.item}
          </Text>
          <Text style={style.date}>{item.deadline}</Text>         
        </View>
        <Text style={style.detailsText}>
          Lorem Ipsum is simply dummy text of the printing and typesetting
          industry. Lorem Ipsum has been the industry's standard dummy text
          ever since the 1500s, when an unknown printer took a galley of type
          and scrambled it to make a type specimen book. It has survived not
          only five centuries.
        </Text>
      </View>
    </ScrollView>
    <View></View>
  </SafeAreaView>
  <View style={style.container}>
  <Pressable   style={style.btnContainer}>
          <Text style={style.btn}>Tick</Text>
       </Pressable>
       <Pressable   style={style.btnContainer}>
          <Text style={style.btn}>Delete</Text>
       </Pressable>
  </View>
    </>

  );
};

const style = StyleSheet.create({
  header: {
    // paddingVertical: 20,
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor:'#66b3ff',
    
    // marginHorizontal: 20,
  },
  details: {
    paddingHorizontal: 20,
    paddingTop: 40,
    paddingBottom: 60,
    backgroundColor: COLORS.primary,
  },
  iconContainer: {
    backgroundColor: COLORS.white,
    height: 50,
    width: 50,
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 30,
  },
  detailsText: {
    marginTop: 10,
    lineHeight: 22,
    fontSize: 16,
    color: COLORS.grey,
  },
  container:{
    flex:1,
    flexDirection:'row',
   justifyContent:'center',
   backgroundColor:COLORS.primary,
   },
  btnContainer: {
    width: width /3,
    alignSelf: "center",
    backgroundColor: "#0074CC",
    borderRadius: 10,
    overflow: "hidden",
    marginHorizontal:10,  
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
  date:{
    color:'#737373',
    fontWeight:'bold',
    borderWidth: 0.2,
     borderColor: 'grey',
     borderRadius: 10,
     paddingHorizontal: 6,
     paddingVertical: 6,
     width:width/5,
     fontSize:11,
     justifyContent:'center',
    textAlign:'center',
  }


});

export default TodoDetailScreen;