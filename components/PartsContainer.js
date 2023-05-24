import {
    Text,
    View,
    StyleSheet,
    Pressable,
    FlatList,
    Modal,
} from 'react-native';
import { AntDesign } from '@expo/vector-icons';
import { FontAwesome } from '@expo/vector-icons';
import YoutubePlayer from 'react-native-youtube-iframe';

import globalStyles from '../styles/globalStyles';
import CustomColors from '../styles/Colors';
import { useContext, useRef, useState } from 'react';
import { CourseContext } from '../context/CourseContext';

export default PartsContainer = ({ courseId, partId }) => {
    const [isActive, setIsActive] = useState(false);
    const [modalVisible, setModalVisible] = useState(false);
    const { partDone, allCourses } = useContext(CourseContext);

    const part = allCourses
        .find((c) => c.key === courseId)
        ?.parts.find((p) => p.id === partId);

    const onStateChange = (state) => {
        if (state === 'ended') {
            partDone(courseId, partId);
        }
    };

    return (
        <Pressable
            onPress={() => setIsActive(!isActive)}
            onLongPress={() => setModalVisible(true)}
        >
            <Modal visible={modalVisible}>
                <View style={styles.modal}>
                    <YoutubePlayer
                        height={300}
                        play={true}
                        videoId={'kt0bfw4YkFk' /* part.videoURL */}
                        onChangeState={onStateChange}
                    />
                    <Pressable
                        onPress={() => setModalVisible(false)}
                        style={styles.cancelButton}
                    >
                        <Text style={styles.buttonText}>
                            {part.done ? 'DONE' : 'CANCEL'}
                        </Text>
                    </Pressable>
                </View>
            </Modal>

            <View style={globalStyles.container}>
                <View style={globalStyles.contentContainer}>
                    <FontAwesome
                        name='check-circle-o'
                        size={24}
                        color={
                            part.done
                                ? CustomColors.accentPurple
                                : CustomColors.lightGrey
                        }
                        onLongPress={() => partDone(courseId, partId)}
                    />
                    <Text style={globalStyles.checkText}>{part.title}</Text>
                </View>
                {isActive && (
                    <FlatList
                        data={part.contentList}
                        renderItem={({ item }) => (
                            <View style={styles.partTextContainer}>
                                <AntDesign
                                    name='pushpin'
                                    size={16}
                                    color={CustomColors.accentPurple}
                                />
                                <Text style={styles.partText}>{item}</Text>
                            </View>
                        )}
                    />
                )}
            </View>
        </Pressable>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
        alignItems: 'center',
        justifyContent: 'center',
    },
    cancelButton: {
        width: 150,
        padding: 10,
        borderRadius: 8,
        alignItems: 'center',
        backgroundColor: CustomColors.accentPurple,
        alignSelf: 'center',
    },
    buttonText: {
        fontSize: 20,
        fontWeight: 'bold',
        color: 'white',
    },
    partTextContainer: {
        flexDirection: 'row',
        padding: 5,
    },
    partText: {
        fontSize: 15,
        marginLeft: 10,
    },
});
