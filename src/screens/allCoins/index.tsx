import { View, Text, StyleSheet, FlatList, SafeAreaView, StatusBar } from 'react-native'
import React, { useEffect, useState } from 'react'
import { getAllCoins } from '../../services/api/criptoService'
import LinearGradient from 'react-native-linear-gradient'
import CardCoin from '../../components/cardCoin'

const AllCoinsScreen = () => {
    const [coins, setCoins] = useState<any[]>([])

    useEffect(() => {
        getAllCoins().then(setCoins)
    }, [])

    return (
        <SafeAreaView style={styles.safeArea}>
            <StatusBar barStyle="dark-content" backgroundColor="#fff" />
            <LinearGradient
                colors={['#F8FAFC', '#E2E8F0']}
                style={styles.gradient}
                start={{x: 0, y: 0}}
                end={{x: 0, y: 1}}
            >
                <View style={styles.header}>
                    <Text style={styles.title}>Todas las Criptomonedas</Text>
                </View>
                <FlatList
                    data={coins}
                    renderItem={({ item }) => <CardCoin item={item} />}
                    keyExtractor={item => item.symbol}
                    contentContainerStyle={styles.listContainer}
                    showsVerticalScrollIndicator={false}
                />
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
    header: {
        padding: 20,
        paddingBottom: 10,
    },
    title: {
        fontSize: 28,
        fontWeight: '700',
        color: '#22223B',
    },
    listContainer: {
        padding: 20,
        paddingTop: 10,
    },
})

export default AllCoinsScreen