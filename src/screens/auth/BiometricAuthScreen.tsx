// src/screens/auth/BiometricAuthScreen.tsx
import React, { useEffect } from 'react';
import { View, Text, Button, Alert, StyleSheet, Platform } from 'react-native';
import * as Keychain from 'react-native-keychain';
import Icon from 'react-native-vector-icons/Feather';


const BiometricAuthScreen = ({ navigation, setIsAuthenticated }: any) => {
    const authenticate = async () => {
        try {
            const credentials = await Keychain.getGenericPassword({
                authenticationPrompt: {
                    title: 'Autenticación requerida',
                },
            });

            if (credentials) {
                setIsAuthenticated(true);
                navigation.navigate('Main');
            } else {
                navigation.navigate('Pin'); // Redirige al PIN si falla
            }
        } catch (error) {
            navigation.navigate('Pin'); // Fallback a PIN
        }
    };
    useEffect(() => {
        const checkBiometryAndAuthenticate = async () => {
            if (Platform.OS === 'ios' || Platform.OS === 'android') { // Asegura que solo se ejecute en móviles
                try {
                    const biometryType = await Keychain.getSupportedBiometryType();
                    if (biometryType === Keychain.BIOMETRY_TYPE.FACE_ID || biometryType === Keychain.BIOMETRY_TYPE.TOUCH_ID || biometryType === Keychain.BIOMETRY_TYPE.FINGERPRINT) {
                        // Biometría soportada, intentar autenticar
                        authenticate();
                    } else {
                        // No hay biometría o no está configurada, ir directamente al PIN
                        console.log('Biometría no soportada o no configurada:', biometryType);
                        navigation.navigate('Pin');
                    }
                } catch (error) {
                    console.error('Error al verificar tipo de biometría:', error);
                    navigation.navigate('Pin'); // Fallback si hay un error al verificar
                }
            } else {
                navigation.navigate('Pin');
            }
        };

        checkBiometryAndAuthenticate();
    }, []);

    return (
        <View style={styles.container}>
            <Icon name="lock" size={30} color='#4F8EF7' />
            <Text style={styles.text}>Verificando Face ID...</Text>
            <Button title="Usar PIN" onPress={() => navigation.navigate('Pin')} />
        </View>
    );
};

const styles = StyleSheet.create({
    container: { flex: 1, justifyContent: 'center', alignItems: 'center' },
    text: { fontSize: 18, marginBottom: 20, marginTop: 20 },
});

export default BiometricAuthScreen;
