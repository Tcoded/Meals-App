import React from 'react';
import { View, Text, Button,  StyleSheet } from 'react-native';

import DefaultStyles from '../constants/DefaultStyles';

const CategoryMeal = props => {
    return (
        <View style={DefaultStyles.screen}>
            <Text>The Category Meal Screen!</Text>
            <Button title="Go to Details" onPress={() => {
                props.navigation.navigate('Details');
            }} />
        </View>
    )
};

const styles = StyleSheet.create({});

export default CategoryMeal;