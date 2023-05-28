import { Image, StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import globalStyles from '../styles/globalStyles';
import { useNavigation } from '@react-navigation/native';

export default CourseCard = ({ item }) => {
    const navigation = useNavigation();

    return (
        <TouchableOpacity
            onPress={() =>
                navigation.navigate('Drawer', {
                    screen: 'Course Details',
                    title: 'Course Details',
                    params: { item },
                })
            }
        >
            <View style={globalStyles.container}>
                <Image source={{ uri: item.imageURL }} style={styles.image} />
                <Text style={[styles.title, globalStyles.smallTitle]}>
                    {item.title}
                </Text>
            </View>
        </TouchableOpacity>
    );
};

const styles = StyleSheet.create({
    image: {
        width: '100%',
        height: 200,
    },
    title: {
        padding: 10,
    },
});
