import React from 'react'
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Home from '../scenes/Home/Home'
import CameraHandler from '../scenes/Camera/Camera';
import PhotoPreview from '../scenes/Camera/PhotoPreview';
//import TextDetection from '../scenes/TextDetection/TextDetection';
import FsView from '../scenes/FsView/FsView';
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
                    component={CameraHandler}
                />
                <Stack.Screen
                    name="photo preview"
                    component={PhotoPreview}
                />
                <Stack.Screen 
                    name="fsView"
                    component={FsView}
                />
            </Stack.Navigator>
        </NavigationContainer>
    )
}

export default ApplicationNavigator
