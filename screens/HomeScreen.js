import { FlatList, StyleSheet, Text, View } from 'react-native';
import courseData from '../courseData';

import StartContainer from '../components/StartContainer';
import CourseCard from '../components/CourseCard';

const HomeScreen = ({ navigation }) => {
    return (
        <View style={styles.start}>
            <View>
                <StartContainer />
            </View>
            <View style={styles.list}>
                <FlatList
                    data={courseData}
                    renderItem={({ item }) => (
                        <CourseCard item={item} navigation={navigation} />
                    )}
                />
            </View>
        </View>
    );
};

const styles = StyleSheet.create({
    start: {
        flex: 1,
    },
    list: {
        flex: 1,
        alignItems: 'center',
    },
});
export default HomeScreen;
