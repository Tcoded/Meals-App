import React from 'react';
import { View, Text, ScrollView, Image, StyleSheet } from 'react-native';
import { HeaderButtons, Item } from 'react-navigation-header-buttons';

import DefaultStyles from '../constants/DefaultStyles';
import { MEALS } from '../data/sample-data';
import CustomHeaderButton from '../components/CustomHeaderButton';

const MealDetails = props => {
    const mealId = props.navigation.getParam('mealId');
    const selectedMeal = MEALS.find(meal => meal.id === mealId);

    return (
        <ScrollView>
            <Image source={{uri: selectedMeal.imageUrl}} style={styles.image} />
            <View style={styles.details}>
                <Text style={DefaultStyles.text}>{selectedMeal.duration}m</Text>
                <Text style={DefaultStyles.text}>{selectedMeal.complexity.toUpperCase()}</Text>
                <Text style={DefaultStyles.text}>{selectedMeal.cost.toUpperCase()}</Text>
            </View>
            <Text style={{...DefaultStyles.title, ...styles.center}}>Ingredients</Text>
            {selectedMeal.ingredients.map(ingredient => (
                <Text key={ingredient}>{ingredient}</Text>))
            }
            <Text style={{...DefaultStyles.title, ...styles.center}}>Directions</Text>
            {selectedMeal.directions.map(direction => (
                <Text key={direction}>{direction}</Text>))
            }
        </ScrollView>
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

const styles = StyleSheet.create({
    image: {
        width: '100%',
        height: 200
    },
    details: {
        flexDirection: 'row',
        padding: 15,
        justifyContent: 'space-between'
    },
    center: {
        textAlign: 'center'
    }
});

export default MealDetails;