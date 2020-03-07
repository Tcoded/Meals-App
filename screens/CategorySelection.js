import React from 'react';
import {
    View,
    Text,
    FlatList,
    StyleSheet,
    TouchableOpacity,
    TouchableNativeFeedback,
    Platform
} from 'react-native';

import DefaultStyles from '../constants/DefaultStyles';
import { CATEGORIES } from '../data/sample-data';

const CategorySelection = props => {
    let TouchableComponent = TouchableOpacity;

    if (Platform.OS === 'android' && Platform.Version > 20) {
        TouchableComponent = TouchableNativeFeedback;
    }

    const renderGridItem = (itemData) => {
        return (
            <View style={styles.gridItem}>
                <TouchableComponent
                    style={styles.touchable}
                    onPress={() => {
                        props.navigation.navigate({
                            routeName: 'CategoryMeals',
                            params: { categoryId: itemData.item.id }
                        });
                    }}
                >
                    <View style={{...styles.container, backgroundColor: itemData.item.color }}>
                        <Text style={DefaultStyles.title} numberOfLines={2}>{itemData.item.title}</Text>
                    </View>
                </TouchableComponent>
            </View>
        );
    };

    return (
        <FlatList
            data={CATEGORIES}
            renderItem={renderGridItem}
            numColumns={2}
        />
    );
};

CategorySelection.navigationOptions = {
    headerTitle: 'Meal Categories'
};

const styles = StyleSheet.create({
    gridItem: {
        flex: 1,
        margin: 15,
        height: 140,
        borderRadius: 15,
        elevation: 3,
        overflow: 'hidden'
    },
    container: {
        flex: 1,
        justifyContent: 'flex-end',
        alignItems: 'flex-end',
        padding: 10,
        shadowColor: 'black',
        shadowOpacity: 0.25,
        shadowRadius: 10,
        shadowOffset: { width: 0, height: 2 },
        borderRadius: 15
    },
    touchable: {
        flex: 1
    }
});

export default CategorySelection;