import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

// import { Home, ChatScreen, ListChat, Register, welcome } from '../screens';
import Home from '../screens/Home'
import ChatScreen from '../screens/ChatScreen'
import ListChat from '../screens/ListContact'
import Register from '../screens/Register'
import welcome from '../screens/Welcome'

const Stack = createStackNavigator();
// const StackChatScreen = createStackNavigator();
const MainStack = createStackNavigator();

export default function Main() {
    return (
        <NavigationContainer>
            <Stack.Navigator initialRouteName="welcome">
                <Stack.Screen
                    options={{headerShown: false}}
                    name="welcome"
                    component={welcome}
                />
                <Stack.Screen
                    name="Register"
                    component={Register}
                />
                <Stack.Screen
                    options={{headerShown: false}}
                    name="Home"
                    component={Home}
                />
                <Stack.Screen
                    options={{headerShown: false}}
                    name="ChatPage"
                    component={ChatScreen}
                />
                  <Stack.Screen
                    options={{headerShown: false}}
                    name="ListChat"
                    component={ListChat}
                />
            </Stack.Navigator>
        </NavigationContainer>
    );
}