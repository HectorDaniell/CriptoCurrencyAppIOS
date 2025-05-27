import { View, Text, Image, FlatList, StyleSheet, TouchableOpacity } from 'react-native'
import { VibrancyView } from '@react-native-community/blur';
import CardCoinPerform from '../cardCoinPerform';
import { useNavigation } from '@react-navigation/native';

const SectionList = ({ title, data, positive }: { title: string, data: any[], positive: boolean }) => {
    const navigation = useNavigation<any>()
    return (
        <View style={styles.section}>
            <Text style={styles.sectionTitle}>{title}</Text>
            <FlatList
                data={data}
                horizontal
                showsHorizontalScrollIndicator={false}
                keyExtractor={item => item.symbol}
                contentContainerStyle={styles.horizontalList}
                renderItem={({ item }) => (
                    <TouchableOpacity key={item.symbol} onPress={() => {
                        navigation.navigate('CoinDetail', { symbol: item.symbol })
                    }}>
                        <VibrancyView style={styles.card} blurType='light' blurAmount={18} reducedTransparencyFallbackColor="rgba(255,255,255,0.7)">
                            <CardCoinPerform icon={item.icon} name={item.name} symbol={item.symbol} price={parseFloat(item.today)} variation={item.variation} positive={positive} />
                        </VibrancyView>
                    </TouchableOpacity>
                )}
            />
        </View>
    )
}

const styles = StyleSheet.create({
    section: {
        marginBottom: 18,
        paddingHorizontal: 16,
    },
    sectionTitle: {
        fontSize: 18,
        fontWeight: '700',
        color: '#4F8EF7',
        marginBottom: 8,
        marginLeft: 8,
    },
    horizontalList: {
        paddingLeft: 4,
        paddingRight: 4,
    },
    card: {
        backgroundColor: 'rgba(255,255,255,0.85)',
        borderWidth: 2,
        borderColor: '#E2E8F0',
        borderRadius: 18,
        padding: 16,
        marginRight: 12,
        width: 150,
        alignItems: 'center',
        shadowColor: '#000',
        shadowOpacity: 0.06,
        shadowRadius: 8,
        shadowOffset: { width: 0, height: 2 },
        elevation: 3,
    },

})
export default SectionList  