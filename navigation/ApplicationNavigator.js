import React from 'react'
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Home from '../scenes/Home/Home'
import Camera from '../scenes/Camera/Camera';
const Stack = createNativeStackNavigator();

function ApplicationNavigator() {
    return (
        <NavigationContainer>
            <Stack.Navigator screenOptions={{
                headerShown: false
            }}>
                <Stack.Screen
                    name="home"
                    component={Home}
                />
                <Stack.Screen
                    name="camera"
                    component={Camera}
                />
            </Stack.Navigator>
        </NavigationContainer>
    )
}

export default ApplicationNavigator
