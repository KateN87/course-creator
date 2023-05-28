import {
    Modal,
    Text,
    Pressable,
    FlatList,
    StyleSheet,
    View,
    TouchableOpacity,
} from 'react-native';
import { useContext } from 'react';

import CustomColor from '../styles/Colors';
import { CourseContext } from '../context/CourseContext';
import globalStyles from '../styles/globalStyles';

export default FilterComponent = ({
    pressHandler,
    modalVisible,
    setSelectedCourses,
    selectedCourses,
}) => {
    const { tags } = useContext(CourseContext);

    const MyCheckbox = ({ item }) => {
        const checked = selectedCourses.includes(item);

        const checkHandler = () => {
            if (checked) {
                setSelectedCourses((prev) => prev.filter((c) => c !== item));
            } else {
                setSelectedCourses((prev) => [...prev, item]);
            }
        };

        return (
            <View style={styles.filterContainer}>
                <Pressable
                    style={[
                        styles.checkboxBase,
                        checked && styles.checkboxChecked,
                    ]}
                    onPress={checkHandler}
                ></Pressable>
                <Text style={[globalStyles.smallTitle, styles.text]}>
                    {item}
                </Text>
            </View>
        );
    };

    return (
        <Modal visible={modalVisible}>
            <Text style={[globalStyles.mediumTitle, styles.text]}>
                Choose Filters
            </Text>
            <FlatList
                data={tags}
                renderItem={({ item }) => <MyCheckbox item={item} />}
            />
            <TouchableOpacity
                onPress={pressHandler}
                style={globalStyles.buttonContainer}
            >
                <Text style={[globalStyles.buttonText, styles.buttonText]}>
                    APPLY
                </Text>
            </TouchableOpacity>
        </Modal>
    );
};

const styles = StyleSheet.create({
    checkboxBase: {
        width: 30,
        height: 30,
        justifyContent: 'center',
        alignItems: 'center',
        borderRadius: 15,
        borderWidth: 4,
        borderColor: CustomColor.accentPurple,
        backgroundColor: 'transparent',
    },
    checkboxChecked: {
        backgroundColor: CustomColor.accentPurple,
        borderColor: CustomColor.lightGrey,
    },
    filterContainer: {
        flexDirection: 'row',
        alignItems: 'center',
        paddingVertical: 10,
        marginLeft: 10,
    },
    text: {
        marginLeft: 10,
        marginBottom: 10,
    },
});
