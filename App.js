import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { NavigationContainer } from '@react-navigation/native';
import { Pressable, Text } from 'react-native';

import HomeScreen from './screens/HomeScreen';
import CourseDetailsScreen from './screens/CourseDetailsScreen';
import CoursePartsScreen from './screens/CoursePartsScreen';
import CustomColor from './styles/Colors';
import { CourseProvider } from './context/CourseContext';

const Stack = createNativeStackNavigator();

export default function App() {
    const headerStyle = {
        headerTitleAlign: 'center',
        headerTintColor: CustomColor.accentPurple,
        headerTitleStyle: {
            fontSize: 30,
            fontWeight: 'bold',
        },
        headerRight: () => (
            <Pressable onPress={() => alert('Choose filters!')}>
                <Text>Filter</Text>
            </Pressable>
        ),
    };
    return (
        <CourseProvider>
            <NavigationContainer>
                <Stack.Navigator initialRouteName='All Courses'>
                    <Stack.Screen
                        name='All Courses'
                        component={HomeScreen}
                        options={headerStyle}
                    />
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
        </CourseProvider>
    );
}
