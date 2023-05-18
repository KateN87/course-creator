import { Text, View, Image, StyleSheet } from 'react-native';
import { Entypo } from '@expo/vector-icons';

import CustomColor from '../styles/Colors';
import globalStyles from '../styles/globalStyles';

export default ContentContainer = ({ content }) => {
    return (
        <View style={globalStyles.contentContainer}>
            <Entypo name='check' size={24} color={CustomColor.accentPurple} />
            <Text style={globalStyles.checkText}>{content}</Text>
        </View>
    );
};

const styles = StyleSheet.create({});
