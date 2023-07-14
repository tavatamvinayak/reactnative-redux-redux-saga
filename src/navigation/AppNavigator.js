import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Home from '../screen/Home';
import UserList from '../screen/UserList';

const Stack = createNativeStackNavigator()
const AppNavigator = () => {
  return (
        <NavigationContainer>
            <Stack.Navigator>
                <Stack.Screen name="Home" component={Home}  />
                <Stack.Screen name="userList" component={UserList}  />
            </Stack.Navigator>
        </NavigationContainer>
  )
}

export default AppNavigator