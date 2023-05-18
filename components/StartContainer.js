import { Image, StyleSheet, View, Text } from 'react-native';
import CustomColor from '../styles/Colors';

export default StartContainer = () => {
    return (
        <View style={styles.container}>
            <View>
                <Image
                    source={require('../assets/firstPhoto.jpeg')}
                    style={styles.image}
                />
            </View>
            <Text style={styles.text}>What do you want to learn today?</Text>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        alignItems: 'center',
        marginTop: 10,
        borderBottomWidth: 2,
        borderBottomColor: CustomColor.lightGrey,
    },
    image: {
        width: 400,
        height: 200,
    },
    text: {
        fontSize: 22,
        color: CustomColor.darkGrey,
        margin: 10,
    },
});
