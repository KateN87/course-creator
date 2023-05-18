import { Text, View, StyleSheet, Pressable, FlatList } from 'react-native';
import { FontAwesome } from '@expo/vector-icons';

import globalStyles from '../styles/globalStyles';
import CustomColors from '../styles/Colors';
import { useState } from 'react';

export default PartsContainer = ({ item }) => {
    const [isActive, setIsActive] = useState(false);
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
