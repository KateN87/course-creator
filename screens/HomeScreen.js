import { FlatList, StyleSheet, View } from 'react-native';
import { useContext, useState, useLayoutEffect } from 'react';

import StartContainer from '../components/StartContainer';
import CourseCard from '../components/CourseCard';
import { CourseContext } from '../context/CourseContext';
import FilterComponent from '../components/FilterComponent';

const HomeScreen = ({ modalVisible, setModalVisible }) => {
    const { allCourses } = useContext(CourseContext);

    const [courses, setCourses] = useState([]);

    const [selectedCourses, setSelectedCourses] = useState([]);
    const pressHandler = () => {
        setModalVisible(false);
    };

    useLayoutEffect(() => {
        let filteredCourses = [];
        if (selectedCourses.length === 0) {
            filteredCourses = allCourses;
        } else {
            filteredCourses = allCourses.filter((course) =>
                course.tags.some((tag) => selectedCourses.includes(tag))
            );
        }
        setCourses(filteredCourses);
    }, [selectedCourses]);
    return (
        <>
            <FilterComponent
                pressHandler={pressHandler}
                modalVisible={modalVisible}
                setCourses={setCourses}
                selectedCourses={selectedCourses}
                setSelectedCourses={setSelectedCourses}
            />
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
        </>
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
