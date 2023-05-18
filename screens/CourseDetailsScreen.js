import CourseDetailsComp from '../components/CourseDetailsComp';
export default CourseDetailsScreen = ({ route }) => {
    return (
        <CourseDetailsComp route={route} />
        /*         <Drawer.Navigator>
            <Drawer.Screen
                name='Overview'
                component={<CourseDetailsComp route={route} />}
            />
        </Drawer.Navigator> */
    );
};
