import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";

import AddTodosScreen from "../screen/AddTodosScreen";
import TodosListScreen from "../screen/TodosListScreen";
import TodoDetailScreen from "../screen/TodoDetailScreen";
import { Feather } from "@expo/vector-icons";
import { Entypo } from "@expo/vector-icons";
import { MaterialCommunityIcons } from '@expo/vector-icons';
import Completetodoscreen from "../screen/Completetodoscreen";

const Stack = createNativeStackNavigator();
const Tab = createBottomTabNavigator();

const defaultOption = {
  headerShown: false,
};

const TodoListStack = () => {
  return (
    <Stack.Navigator
      screenOptions={{
        ...defaultOption,
      }}
    >
      <Stack.Screen name="List" component={TodosListScreen} />
      <Stack.Screen name="Detail" component={TodoDetailScreen} />
      
    </Stack.Navigator>
  );
};
const CompleteTodoStack = () => {
  return (
    <Stack.Navigator
      screenOptions={{
        ...defaultOption,
      }}
    >
      <Stack.Screen name="CompleteList" component={Completetodoscreen} />
      <Stack.Screen name="Detail" component={TodoDetailScreen} />
      
    </Stack.Navigator>
  );
};

const TabBottomNav = () => {
  return (
    <Tab.Navigator
      screenOptions={{
        ...defaultOption,
        tabBarHideOnKeyboard: true
      }}
    >
      <Tab.Screen
        name="TodoList"
        component={TodoListStack}
        options={{
          tabBarIcon: () => <Feather name="list" size={24} color="black" />,
        }}
      />
      <Tab.Screen
        name="AddTodo"
        component={AddTodosScreen}
        options={{
          tabBarIcon: () => <Entypo name="add-to-list" size={24} color="black" />,
        }}
      />
      <Tab.Screen
        name="Completetodo"
        component={CompleteTodoStack}
        options={{
          tabBarIcon: () => <MaterialCommunityIcons name="playlist-check" size={24} color="black" />,
          
        }}
      />

    </Tab.Navigator>
  );
};

const MainNavigator = () => {
  return (
    <NavigationContainer>
      <TabBottomNav />
    </NavigationContainer>
  );
};

export default MainNavigator;
