import React from 'react';
import { View, Text, ScrollView, Image, StyleSheet } from 'react-native';
import { HeaderButtons, Item } from 'react-navigation-header-buttons';

import DefaultStyles from '../constants/DefaultStyles';
import { MEALS } from '../data/sample-data';
import CustomHeaderButton from '../components/CustomHeaderButton';

const ListItem = props => {
    return (
        <View style={styles.listItem}>
            <Text style={DefaultStyles.text}>{props.children}</Text>
        </View>
    );
};

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
            <Text style={{...DefaultStyles.title, ...DefaultStyles.center}}>Ingredients</Text>
            {selectedMeal.ingredients.map(ingredient => (
                <ListItem key={ingredient}>{ingredient}</ListItem>))
            }
            <Text style={{...DefaultStyles.title, ...DefaultStyles.center}}>Directions</Text>
            {selectedMeal.directions.map(direction => (
                <ListItem key={direction}>{direction}</ListItem>))
            }
        </ScrollView>
    );
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
    listItem: {
        marginHorizontal: 20,
        marginVertical: 10,
        borderColor: '#ccc',
        borderWidth: 1,
        padding: 10
    }
});

export default MealDetails;