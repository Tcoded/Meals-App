import React, { useState } from 'react';
import { View, Text, Switch, StyleSheet } from 'react-native';
import { HeaderButtons, Item } from 'react-navigation-header-buttons';

import DefaultStyles from '../constants/DefaultStyles';
import CustomHeaderButton from '../components/CustomHeaderButton';
import Colors from '../constants/Colors';

const FiltersSwitch = props => {
    return (
        <View style={styles.filterContainer}>
            <Text>{props.label}</Text>
            <Switch
                value={props.state}
                onValueChange={props.onChange}
                trackColor={{true: Colors.accentColor}}
            />
        </View>
    )
}

const Filters = props => {
    const [isGlutenFree, setIsGlutenFree] = useState(false);
    const [isLactoseFree, setIsLactoseFree] = useState(false);
    const [isVegetarian, setIsVegetarian] = useState(false);
    const [isVegan, setIsVegan] = useState(false);

    return (
        <View style={DefaultStyles.screen}>
            <Text style={DefaultStyles.title}>Filter Options</Text>
            <FiltersSwitch
                label='Gluten-free'
                state={isGlutenFree}
                onChange={newValue => setIsGlutenFree(newValue)}
            />
            <FiltersSwitch
                label='Lactose-free'
                state={isLactoseFree}
                onChange={newValue => setIsLactoseFree(newValue)}
            />
            <FiltersSwitch
                label='Vegetarian'
                state={isVegetarian}
                onChange={newValue => setIsVegetarian(newValue)}
            />
            <FiltersSwitch
                label='Vegan'
                state={isVegan}
                onChange={newValue => setIsVegan(newValue)}
            />
        </View>
    );
};

Filters.navigationOptions = navData => {
    return {
        headerTitle: 'My Filters',
        headerLeft: () => (
            <HeaderButtons HeaderButtonComponent={CustomHeaderButton}>
                <Item title='Menu' iconName='ios-menu' onPress={() => {
                    navData.navigation.toggleDrawer();
                }} />
            </HeaderButtons>
        )
    };
};

const styles = StyleSheet.create({
    filterContainer: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        width: '80%',
        marginVertical: 15
    }
});

export default Filters;