import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import AddTodosScreen from "../screen/AddTodosScreen";
import TodosListScreen from "../screen/TodosListScreen";
import TodoDetailScreen from "../screen/TodoDetailScreen";

const Stack = createNativeStackNavigator();

const TodoListStack = () => {
  return (
    <Stack.Navigator
      screenOptions={{
        headerShown: false,
      }}
    >
      <Stack.Screen name="List" component={TodosListScreen} />
      <Stack.Screen name="Detail" component={TodoDetailScreen} />
    </Stack.Navigator>
  );
};

const MainNavigator = () => {
  return (
    <NavigationContainer>
      <TodoListStack />
    </NavigationContainer>
  );
};

export default MainNavigator;
