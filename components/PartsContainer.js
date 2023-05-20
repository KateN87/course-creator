import { Text, View, StyleSheet, Pressable, FlatList } from 'react-native';
import { FontAwesome } from '@expo/vector-icons';

import globalStyles from '../styles/globalStyles';
import CustomColors from '../styles/Colors';
import { useContext, useState } from 'react';
import { CourseContext } from '../context/CourseContext';

export default PartsContainer = ({ item, id }) => {
    const [isActive, setIsActive] = useState(false);
    const { dispatch } = useContext(CourseContext);

    const doneHandler = () => {
        console.log('HELLO');
    };
    return (
        <Pressable onPress={() => setIsActive(!isActive)}>
            <View style={globalStyles.container}>
                <View style={globalStyles.contentContainer}>
                    <FontAwesome
                        name='check-circle-o'
                        size={24}
                        color={
                            item.done
                                ? CustomColors.accentPurple
                                : CustomColors.lightGrey
                        }
                        onPress={() => doneHandler(item)}
                    />
                    <Text style={globalStyles.checkText}>{item.title}</Text>
                </View>
                {isActive && (
                    <FlatList
                        data={item.contentList}
                        renderItem={({ item }) => <Text>{item}</Text>}
                    />
                )}
            </View>
        </Pressable>
    );
};

const styles = StyleSheet.create({});
