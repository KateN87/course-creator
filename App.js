import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { NavigationContainer } from '@react-navigation/native';
import { Pressable, Text, StyleSheet } from 'react-native';

import HomeScreen from './screens/HomeScreen';

import CustomColor from './styles/Colors';
import { useState } from 'react';

import { CourseContextProvider } from './context/CourseContext';
import DrawerNavigation from './routes/DrawerNavigation';

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
                        options={() => ({
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
