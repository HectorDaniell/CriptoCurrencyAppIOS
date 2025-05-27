import React, { useEffect, useState } from 'react';
import { View, Text, StyleSheet, FlatList, SafeAreaView, StatusBar, Image } from 'react-native';
import { getCoinPerformance } from '../../services/api/criptoService';
import SectionList from '../../components/sectionList';

const CriptoPerformance = () => {
    const [performance, setPerformance] = useState<any>({ better: [], worse: [] });

    useEffect(() => {
        getCoinPerformance().then(setPerformance);
    }, []);

    return (
        <SafeAreaView style={styles.safeArea}>
            <StatusBar barStyle="dark-content" backgroundColor="#fff" />
            <Text style={styles.title}>📊 Rendimiento de Criptomonedas</Text>
            <SectionList title="🚀 Mejor rendimiento" data={performance.better} positive />
            <SectionList title="🔻 Peor rendimiento" data={performance.worse} positive={false} />
            <SectionList title="🔄 Monedas Recientes" data={performance.recently} positive={false} />
        </SafeAreaView>
    );
};

const styles = StyleSheet.create({
    safeArea: {
        flex: 1,
        backgroundColor: '#fff',
        paddingHorizontal: 8,
    },
    title: {
        fontSize: 24,
        fontWeight: '700',
        color: '#22223B',
        marginTop: 16,
        marginBottom: 18,
        textAlign: 'center',
    },

});

export default CriptoPerformance;