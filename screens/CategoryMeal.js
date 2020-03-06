import React from 'react';
import { View, Text, FlatList, StyleSheet } from 'react-native';

import DefaultStyles from '../constants/DefaultStyles';
import { CATEGORIES, MEALS } from '../data/sample-data';

const CategoryMeal = props => {
    const renderMealItem = itemData => {
        return (
            <View><Text>{itemData.item.title}</Text></View>
        );
    }

    const catId = props.navigation.getParam('categoryId');
    const displayedMeals = MEALS.filter(
        meal => meal.categoryIds.indexOf(catId) >= 0
    );

    return (
        <View style={DefaultStyles.screen}>
            <FlatList data={displayedMeals} renderItem={renderMealItem} />
        </View>
    )
};

CategoryMeal.navigationOptions = (navigationData) => {
    const categoryID = navigationData.navigation.getParam('categoryId');

    const selectedCategory = CATEGORIES.find(category => category.id === categoryID);

    return {
        headerTitle: selectedCategory.title
    };
}

const styles = StyleSheet.create({});

export default CategoryMeal;