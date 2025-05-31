import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import BottomTabs from './BottomTabs';
import CoinDetailScreen from '../screens/coinDetail';
import CriptoPerformance from '../screens/criptoPerformance';

export type RootStackParamList = {
    Main: undefined;
    CriptoPerformance: undefined;
    CoinDetail: { symbol: string };
};
interface RootNavigatorProps {
    onLogout?: () => void;
    }

const Stack = createStackNavigator<RootStackParamList>();

const AppStack = () => {
    return (
        <Stack.Navigator screenOptions={{ headerShown: false }} >
            <Stack.Screen name="Main" component={BottomTabs}  />
            <Stack.Screen name="CriptoPerformance" component={CriptoPerformance} />
            <Stack.Screen name="CoinDetail" component={CoinDetailScreen} />
        </Stack.Navigator>
    );
};

export default AppStack; 