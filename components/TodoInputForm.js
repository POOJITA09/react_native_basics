import { StyleSheet,Button,TextInput,View,SafeAreaView,Alert} from 'react-native';
import React from 'react';

const TodoInputForm = () => {

  const [text,onChangeText] = React.useState("");
 

  return (
      <SafeAreaView>
        <TextInput
          style={styles.input}
          onChangeText={onChangeText}
          value={text}
          placeholder= 'Search here!'
        />
        <View style={styles.Button}>
        <Button 
        title="Submit"
        color='green'
        onPress={() => Alert.alert('Done')}
      />
      </View>

         
      </SafeAreaView>
    );
  };
  
  


export default TodoInputForm

const styles = StyleSheet.create({
  input: {
    
    height: 60,
    margin: 25,
    borderWidth: 5,
    borderRadius:10,
    padding:10,
    borderColor:'blue',
    fontSize:17,

  },
  Button:{
    width:'50%',
    paddingLeft:50,
    marginLeft:70,
    backgroundColor: 'white',
    
   

  },
});