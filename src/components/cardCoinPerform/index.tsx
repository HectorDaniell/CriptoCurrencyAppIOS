import { View, Text, Image, StyleSheet, TouchableOpacity } from 'react-native'
import React from 'react'

const CardCoinPerform = (
    { icon, name, symbol, price, variation, positive }: { icon: string, name: string, symbol: string, price: number, variation: number, positive: boolean }) => {
    return (
        <>
            <Image source={{ uri: icon.replace('.svg', '.png') }} style={styles.icon} />
            <Text style={styles.name}>{name}</Text>
            <Text style={styles.symbol}>({symbol})</Text>
            <Text style={styles.price}>${price.toLocaleString('en-US', { maximumFractionDigits: 4 })}</Text>
            <Text style={[
                styles.variation,
                positive
                    ? (variation >= 0 ? styles.positive : styles.negative)
                    : (variation < 0 ? styles.negative : styles.positive)
            ]}>
                {variation >= 0 ? '▲' : '▼'} {Math.abs(variation).toFixed(2)}%
            </Text>
        </>
    )
}


const styles = StyleSheet.create({
    icon: {
        width: 40,
        height: 40,
        borderRadius: 20,
        marginBottom: 8,
        backgroundColor: '#F1F5F9',
    },
    name: {
        fontSize: 15,
        fontWeight: '600',
        color: '#22223B',
        textAlign: 'center',
    },
    symbol: {
        fontSize: 12,
        color: '#64748B',
        fontWeight: '500',
        marginBottom: 4,
        textAlign: 'center',
    },
    price: {
        fontSize: 15,
        fontWeight: 'bold',
        color: '#10B981',
        marginBottom: 2,
    },
    variation: {
        fontSize: 15,
        fontWeight: 'bold',
        marginTop: 2,
    },
    positive: {
        color: '#10B981',
    },
    negative: {
        color: '#EF4444',
    },
})
export default CardCoinPerform