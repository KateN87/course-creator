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
        height: 200,
    },
    image: {
        width: 400,
        height: 150,
    },
    text: {
        fontSize: 20,
        color: CustomColor.darkGrey,
        margin: 5,
    },
});
