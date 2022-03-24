import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";

import AddTodosScreen from "../screen/AddTodosScreen";
import TodosListScreen from "../screen/TodosListScreen";
import TodoDetailScreen from "../screen/TodoDetailScreen";
import { Feather } from "@expo/vector-icons";
import { Entypo } from "@expo/vector-icons";

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

const TabBottomNav = () => {
  return (
    <Tab.Navigator
      screenOptions={{
        ...defaultOption,
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
