import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { NavigationContainer, useNavigation } from '@react-navigation/native';
import { Pressable, Text, StyleSheet } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import { useState } from 'react';

import HomeScreen from './screens/HomeScreen';
import CustomColor from './styles/Colors';
import { CourseContextProvider } from './context/CourseContext';
import DrawerNavigation from './routes/DrawerNavigation';
import AddCourseScreen from './screens/AddCourseScreen';

const Stack = createNativeStackNavigator();

export default function App() {
    const [modalVisible, setModalVisible] = useState(false);

    const headerStyle = {
        headerTitleAlign: 'center',
        headerTintColor: CustomColor.accentPurple,
        headerTitleStyle: {
            fontSize: 30,
            fontWeight: 'bold',
        },
    };

    return (
        <CourseContextProvider>
            <NavigationContainer>
                <Stack.Navigator initialRouteName='All Courses'>
                    <Stack.Screen
                        name='Drawer'
                        component={DrawerNavigation}
                        options={headerStyle}
                    />
                    <Stack.Screen
                        name='All Courses'
                        options={({ navigation }) => ({
                            ...headerStyle,
                            headerRight: () => (
                                <Pressable
                                    onPress={() => setModalVisible(true)}
                                >
                                    <Text style={styles.filterText}>
                                        Filter
                                    </Text>
                                </Pressable>
                            ),
                            headerLeft: () => (
                                <Pressable
                                    onPress={() =>
                                        navigation.navigate('AddCourse')
                                    }
                                >
                                    <Ionicons
                                        name='md-add-circle-outline'
                                        size={26}
                                        color={CustomColor.accentPurple}
                                    />
                                </Pressable>
                            ),
                        })}
                    >
                        {(props) => (
                            <HomeScreen
                                {...props}
                                modalVisible={modalVisible}
                                setModalVisible={setModalVisible}
                            />
                        )}
                    </Stack.Screen>
                    <Stack.Screen
                        name='AddCourse'
                        component={AddCourseScreen}
                        options={{
                            ...headerStyle,
                            title: 'Add Course',
                        }}
                    />
                </Stack.Navigator>
            </NavigationContainer>
        </CourseContextProvider>
    );
}

const styles = StyleSheet.create({
    filterText: {
        fontSize: 20,
        fontWeight: 'bold',
        color: CustomColor.accentPurple,
    },
});
