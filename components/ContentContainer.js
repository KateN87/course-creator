import { Text, View, Image, StyleSheet } from 'react-native';
import { Entypo } from '@expo/vector-icons';
import CustomColor from '../styles/Colors';

export default ContentContainer = ({ content }) => {
    return (
        <View style={styles.contentContainer}>
            <Entypo name='check' size={24} color={CustomColor.accentPurple} />
            <Text style={styles.text}>{content}</Text>
        </View>
    );
};

const styles = StyleSheet.create({
    contentContainer: {
        flexDirection: 'row',
        marginVertical: 15,
    },
    text: {
        fontSize: 18,
        color: '#3b3b3b',
        marginHorizontal: 10,
    },
});
