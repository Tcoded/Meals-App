import React from 'react';
import { View, Text, Button, StyleSheet } from 'react-native';

import DefaultStyles from '../constants/DefaultStyles';

const CategorySelection = props => {
    return (
        <View style={DefaultStyles.screen}>
            <Text>The Categories Screen!</Text>
            <Button title="Go to Meals" onPress={() => {
                props.navigation.navigate('CategoryMeals');
            }} />
        </View>
    )
};

const styles = StyleSheet.create({});

export default CategorySelection;