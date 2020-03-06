import React from 'react';
import { View, Text, FlatList, StyleSheet, TouchableOpacity } from 'react-native';

import DefaultStyles from '../constants/DefaultStyles';
import Colors from '../constants/Colors';
import { CATEGORIES } from '../data/sample-data';

const CategorySelection = props => {
    const renderGridItem = (itemData) => {
        return (
            <TouchableOpacity
                style={styles.gridItem}
                onPress={() => {
                    props.navigation.navigate('CategoryMeals')
                }}
            >
                <View>
                    <Text>{itemData.item.title}</Text>
                </View>
            </TouchableOpacity>
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
    headerTitle: 'Meal Categories',
    headerStyle: {
        backgroundColor: Colors.primaryColor
    }
};

const styles = StyleSheet.create({
    gridItem: {
        flex: 1,
        margin: 15,
        height: 140,
        maxHeight: '33%'
    }
});

export default CategorySelection;