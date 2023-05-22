import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { NavigationContainer } from '@react-navigation/native';
import { Pressable, Text } from 'react-native';

import HomeScreen from './screens/HomeScreen';
import CourseDetailsScreen from './screens/CourseDetailsScreen';
import CoursePartsScreen from './screens/CoursePartsScreen';
import FilterComponent from './components/FilterComponent';
import CustomColor from './styles/Colors';
import courseData from './courseData';
import { useEffect, useState } from 'react';

const Stack = createNativeStackNavigator();

export default function App() {
    const [courses, setCourses] = useState([]);
    const [modalVisible, setModalVisible] = useState(false);
    const [selectedCourses, setSelectedCourses] = useState([]);
    const pressHandler = () => {
        setModalVisible(false);
    };

    useEffect(() => {
        let filteredCourses = [];
        if (selectedCourses.length === 0) {
            filteredCourses = courseData;
        } else {
            filteredCourses = courseData.filter((course) =>
                course.tags.some((tag) => selectedCourses.includes(tag))
            );
        }
        setCourses(filteredCourses);
    }, [selectedCourses]);

    const headerStyle = {
        headerTitleAlign: 'center',
        headerTintColor: CustomColor.accentPurple,
        headerTitleStyle: {
            fontSize: 30,
            fontWeight: 'bold',
        },
    };

    return (
        <NavigationContainer>
            <FilterComponent
                pressHandler={pressHandler}
                modalVisible={modalVisible}
                setCourses={setCourses}
                selectedCourses={selectedCourses}
                setSelectedCourses={setSelectedCourses}
            />
            <Stack.Navigator initialRouteName='All Courses'>
                <Stack.Screen
                    name='All Courses'
                    options={() => ({
                        ...headerStyle,
                        headerRight: () => (
                            <Pressable onPress={() => setModalVisible(true)}>
                                <Text>Filter</Text>
                            </Pressable>
                        ),
                    })}
                >
                    {(props) => <HomeScreen {...props} courses={courses} />}
                </Stack.Screen>
                <Stack.Screen
                    name='Course Details'
                    component={CourseDetailsScreen}
                    options={headerStyle}
                />
                <Stack.Screen
                    name='Course Parts'
                    component={CoursePartsScreen}
                    options={headerStyle}
                />
            </Stack.Navigator>
        </NavigationContainer>
    );
}
