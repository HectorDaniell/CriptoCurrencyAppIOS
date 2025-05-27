import { View, Text, StyleSheet, Image, TouchableOpacity } from 'react-native'
import React, { useEffect, useState } from 'react'
import { VibrancyView } from '@react-native-community/blur';
import { getCoinDetail } from '../../services/api/criptoService'

const CardInfoCripto = () => {
    const [coin, setCoin] = useState<any>(null)

    useEffect(() => {
        getCoinDetail('BTC').then(setCoin)
    }, [])

    if (!coin) {
        return null;
    }

    return (
        <TouchableOpacity style={styles.container} onPress={() => {
            getCoinDetail('BTC').then(setCoin)
        }} activeOpacity={0.8}>
            <VibrancyView style={styles.card} blurType='light' blurAmount={12} reducedTransparencyFallbackColor="rgb(255, 255, 255)">
                <View style={styles.row}>
                <Image source={{ uri: coin.icon.replace('.svg', '.png') }} style={styles.icon} />
                <View style={styles.infoContainer}>
                        <Text style={styles.name}>💎 {coin.name}</Text>
                        <Text style={styles.symbol}>({coin.symbol})</Text>
                    </View>
                    <View style={styles.priceContainer}>
                        <Text style={styles.price}>${parseFloat(coin.price).toLocaleString('en-US', { maximumFractionDigits: 2 })}</Text>
                        <Text style={styles.priceLabel}>Precio actual</Text>
                    </View>
                </View>
                <View style={styles.footer}>
                    <Text style={styles.footerText}>🚀 Toca para actualizar los datos de la moneda</Text>
                </View>
            </VibrancyView>
        </TouchableOpacity>
    )
}

const styles = StyleSheet.create({
    container: {
        width: '100%',
        alignItems: 'center',
        overflow: 'hidden',
        paddingHorizontal: 20,
        borderRadius: 20,
        position: 'absolute',
        bottom: 200,
        left: 0,
        right: 0,

    },
    card: {
        backgroundColor: 'rgba(255,255,255,0.6)',
        borderRadius: 20,
        padding: 20,
        width: '100%',
        shadowColor: '#000',
        shadowOpacity: 0.08,
        shadowRadius: 12,
        overflow: 'hidden',
    },
    row: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
    },
    icon: {
        width: 48,
        height: 48,
        borderRadius: 24,
        backgroundColor: '#F1F5F9',
        marginRight: 16,
    },
    infoContainer: {
        flex: 1,
        justifyContent: 'center',
    },
    name: {
        fontSize: 20,
        fontWeight: '700',
        color: '#22223B',
        marginBottom: 2,
    },
    symbol: {
        fontSize: 14,
        color: '#4F8EF7',
        fontWeight: '600',
    },
    priceContainer: {
        alignItems: 'flex-end',
    },
    price: {
        fontSize: 22,
        fontWeight: 'bold',
        color: '#10B981',
    },
    priceLabel: {
        fontSize: 12,
        color: '#64748B',
        marginTop: 2,
    },
    footer: {
        marginTop: 16,
        alignItems: 'center',
    },
    footerText: {
        fontSize: 13,
        color: '#64748B',
    },
    footerHighlight: {
        color: '#4F8EF7',
        fontWeight: '600',
    },
});

export default CardInfoCripto