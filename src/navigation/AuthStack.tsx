// src/navigation/AuthStack.tsx
import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import BiometricAuthScreen from '../screens/auth/BiometricAuthScreen';
import PinScreen from '../screens/auth/PinScreen';

const Stack = createStackNavigator();

const AuthStack = ({ setIsAuthenticated }: { setIsAuthenticated: (isAuthenticated: boolean) => void }) => (
    <Stack.Navigator screenOptions={{ headerShown: false }}>
        <Stack.Screen name="Biometric">
            {props => <BiometricAuthScreen {...props} setIsAuthenticated={setIsAuthenticated} />}
        </Stack.Screen>
        <Stack.Screen name="Pin">
            {props => <PinScreen {...props} setIsAuthenticated={setIsAuthenticated} />}
        </Stack.Screen>
    </Stack.Navigator>
);

export default AuthStack;
