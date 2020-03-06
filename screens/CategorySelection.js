import React from 'react';
import { View, Text, FlatList, StyleSheet } from 'react-native';

import DefaultStyles from '../constants/DefaultStyles';
import { CATEGORIES } from '../data/sample-data';

const renderGridItem = (itemData) => {
    return <View style={styles.gridItem}><Text>{itemData.item.title}</Text></View>
};

const CategorySelection = props => {
    return (
        <FlatList
            data={CATEGORIES}
            renderItem={renderGridItem}
            numColumns={2}
        />
    );
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