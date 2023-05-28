import {
    Text,
    View,
    Image,
    StyleSheet,
    ScrollView,
    Pressable,
} from 'react-native';
import { AntDesign } from '@expo/vector-icons';
import { useRef, useState } from 'react';
import { useNavigation, useRoute } from '@react-navigation/native';

import CustomColor from '../styles/Colors';
import globalStyles from '../styles/globalStyles';
import ContentContainer from '../components/ContentContainer';

export default CourseDetailsComp = () => {
    const navigation = useNavigation();
    const route = useRoute();
    const { item } = route.params;
    const scrollRef = useRef();
    const [showIcon, setShowIcon] = useState(false);
    const handleScroll = (event) => {
        const offsetY = event.nativeEvent.contentOffset.y;
        if (offsetY > 100) {
            setShowIcon(true);
        } else {
            setShowIcon(false);
        }
    };

    return (
        <View style={styles.container}>
            <View style={styles.imageContainer}>
                <Image source={{ uri: item.imageURL }} style={styles.image} />
            </View>
            <ScrollView
                ref={scrollRef}
                stickyHeaderIndices={[2]}
                onScroll={handleScroll}
            >
                <View style={styles.innerContainer}>
                    <View style={styles.partstitleContainer}>
                        <Pressable
                            onPress={() =>
                                navigation.navigate('Course Parts', { item })
                            }
                        >
                            <Text style={styles.smallBox}>
                                {item.parts.length} videos
                            </Text>
                        </Pressable>
                        <Text style={styles.title}>{item.title}</Text>
                    </View>

                    <View>
                        <Text style={globalStyles.smallTitle}>
                            Course Content
                        </Text>
                        {item.contentList.map((content, idx) => (
                            <ContentContainer key={idx} content={content} />
                        ))}
                    </View>
                    <View style={styles.stickyHeader}>
                        <Text style={globalStyles.smallTitle}>
                            Course Description
                        </Text>
                    </View>
                    <View>
                        <Text style={globalStyles.paragraphText}>
                            {item.description}
                        </Text>
                    </View>
                </View>
            </ScrollView>
            {showIcon && (
                <AntDesign
                    style={styles.scrollTopIcon}
                    name='upcircleo'
                    size={24}
                    color={CustomColor.accentPurple}
                    onPress={() => {
                        scrollRef.current.scrollTo({
                            x: 0,
                            y: 0,
                            animated: true,
                        });
                    }}
                />
            )}
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        marginTop: 10,
        marginHorizontal: 10,
        backgroundColor: 'white',
    },
    imageContainer: {
        width: '100%',
    },
    image: {
        height: 200,
        margin: 5,
    },
    innerContainer: {
        flex: 1,
        margin: 20,
        padding: 8,
    },

    partstitleContainer: {
        borderBottomWidth: 2,
        borderBottomColor: CustomColor.lightGrey,
    },
    smallBox: {
        borderWidth: 2,
        borderColor: CustomColor.mediumGrey,
        borderRadius: 20,
        width: 80,
        textAlign: 'center',
        paddingTop: 4,
        color: CustomColor.mediumGrey,
    },
    title: {
        marginVertical: 10,
        fontSize: 26,
        color: CustomColor.darkGrey,
    },
    scrollTopIcon: {
        position: 'absolute',
        bottom: 0,
        right: 0,
    },
    stickyHeader: {
        backgroundColor: 'white',
    },
});
