import React from 'react';
import { View, Text, Button } from 'react-native';
import { HeaderButtons, Item } from 'react-navigation-header-buttons';

import DefaultStyles from '../constants/DefaultStyles';
import { MEALS } from '../data/sample-data';
import CustomHeaderButton from '../components/CustomHeaderButton';

const MealDetails = props => {
    const mealId = props.navigation.getParam('mealId');

    const selectedMeal = MEALS.find(meal => meal.id === mealId);
    return (
        <View style={DefaultStyles.screen}>
            <Text>{selectedMeal.title}</Text>
            <Button title="Go Back to Categories" onPress={() => {
                props.navigation.popToTop();
            }} />
        </View>
    )
};

MealDetails.navigationOptions = navigationData => {
    const mealId = navigationData.navigation.getParam('mealId');
    const selectedMeal = MEALS.find(meal => meal.id === mealId);
    return {
        headerTitle: selectedMeal.title,
        headerRight: () => (
            <HeaderButtons HeaderButtonComponent={CustomHeaderButton}>
                <Item title='Favorite' iconName='ios-star' onPress={() => {}} />
            </HeaderButtons>
        )
    };
};

export default MealDetails;