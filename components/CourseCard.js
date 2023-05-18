import { Image, StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import CustomColor from '../styles/Colors';
import globalStyles from '../styles/globalStyles';

export default CourseCard = ({ item, navigation }) => {
    return (
        <TouchableOpacity
            onPress={() => navigation.navigate('Course Details', { item })}
        >
            <View style={globalStyles.container}>
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
    image: {
        width: 300,
        height: 200,
    },
    title: {
        padding: 10,
    },
});
