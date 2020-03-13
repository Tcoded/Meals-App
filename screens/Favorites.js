import React from 'react';
import { HeaderButtons, Item } from 'react-navigation-header-buttons';

import MealsList from '../components/MealsList';
import { MEALS } from '../data/sample-data';
import CustomHeaderButton from '../components/CustomHeaderButton';

const Favorites = props => {
    const favoritedMeals = MEALS.filter(meal => meal.id === 'm1' || meal.id === 'm2');

    return <MealsList listData={favoritedMeals} navigation={props.navigation} />;
};

Favorites.navigationOptions = navData => {
    return {
        headerTitle: 'Your Favorites',
        headerLeft: () => (
            <HeaderButtons HeaderButtonComponent={CustomHeaderButton}>
                <Item title='Menu' iconName='ios-menu' onPress={() => {
                    navData.navigation.toggleDrawer();
                }} />
            </HeaderButtons>
        )
    }
};

export default Favorites;