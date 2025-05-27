import { View, Text, StyleSheet } from 'react-native';
import { VibrancyView } from '@react-native-community/blur';
import React from 'react';

const Banner = () => {
    return (
        <View style={styles.container}>
            <VibrancyView style={styles.blurContainer} blurType='prominent' blurAmount={15} reducedTransparencyFallbackColor="rgba(0,0,0,0.4)">
                <View>
                    <Text style={styles.cardTitle}>Tu app para seguir el mundo de las criptomonedas al instante
                    </Text>
                </View>
            </VibrancyView>
            <VibrancyView style={styles.blurMiniContainer} blurType="light" blurAmount={15} reducedTransparencyFallbackColor="rgba(0,0,0,0.4)">
                <Text style={styles.cardText}>📈 Gráficas y tendencias</Text>
            </VibrancyView>
            <VibrancyView style={styles.blurMiniContainer} blurType="light" blurAmount={15} reducedTransparencyFallbackColor="rgba(0,0,0,0.4)">
                    <Text style={styles.cardText}>💸 Precios en tiempo real</Text>
            </VibrancyView>
            <VibrancyView style={styles.blurMiniContainer} blurType="light" blurAmount={15} reducedTransparencyFallbackColor="rgba(0,0,0,0.4)">
                <Text style={styles.cardText}>📲 Noticias relevantes</Text>
            </VibrancyView>
            <VibrancyView style={styles.blurMiniContainer} blurType="light" blurAmount={15} reducedTransparencyFallbackColor="rgba(0,0,0,0.4)">
                <Text style={styles.cardText}>✨ ¡Y mucho más!</Text>
            </VibrancyView>

        </View>

    );
};

const styles = StyleSheet.create({
    container: {
        flexDirection: 'row', 
        justifyContent: 'center', 
        flexWrap: 'wrap', 
        gap: 12,
        width: '100%',
        height: 200,
        alignItems: 'center',
    },
    blurContainer: {
        paddingHorizontal: 24,
        paddingVertical: 32,
        borderRadius: 20,
        width: '90%',
        height: 200,
        alignItems: 'center',
        justifyContent: 'center',
        overflow: 'hidden',
        backgroundColor: 'transparent',
    },
    blurMiniContainer: {
        padding: 12,
        borderRadius: 50,
        overflow: 'hidden',
    },  
    cardTitle: {
        fontSize: 30,
        textAlign: 'center',
        fontWeight: '600',
        color: '#4F8EF7',
        marginBottom: 8,

    },
    cardText: {
        fontSize: 16,
        color: '#000000',
        lineHeight: 24,
    },
});

export default Banner;
