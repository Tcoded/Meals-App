import React from 'react';
import { View, Text, Button, StyleSheet } from 'react-native';

import DefaultStyles from '../constants/DefaultStyles';

const MealDetails = props => {
    return (
        <View style={DefaultStyles.screen}>
            <Text>The Meal Details Screen!</Text>
            <Button title="Go Back to Categories" onPress={() => {
                props.navigation.popToTop();
            }} />
        </View>
    )
};

const styles = StyleSheet.create({});

export default MealDetails;