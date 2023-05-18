import { Image, StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import CustomColor from '../styles/Colors';
import globalStyles from '../styles/globalStyles';

export default CourseCard = ({ item, navigation }) => {
    return (
        <TouchableOpacity
            onPress={() => navigation.navigate('Course Details', { item })}
        >
            <View style={styles.container}>
                <Image
                    source={require('../assets/react-js.jpg')}
                    style={styles.image}
                />
                <Text style={[styles.title, globalStyles.smallTitle]}>
                    {item.title}
                </Text>
            </View>
        </TouchableOpacity>
    );
};

const styles = StyleSheet.create({
    container: {
        shadowColor: '#000',
        elevation: 10,
        backgroundColor: 'white',
        marginTop: 10,
        marginHorizontal: 10,
        borderWidth: 2,
        borderColor: CustomColor.lightGrey,
        padding: 10,
    },
    image: {
        width: 300,
        height: 200,
    },
    title: {
        padding: 10,
    },
});
