import { Dimensions, FlatList, StyleSheet, View } from 'react-native';
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
    }, [selectedCourses, allCourses]);
    return (
        <View style={styles.mainContainer}>
            <FilterComponent
                pressHandler={pressHandler}
                modalVisible={modalVisible}
                setCourses={setCourses}
                selectedCourses={selectedCourses}
                setSelectedCourses={setSelectedCourses}
            />
            <View style={styles.testar}>
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
        </View>
    );
};
const styles = StyleSheet.create({
    mainContainer: {
        flex: 1,
    },
    testar: {
        flex: 1,
    },
    list: {
        flex: 1,
    },
});
export default HomeScreen;
