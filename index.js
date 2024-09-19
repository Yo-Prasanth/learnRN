/**
 * @format
 */

import {AppRegistry} from 'react-native';
import App from './App';
import {name as appName} from './app.json';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import Details from './src/screens/Details';
import HomePage from './src/screens/HomePage';

const Stack = createNativeStackNavigator();

const Nav = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator
        initialRouteName="HomePage"
        screenOptions={{headerShown: false}}>
        <Stack.Screen name="Home" component={App} options={{title: ''}} />
        <Stack.Screen
          name="Details"
          component={Details}
          options={{title: ''}}
        />
        <Stack.Screen
          name="HomePage"
          component={HomePage}
          options={{title: ''}}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

AppRegistry.registerComponent(appName, () => Nav);
