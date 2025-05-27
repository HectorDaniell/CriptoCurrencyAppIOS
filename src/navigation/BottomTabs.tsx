import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import HomeScreen from '../screens/HomeScreen';
import Feather from 'react-native-vector-icons/Feather';
import criptoPerformance from '../screens/criptoPerformance';
import { BlurView } from '@react-native-community/blur';
import { useSafeAreaInsets } from 'react-native-safe-area-context';
import AllCoinsScreen from '../screens/allCoins';

export type BottomTabParamList = {
    Home: undefined;
    criptoPerformance: undefined;
    AllCoins: undefined;
};

const Tab = createBottomTabNavigator<BottomTabParamList>();

const BottomTabs = () => {
    const insets = useSafeAreaInsets();
    return (
        <Tab.Navigator
            screenOptions={{
                headerShown: false,
                tabBarActiveTintColor: '#4F8EF7',
                tabBarInactiveTintColor: 'gray',
                tabBarStyle: {
                    paddingBottom: insets.bottom || 16,
                    height: 60 + (insets.bottom || 16),
                    backgroundColor: 'transparent',
                    borderTopWidth: 0,
                },
                tabBarBackground: () => (
                    <BlurView
                        style={{ flex: 1 }}
                        blurType="prominent"
                        blurAmount={15}
                        reducedTransparencyFallbackColor="rgb(255, 255, 255)"
                    />
                ),
            }}
        >
            <Tab.Screen name="Home" component={HomeScreen} options={{ title: 'Inicio', tabBarIcon: ({ color, size }) => (
                <Feather name="home" color={color} size={size} />
            ) }} />
            <Tab.Screen name="criptoPerformance" component={criptoPerformance} options={{ title: 'Performance', tabBarIcon: ({ color, size }) => (
                <Feather name="bar-chart" color={color} size={size} />
            ) }} />
            <Tab.Screen name="AllCoins" component={AllCoinsScreen} options={{ title: 'Todas las Cripto', tabBarIcon: ({ color, size }) => (
                <Feather name="target" color={color} size={size} />
            ) }} />
        </Tab.Navigator>
    );
};

export default BottomTabs; 