import { Text, View, FlatList } from 'react-native';

import PartsContainer from '../components/PartsContainer';

export default CoursePartsScreen = ({ route }) => {
    const { item } = route.params;
    return (
        <View>
            <FlatList
                data={item.parts}
                renderItem={({ item }) => <PartsContainer item={item} />}
            />
        </View>
    );
};
