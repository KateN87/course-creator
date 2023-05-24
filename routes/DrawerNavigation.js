import { useLayoutEffect } from 'react';
import { useNavigation, useRoute } from '@react-navigation/native';
import { Dimensions, FlatList, View } from 'react-native';
import { createDrawerNavigator } from '@react-navigation/drawer';

import CourseDetailsScreen from '../screens/CourseDetailsScreen';
import PartsContainer from '../components/PartsContainer';

const Drawer = createDrawerNavigator();

const DrawerItems = ({ item }) => {
    const courseId = item.key;
    return (
        <View>
            {item.parts.map((i) => (
                <PartsContainer partId={i.id} courseId={courseId} key={i.id} />
            ))}
        </View>
    );
};

export default DrawerNavigation = () => {
    const route = useRoute();
    const navigation = useNavigation();
    const { item } = route.params.params;

    useLayoutEffect(() => {
        navigation.setOptions({ title: 'Course Details' });
    }, []);

    return (
        <Drawer.Navigator
            drawerContent={(props) => <DrawerItems {...props} item={item} />}
            screenOptions={{
                drawerStyle: {
                    width: Dimensions.get('screen').width,
                },
                headerShown: false,
            }}
        >
            <Drawer.Screen
                name='Course Details'
                component={CourseDetailsScreen}
            />
        </Drawer.Navigator>
    );
};
