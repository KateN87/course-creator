import {
    Modal,
    Text,
    Pressable,
    FlatList,
    StyleSheet,
    View,
} from 'react-native';
import { tagsList } from '../courseData';

import CustomColor from '../styles/Colors';

export default FilterComponent = ({
    pressHandler,
    modalVisible,
    setSelectedCourses,
    selectedCourses,
}) => {
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
            <View>
                <Pressable
                    style={[
                        styles.checkboxBase,
                        checked && styles.checkboxChecked,
                    ]}
                    onPress={checkHandler}
                ></Pressable>
                <Text>{item}</Text>
            </View>
        );
    };

    return (
        <Modal visible={modalVisible}>
            <Text>Choose Filters</Text>
            <FlatList
                data={tagsList}
                renderItem={({ item }) => <MyCheckbox item={item} />}
            />
            <Pressable onPress={pressHandler}>
                <Text>APPLY</Text>
            </Pressable>
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
    },
});
