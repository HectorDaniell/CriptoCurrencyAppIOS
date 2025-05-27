import { View, Text, StyleSheet, Image, TouchableOpacity } from 'react-native'
import React from 'react'
import { VibrancyView } from '@react-native-community/blur'
import { useNavigation } from '@react-navigation/native'

interface CardCoinProps {
    item: {
        symbol: string;
        name: string;
        icon: string;
        price: number;
        variation: number;
        variationWeek: number;
    }
}

const CardCoin = ({ item }: CardCoinProps) => {
    const navigation = useNavigation<any>()

    return (
        <TouchableOpacity 
            onPress={() => navigation.navigate('CoinDetail', { symbol: item.symbol })}
            style={styles.cardContainer}
        >
            <VibrancyView style={styles.card} blurType='light' blurAmount={18} reducedTransparencyFallbackColor="rgba(255,255,255,0.7)">
                <View style={styles.header}>
                    <Image 
                        source={{ uri: item.icon?.replace('.svg', '.png') }} 
                        style={styles.icon} 
                    />
                    <View style={styles.headerInfo}>
                        <Text style={styles.name}>{item.name}</Text>
                        <Text style={styles.symbol}>({item.symbol})</Text>
                    </View>
                </View>
                <View style={styles.priceContainer}>
                    <Text style={styles.price}>${parseFloat(item.price.toString()).toLocaleString('en-US', { maximumFractionDigits: 4 })}</Text>
                    <View style={styles.variationsContainer}>
                        <Text style={[styles.variation, item.variation >= 0 ? styles.positive : styles.negative]}>
                            {item.variation >= 0 ? '▲' : '▼'} {Math.abs(item.variation).toFixed(2)}%
                        </Text>
                        <Text style={[styles.variation, item.variationWeek >= 0 ? styles.positive : styles.negative]}>
                            {item.variationWeek >= 0 ? '▲' : '▼'} {Math.abs(item.variationWeek).toFixed(2)}%
                        </Text>
                    </View>
                </View>
            </VibrancyView>
        </TouchableOpacity>
    )
}

const styles = StyleSheet.create({
    cardContainer: {
        marginBottom: 16,
    },
    card: {
        backgroundColor: 'rgba(255,255,255,0.85)',
        borderRadius: 20,
        padding: 16,
        shadowColor: '#000',
        shadowOpacity: 0.08,
        shadowRadius: 12,
        shadowOffset: { width: 0, height: 4 },
        elevation: 6,
    },
    header: {
        flexDirection: 'row',
        alignItems: 'center',
        marginBottom: 12,
    },
    icon: {
        width: 48,
        height: 48,
        borderRadius: 24,
        backgroundColor: '#F1F5F9',
        marginRight: 12,
    },
    headerInfo: {
        flex: 1,
    },
    name: {
        fontSize: 18,
        fontWeight: '600',
        color: '#22223B',
    },
    symbol: {
        fontSize: 14,
        color: '#4F8EF7',
        fontWeight: '500',
        marginTop: 2,
    },
    priceContainer: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        borderTopWidth: 1,
        borderTopColor: 'rgba(0,0,0,0.05)',
        paddingTop: 12,
    },
    price: {
        fontSize: 18,
        fontWeight: '600',
        color: '#10B981',
    },
    variationsContainer: {
        flexDirection: 'row',
        gap: 12,
    },
    variation: {
        fontSize: 14,
        fontWeight: '600',
    },
    positive: {
        color: '#10B981',
    },
    negative: {
        color: '#EF4444',
    },
})

export default CardCoin 