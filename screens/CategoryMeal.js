import React from 'react';
import { View, Text, FlatList, StyleSheet } from 'react-native';

import DefaultStyles from '../constants/DefaultStyles';
import { CATEGORIES, MEALS } from '../data/sample-data';
import MealItem from '../components/MealItem';

const CategoryMeal = props => {
    const renderMealItem = itemData => {
        return (
            <MealItem
                title={itemData.item.title}
                duration={itemData.item.duration}
                complexity={itemData.item.complexity}
                cost={itemData.item.cost}
                image={itemData.item.imageUrl}
                onSelect={() => {}}
            />
        );
    }

    const catId = props.navigation.getParam('categoryId');
    const displayedMeals = MEALS.filter(
        meal => meal.categoryIds.indexOf(catId) >= 0
    );

    return (
        <View style={DefaultStyles.screen}>
            <FlatList
                data={displayedMeals}
                renderItem={renderMealItem}
                style={styles.list}
            />
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

const styles = StyleSheet.create({
    list: {
        width: '100%'
    }
});

export default CategoryMeal;