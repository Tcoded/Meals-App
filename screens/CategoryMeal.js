import React from 'react';

import { CATEGORIES, MEALS } from '../data/sample-data';
import MealsList from '../components/MealsList';

const CategoryMeal = props => {
    const catId = props.navigation.getParam('categoryId');
    const displayedMeals = MEALS.filter(
        meal => meal.categoryIds.indexOf(catId) >= 0
    );

    return <MealsList listData={displayedMeals} navigation={props.navigation} />;
};

CategoryMeal.navigationOptions = (navigationData) => {
    const categoryID = navigationData.navigation.getParam('categoryId');
    const selectedCategory = CATEGORIES.find(category => category.id === categoryID);

    return {
        headerTitle: selectedCategory.title
    };
}

export default CategoryMeal;