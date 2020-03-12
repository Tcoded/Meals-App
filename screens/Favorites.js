import React from 'react';

import MealsList from '../components/MealsList';
import { MEALS } from '../data/sample-data';

const Favorites = props => {
    const favoritedMeals = MEALS.filter(meal => meal.id === 'm1' || meal.id === 'm2');

    return <MealsList listData={favoritedMeals} navigation={props.navigation} />;
};

Favorites.navigationOptions = {
    headerTitle: 'Your Favorites'
};

export default Favorites;