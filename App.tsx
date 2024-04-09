import { StyleSheet} from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import LoginScreen from './src/Presentation/Screen/Login/LoginScreen';
import RegisterScreen from './src/Presentation/Screen/Register/RegisterScreen';
import ProfileInfoScreen from './src/Presentation/Screen/Profile/Info/ProfileInfo';
import HomeScreen from './src/Presentation/Screen/Home/HomeScreen';

export type RootStackParamList = {
  Login: undefined,
  Register: undefined,
  Profile: undefined
  Home: undefined,
}

const Stack = createNativeStackNavigator<RootStackParamList>();

export default function App() {

  return (
       <NavigationContainer>
        <Stack.Navigator initialRouteName='Login'> 
          <Stack.Screen name='Login' component={LoginScreen}/> 
          <Stack.Screen name='Register' component={RegisterScreen}/> 
          <Stack.Screen name='Profile' component={ProfileInfoScreen}/> 
          <Stack.Screen name='Home' component={HomeScreen}/>
        </Stack.Navigator>
       </NavigationContainer>

  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
