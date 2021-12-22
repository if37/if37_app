import React from 'react'
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Home from '../scenes/Home/Home'
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
            </Stack.Navigator>
        </NavigationContainer>
    )
}

export default ApplicationNavigator
