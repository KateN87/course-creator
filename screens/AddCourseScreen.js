import {
    StyleSheet,
    Text,
    View,
    ScrollView,
    Alert,
    TouchableOpacity,
} from 'react-native';
import { useForm } from 'react-hook-form';
import { useNavigation } from '@react-navigation/native';
import { useContext, useState } from 'react';

import CustomInput from '../components/CustomInput';
import globalStyles from '../styles/globalStyles';
import { CourseContext } from '../context/CourseContext';
import CustomColor from '../styles/Colors';

export default AddCourseScreen = () => {
    const navigation = useNavigation();
    const [done, setDone] = useState(false);
    const [mainCourse, setMainCourse] = useState();
    const [parts, setParts] = useState([]);
    const [error, setError] = useState('');

    const { allCourses, addCourse } = useContext(CourseContext);

    const { control, handleSubmit, reset } = useForm();

    const saveCourseHandler = () => {
        const newCourse = {
            ...mainCourse,
            parts,
        };
        addCourse(newCourse);
        navigation.navigate('All Courses');
    };

    const saveMainHandler = (data) => {
        const { cTitle, cList1, cList2, cList3, image, tagArr, description } =
            data;
        if (
            !cTitle ||
            !cList1 ||
            !cList2 ||
            !cList3 ||
            !image ||
            !tagArr ||
            !description
        ) {
            return setError('All fields must be filled');
        }
        const contentArr = [cList1, cList2, cList3];
        const tags = tagArr.split(', ').map((str) => str.trim().toLowerCase());
        const newCourse = {
            key: allCourses.length + 1,
            title: cTitle,
            contentList: contentArr,
            imageURL: image,
            tags,
            description,
        };

        setMainCourse(newCourse);
        setError('');
        setDone(true);
    };

    const savePartHandler = (data) => {
        let { pTitle, pContentlist1, pContentlist2, pContentlist3, video } =
            data;
        if (
            !pTitle ||
            !pContentlist1 ||
            !pContentlist2 ||
            !pContentlist3 ||
            !video
        ) {
            return setError('All fields must be filled');
        }

        const contentArr = [pContentlist1, pContentlist2, pContentlist3];
        const newPart = {
            id: parts.length + 1,
            title: pTitle,
            contentList: contentArr,
            videoURL: video,
            done: false,
        };

        setParts((prev) => [...prev, newPart]);

        Alert.alert('Saved!', 'The part has been added to the new course', [
            {
                text: 'OK',
                style: 'cancel',
            },
        ]);
        reset();
    };

    return (
        <ScrollView>
            {!done && (
                <View style={styles.formContainer}>
                    <View style={styles.innerContainer}>
                        <Text style={globalStyles.smallTitle}>
                            Course Title
                        </Text>
                        <CustomInput
                            name='cTitle'
                            placeholder='Course Title'
                            control={control}
                            reset={reset}
                            multiline={false}
                        />
                    </View>
                    <View style={styles.innerContainer}>
                        <Text style={globalStyles.smallTitle}>Content</Text>
                        <CustomInput
                            name='cList1'
                            placeholder='Content List'
                            control={control}
                            multiline={false}
                        />
                    </View>
                    <View style={styles.innerContainer}>
                        <CustomInput
                            name='cList2'
                            placeholder='Content List'
                            control={control}
                            multiline={false}
                        />
                    </View>
                    <View style={styles.innerContainer}>
                        <CustomInput
                            name='cList3'
                            placeholder='Content List'
                            control={control}
                            multiline={false}
                        />
                    </View>
                    <View style={styles.innerContainer}>
                        <Text style={globalStyles.smallTitle}>Image URL</Text>
                        <CustomInput
                            name='image'
                            placeholder='Image URL'
                            control={control}
                        />
                    </View>
                    <View style={styles.innerContainer}>
                        <Text style={globalStyles.smallTitle}>Tag</Text>
                        <CustomInput
                            name='tagArr'
                            placeholder='Tags'
                            control={control}
                        />
                    </View>
                    <View style={styles.innerContainer}>
                        <Text style={globalStyles.smallTitle}>Description</Text>
                        <CustomInput
                            name='description'
                            placeholder='Description'
                            control={control}
                            multiline={true}
                        />
                    </View>
                    {error && (
                        <View style={styles.errorContainer}>
                            <Text style={styles.errorText}>{error}</Text>
                        </View>
                    )}
                    <TouchableOpacity
                        onPress={handleSubmit(saveMainHandler)}
                        style={globalStyles.buttonContainer}
                    >
                        <Text style={globalStyles.buttonText}>Next</Text>
                    </TouchableOpacity>
                </View>
            )}
            {done && (
                <View style={styles.formContainer}>
                    <Text style={globalStyles.smallTitle}>Parts</Text>
                    <View style={styles.innerContainer}>
                        <Text style={globalStyles.smallTitle}>Part title</Text>
                        <CustomInput
                            name='pTitle'
                            placeholder='Part Title'
                            control={control}
                        />
                    </View>
                    <View style={styles.innerContainer}>
                        <Text style={globalStyles.smallTitle}>
                            Part Content List
                        </Text>
                        <CustomInput
                            name='pContentlist1'
                            placeholder='Part ContentList'
                            control={control}
                        />
                    </View>
                    <View style={styles.innerContainer}>
                        <CustomInput
                            name='pContentlist2'
                            placeholder='Part ContentList'
                            control={control}
                        />
                    </View>
                    <View style={styles.innerContainer}>
                        <CustomInput
                            name='pContentlist3'
                            placeholder='Part ContentList'
                            control={control}
                        />
                    </View>
                    <View style={styles.innerContainer}>
                        <Text style={globalStyles.smallTitle}>Video URL</Text>
                        <CustomInput
                            name='video'
                            placeholder='Video URL'
                            control={control}
                        />
                    </View>
                    {error && (
                        <View style={styles.errorContainer}>
                            <Text style={styles.errorText}>{error}</Text>
                        </View>
                    )}
                    <TouchableOpacity
                        onPress={handleSubmit(savePartHandler)}
                        style={globalStyles.buttonContainer}
                    >
                        <Text
                            style={[globalStyles.buttonText, styles.buttonText]}
                        >
                            Add part
                        </Text>
                    </TouchableOpacity>
                    <View style={styles.buttonContainer}>
                        <TouchableOpacity
                            onPress={handleSubmit(saveCourseHandler)}
                            style={globalStyles.buttonContainer}
                        >
                            <Text
                                style={[
                                    globalStyles.buttonText,
                                    styles.buttonText,
                                ]}
                            >
                                Add course
                            </Text>
                        </TouchableOpacity>
                        <TouchableOpacity
                            onPress={() => setDone(false)}
                            style={globalStyles.buttonContainer}
                        >
                            <Text
                                style={[
                                    globalStyles.buttonText,
                                    styles.buttonText,
                                ]}
                            >
                                Go back
                            </Text>
                        </TouchableOpacity>
                    </View>
                </View>
            )}
        </ScrollView>
    );
};

const styles = StyleSheet.create({
    formContainer: {
        flex: 1,
        padding: 20,
        alignItems: 'center',
    },
    buttonText: {
        fontSize: 20,
    },
    buttonContainer: {
        flexDirection: 'row',
    },
    errorContainer: {
        borderWidth: 2,
        borderRadius: 5,
        borderColor: CustomColor.error200,
        backgroundColor: CustomColor.error100,
        padding: 15,
        marginTop: 10,
    },
    errorText: {
        color: CustomColor.error200,
    },
});
