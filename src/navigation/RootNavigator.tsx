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

const Stack = createStackNavigator<RootStackParamList>();

const RootNavigator = () => {
    return (
        <Stack.Navigator screenOptions={{ headerShown: false }} >
            <Stack.Screen name="Main" component={BottomTabs}  />
            <Stack.Screen name="CriptoPerformance" component={CriptoPerformance} />
            <Stack.Screen name="CoinDetail" component={CoinDetailScreen} />
        </Stack.Navigator>
    );
};

export default RootNavigator; 