import * as React from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {SignIn, SignUpAddress, Splash} from '../pages';
import SignUp from '../pages/SignUp';

const Stack = createNativeStackNavigator();

const Router = () => {
  return (
    <Stack.Navigator initialRouteName="SignIn">
      <Stack.Screen
        name="Splash"
        component={Splash}
        options={{headerShown: false}}
      />
      <Stack.Screen
        name="SignIn"
        component={SignIn}
        options={{headerShown: false}}
      />
      <Stack.Screen
        name="SignUp"
        component={SignUp}
        options={{headerShown: false}}
      />
      <Stack.Screen
        name="SignUpAddress"
        component={SignUpAddress}
        options={{headerShown: false}}
      />
    </Stack.Navigator>
  );
};

export default Router;
