import React from 'react';
import { FlatList, View, StyleSheet } from 'react-native';

import MealItem from './MealItem';
import DefaultStyles from '../constants/DefaultStyles';

const MealsList = props => {
    const renderMealItem = itemData => {
        return (
            <MealItem
                title={itemData.item.title}
                duration={itemData.item.duration}
                complexity={itemData.item.complexity}
                cost={itemData.item.cost}
                image={itemData.item.imageUrl}
                onSelect={() => {
                    props.navigation.navigate({routeName: 'Details', params: {
                        mealId: itemData.item.id
                    }})
                }}
            />
        );
    }

    return (
        <View style={DefaultStyles.screen}>
            <FlatList
                data={props.listData}
                renderItem={renderMealItem}
                style={styles.list}
            />
        </View>
    )
};

const styles = StyleSheet.create({
    list: {
        width: '100%'
    }
});

export default MealsList;