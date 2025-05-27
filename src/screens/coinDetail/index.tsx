import { View, Text, StyleSheet, Image, ScrollView, SafeAreaView, StatusBar, Dimensions } from 'react-native'
import React, { useEffect, useState } from 'react'
import { useRoute } from '@react-navigation/native'
import { getCoinDetail } from '../../services/api/criptoService'
import { VibrancyView } from '@react-native-community/blur'
import LinearGradient from 'react-native-linear-gradient'
import Feather from 'react-native-vector-icons/Feather'

const formatNumber = (num: number) => {
    if (!num && num !== 0) return '-';
    return num.toLocaleString('en-US', { maximumFractionDigits: 0 });
};

const { width } = Dimensions.get('window');

const CoinDetailScreen = () => {
    const route = useRoute()
    const { symbol } = route.params as { symbol: string }
    const [coin, setCoin] = useState<any>(null)

    useEffect(() => {
        getCoinDetail(symbol).then(setCoin)
    }, [symbol])

    if (!coin) {
        return (
            <SafeAreaView style={styles.safeArea}>
                <StatusBar barStyle="dark-content" backgroundColor="#fff" />
                <Text style={styles.loading}>Cargando...</Text>
            </SafeAreaView>
        )
    }

  return (
        <SafeAreaView style={styles.safeArea}>
            <StatusBar barStyle="dark-content" backgroundColor="#fff" />
            <LinearGradient
                colors={['#F8FAFC', '#E2E8F0']}
                style={styles.gradient}
                start={{x: 0, y: 0}}
                end={{x: 0, y: 1}}
            >
                <ScrollView contentContainerStyle={styles.scrollContent} showsVerticalScrollIndicator={false}>
                    <VibrancyView style={styles.card} blurType='light' blurAmount={18} reducedTransparencyFallbackColor="rgba(255,255,255,0.7)">
                        <View style={styles.header}>
                            <Image source={{ uri: coin.icon?.replace('.svg', '.png') }} style={styles.icon} />
                            <View style={styles.headerInfo}>
                                <Text style={styles.name}>{coin.name}</Text>
                                <Text style={styles.symbol}>({coin.symbol})</Text>
                            </View>
                        </View>
                        <View style={styles.priceContainer}>
                            <Text style={styles.priceLabel}>Precio Actual</Text>
                            <View style={styles.priceRow}>
                                <Text style={styles.price}>${parseFloat(coin.price).toLocaleString('en-US', { maximumFractionDigits: 4 })}</Text>
                                {coin.variation !== undefined && (
                                    <Text style={[styles.variation, coin.variation >= 0 ? styles.positive : styles.negative]}>
                                        {coin.variation >= 0 ? '▲' : '▼'} {Math.abs(coin.variation).toFixed(2)}%
                                    </Text>
                                )}
                            </View>
                        </View>
                    </VibrancyView>

                    <View style={styles.statsContainer}>
                        <Text style={styles.sectionTitle}>Estadísticas</Text>
                        <View style={styles.infoGrid}>
                            <View style={styles.infoRow}>
                                <View style={styles.infoLabelContainer}>
                                    <Feather name="tag" size={16} color="#64748B" style={styles.infoIcon} />
                                    <Text style={styles.infoLabel}>Alias</Text>
                                </View>
                                <Text style={styles.infoValue}>{coin.alias || '-'}</Text>
                            </View>
                            <View style={styles.infoRow}>
                                <View style={styles.infoLabelContainer}>
                                    <Feather name="trending-up" size={16} color="#64748B" style={styles.infoIcon} />
                                    <Text style={styles.infoLabel}>Market Cap</Text>
                                </View>
                                <Text style={styles.infoValue}>${formatNumber(coin.marketCap)}</Text>
                            </View>
                            <View style={styles.infoRow}>
                                <View style={styles.infoLabelContainer}>
                                    <Feather name="bar-chart-2" size={16} color="#64748B" style={styles.infoIcon} />
                                    <Text style={styles.infoLabel}>Volumen 24h</Text>
                                </View>
                                <Text style={styles.infoValue}>${formatNumber(coin.totalVolume)}</Text>
                            </View>
                            <View style={styles.infoRow}>
                                <View style={styles.infoLabelContainer}>
                                    <Feather name="trending-up" size={16} color="#64748B" style={styles.infoIcon} />
                                    <Text style={styles.infoLabel}>Market Cap Dil.</Text>
                                </View>
                                <Text style={styles.infoValue}>${formatNumber(coin.fullyDilutedMarketCap)}</Text>
                            </View>
                            <View style={styles.infoRow}>
                                <View style={styles.infoLabelContainer}>
                                    <Feather name="maximize" size={16} color="#64748B" style={styles.infoIcon} />
                                    <Text style={styles.infoLabel}>Max Supply</Text>
                                </View>
                                <Text style={styles.infoValue}>{formatNumber(coin.maxSupply)}</Text>
                            </View>
                            <View style={styles.infoRow}>
                                <View style={styles.infoLabelContainer}>
                                    <Feather name="database" size={16} color="#64748B" style={styles.infoIcon} />
                                    <Text style={styles.infoLabel}>Total Supply</Text>
                                </View>
                                <Text style={styles.infoValue}>{formatNumber(coin.totalSupply)}</Text>
                            </View>
                        </View>
    </View>

                    {coin.description && (
                        <VibrancyView style={styles.descriptionCard} blurType='light' blurAmount={12} reducedTransparencyFallbackColor="rgba(255,255,255,0.7)">
                            <Text style={styles.descriptionTitle}>Descripción</Text>
                            <Text style={styles.description}>{coin.description}</Text>
                        </VibrancyView>
                    )}
                </ScrollView>
            </LinearGradient>
        </SafeAreaView>
    )
}

const styles = StyleSheet.create({
    safeArea: {
        flex: 1,
        backgroundColor: '#fff',
    },
    gradient: {
        flex: 1,
    },
    scrollContent: {
        padding: 20,
        paddingBottom: 40,
    },
    loading: {
        fontSize: 18,
        color: '#64748B',
        textAlign: 'center',
        marginTop: 40,
    },
    card: {
        width: '100%',
        backgroundColor: 'rgba(255,255,255,0.85)',
        borderRadius: 24,
        padding: 24,
        marginBottom: 24,
        shadowColor: '#000',
        shadowOpacity: 0.08,
        shadowRadius: 12,
        shadowOffset: { width: 0, height: 4 },
        elevation: 6,
        overflow: 'hidden',
    },
    header: {
        flexDirection: 'row',
        alignItems: 'center',
        marginBottom: 24,
    },
    icon: {
        width: 64,
        height: 64,
        borderRadius: 32,
        backgroundColor: '#F1F5F9',
        marginRight: 18,
    },
    headerInfo: {
        flex: 1,
    },
    name: {
        fontSize: 28,
        fontWeight: '700',
        color: '#22223B',
    },
    symbol: {
        fontSize: 18,
        color: '#4F8EF7',
        fontWeight: '600',
        marginTop: 4,
    },
    priceContainer: {
        alignItems: 'center',
        paddingVertical: 16,
        borderTopWidth: 1,
        borderTopColor: 'rgba(0,0,0,0.05)',
    },
    priceLabel: {
        fontSize: 16,
        color: '#64748B',
        marginBottom: 8,
    },
    priceRow: {
        flexDirection: 'row',
        alignItems: 'center',
        gap: 12,
    },
    price: {
        fontSize: 32,
        fontWeight: 'bold',
        color: '#10B981',
    },
    variation: {
        fontSize: 20,
        fontWeight: 'bold',
    },
    positive: {
        color: '#10B981',
    },
    negative: {
        color: '#EF4444',
    },
    statsContainer: {
        width: '100%',
        marginBottom: 24,
    },
    sectionTitle: {
        fontSize: 20,
        fontWeight: '700',
        color: '#22223B',
        marginBottom: 16,
        marginLeft: 4,
    },
    infoGrid: {
        backgroundColor: 'rgba(255,255,255,0.9)',
        borderRadius: 20,
        padding: 20,
        shadowColor: '#000',
        shadowOpacity: 0.06,
        shadowRadius: 8,
        shadowOffset: { width: 0, height: 2 },
        elevation: 3,
    },
    infoRow: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        marginBottom: 16,
        paddingBottom: 16,
        borderBottomWidth: 1,
        borderBottomColor: 'rgba(0,0,0,0.05)',
    },
    infoLabelContainer: {
        flexDirection: 'row',
        alignItems: 'center',
    },
    infoIcon: {
        marginRight: 8,
    },
    infoLabel: {
        fontSize: 16,
        color: '#64748B',
        fontWeight: '500',
    },
    infoValue: {
        fontSize: 16,
        color: '#22223B',
        fontWeight: '600',
    },
    descriptionCard: {
        width: '100%',
        backgroundColor: 'rgba(255,255,255,0.9)',
        borderRadius: 20,
        padding: 20,
        shadowColor: '#000',
        shadowOpacity: 0.06,
        shadowRadius: 8,
        shadowOffset: { width: 0, height: 2 },
        elevation: 3,
    },
    descriptionTitle: {
        fontSize: 20,
        fontWeight: '700',
        color: '#22223B',
        marginBottom: 12,
    },
    description: {
        fontSize: 15,
        color: '#22223B',
        lineHeight: 22,
    },
})

export default CoinDetailScreen