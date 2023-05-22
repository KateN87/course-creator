import { FlatList, StyleSheet, View } from 'react-native';

import StartContainer from '../components/StartContainer';
import CourseCard from '../components/CourseCard';
import { useRoute } from '@react-navigation/native';
import { useEffect } from 'react';

const HomeScreen = ({ courses }) => {
    return (
        <View style={styles.start}>
            <View>
                <StartContainer />
            </View>
            <View style={styles.list}>
                <FlatList
                    data={courses}
                    renderItem={({ item }) => <CourseCard item={item} />}
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
