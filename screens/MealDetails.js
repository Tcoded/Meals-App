import React from 'react';
import { View, Text, Button, StyleSheet } from 'react-native';

import DefaultStyles from '../constants/DefaultStyles';
import { MEALS } from '../data/sample-data';

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
        headerTitle: selectedMeal.title
    };
};

const styles = StyleSheet.create({});

export default MealDetails;