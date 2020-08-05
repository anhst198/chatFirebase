import React, {useContext, useState, useEffect} from 'react';
import {NavigationContainer} from '@react-navigation/native';
import AuthStack from './AuthStack';
import HomeStack from './HomeStack';
import Loading from '../components/Loading';
import {createStackNavigator} from '@react-navigation/stack';
import LoginScreen from '../screens/Login';
import HomeScreen from '../screens/Home';
import RoomScreen from '../screens/Room';
import auth from '@react-native-firebase/auth';
import firestore from '@react-native-firebase/firestore';

const Stack = createStackNavigator();
export default function Routes() {
  const [user, setUser] = useState(null);
  // // Handle user state changes
  function onAuthStateChanged(user) {
    setUser(user);
  }

  useEffect(() => {
    const subscriber = auth().onAuthStateChanged(onAuthStateChanged);
    return subscriber; // unsubscribe on unmount
  }, []);

  return (
    // <NavigationContainer>
    //   <Stack.Navigator>
    //     {/* <Stack.Screen name="Login" component={LoginScreen} />
    //       <Stack.Screen name="Home" component={HomeScreen} />
    //       <Stack.Screen name="Room" component={RoomScreen} /> */}
    //     {user ? (
    //       <>
    //         <Stack.Screen name="Home" component={HomeScreen} />
    //         <Stack.Screen name="Room" component={RoomScreen} />
    //       </>
    //     ) : (
    //       <>
    //         <Stack.Screen name="Login" component={LoginScreen} />
    //         {/* <Stack.Screen name="Registration" component={RegistrationScreen} /> */}
    //       </>
    //     )}
    //   </Stack.Navigator>
    // </NavigationContainer>

    <NavigationContainer>
      {user ? <HomeStack /> : <AuthStack />}
    </NavigationContainer>
  );
}
