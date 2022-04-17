import { StyleSheet,SafeAreaView,FlatList,Text, View,Dimensions } from 'react-native'
import React from 'react'
const { width } = Dimensions.get("screen");


  
  const Card = ({todosList}) => {
    
  
    return (
      <SafeAreaView style={styles.container1}>
        <Text style={styles.txt}> Today's Task</Text>
        <FlatList
    contentContainerStyle={styles.container}
    keyExtractor={(item) => item.key.toString()}
    data={todosList}
    
    horizontal={true}
    showsHorizontalScrollIndicator={false}

    renderItem={({ item }) => (
     
        <View style={styles.item}>
          <Text >{item.title}</Text>
          
        </View>
      
    )}
  />
      </SafeAreaView>
    );
  }
  
  const styles = StyleSheet.create({
    // container: {
    //   flex: 1,
      
    // },
    // item: {
    //   backgroundColor: '#f9c2ff',
    //   padding: 20,
    //   marginVertical: 8,
    //   marginHorizontal: 16,
    // },
    // title: {
    //   fontSize: 32,
    // },
    item: {
      height:120,
      width: width/3,
        // marginVertical:10,
        // marginRight:-15,
        // paddingHorizontal: 25,
        // paddingVertical: 12,
        backgroundColor: "#f4f4f4",
        flexDirection: "row",
        justifyContent: "space-between",
        alignItems: "center",
        backgroundColor:'#80bfff',
        borderRadius:30,
        elevation:8,
        paddingLeft: 16,
    paddingRight: 14,
    marginTop: 6,
    marginBottom: 6,
    marginLeft: 16,
    marginRight: 16,

      },
      txt: {
        fontWeight: '700',
   fontSize: 20,
   color:'#595959',
   alignSelf: "center",
   paddingHorizontal: 10,
   paddingVertical: 5,
   marginHorizontal: 10,
   marginVertical: 25,
      },
     
      
  });
   export default Card;