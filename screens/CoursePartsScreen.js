import { View, FlatList } from 'react-native';

import PartsContainer from '../components/PartsContainer';

export default CoursePartsScreen = ({ route }) => {
    const { item } = route.params;
    const id = item.key;
    return (
        <View>
            <FlatList
                data={item.parts}
                renderItem={({ item }) => (
                    <PartsContainer item={item} id={id} />
                )}
            />
        </View>
    );
};
