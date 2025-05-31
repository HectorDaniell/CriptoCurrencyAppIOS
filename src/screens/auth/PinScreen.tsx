// src/screens/auth/PinScreen.tsx
import React, { useState } from 'react';
import { View, Text, TouchableOpacity, StyleSheet, Alert, Vibration } from 'react-native';

const CORRECT_PIN = '1234';

const PinScreen = ({ setIsAuthenticated }: any) => {
    const [pin, setPin] = useState<string[]>([]);
    const PIN_LENGTH = 4;

    const handleKeyPress = (digit: string) => {
        if (pin.length < PIN_LENGTH) {
            const newPin = [...pin, digit];
            setPin(newPin);

            if (newPin.length === PIN_LENGTH) {
                const enteredPin = newPin.join('');
                verifyPin(enteredPin);
            }
        }
    };

    const handleDelete = () => {
        setPin(pin.slice(0, -1));
    };

    const verifyPin = (enteredPin: string) => {
        if (enteredPin === CORRECT_PIN) {
            Vibration.vibrate(100);
            setIsAuthenticated(true); // Redirige desde RootNavigator
        } else {
            Vibration.vibrate(200);
            Alert.alert('PIN incorrecto', 'Intenta de nuevo');
            setPin([]);
        }
    };

    const renderCircles = () =>
        Array.from({ length: PIN_LENGTH }).map((_, index) => (
            <View
                key={index}
                style={[
                    styles.circle,
                    pin.length > index && styles.circleFilled,
                ]}
            />
        ));

    const renderKey = (digit: string) => (
        <TouchableOpacity
            key={digit}
            style={styles.key}
            onPress={() => handleKeyPress(digit)}
        >
            <Text style={styles.keyText}>{digit}</Text>
        </TouchableOpacity>
    );

    const keypad = [
        ['1', '2', '3',],
        ['4', '5', '6'],
        ['7', '8', '9'],
        ['del', '0'],
    ];

    return (
        <View style={styles.container}>
            <Text style={styles.title}>Ingresa tu PIN</Text>
            <View style={styles.circlesContainer}>{renderCircles()}</View>

            <View style={styles.keypadContainer}>
                {keypad.map((row, rowIndex) => (
                    <View key={rowIndex} style={styles.row}>
                        {row.map((key) =>
                            key === 'del' ? (
                                <TouchableOpacity
                                    key="del"
                                    style={styles.key}
                                    onPress={handleDelete}
                                >
                                    <Text style={styles.keyText}>⌫</Text>
                                </TouchableOpacity>
                            ) : (
                                renderKey(key)
                            )
                        )}
                    </View>
                ))}
            </View>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        padding: 20,
        backgroundColor: '#fff',
    },
    title: {
        fontSize: 22,
        textAlign: 'center',
        marginBottom: 40,
        fontWeight: '600',
    },
    circlesContainer: {
        flexDirection: 'row',
        justifyContent: 'center',
        marginBottom: 40,
        gap: 10,
    },
    circle: {
        width: 16,
        height: 16,
        borderRadius: 8,
        borderWidth: 2,
        borderColor: '#999',
        marginHorizontal: 8,
    },
    circleFilled: {
        backgroundColor: '#333',
        borderColor: '#333',
    },
    keypadContainer: {
        alignItems: 'center',
    },
    row: {
        flexDirection: 'row',
        marginBottom: 20,
    },
    key: {
        width: 70,
        height: 70,
        borderRadius: 35,
        backgroundColor: '#eee',
        justifyContent: 'center',
        alignItems: 'center',
        marginHorizontal: 10,
    },
    keyText: {
        fontSize: 24,
        fontWeight: '500',
    },
});

export default PinScreen;
