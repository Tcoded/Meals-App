import React from 'react';
import { View, Text } from 'react-native';
import { HeaderButtons, Item } from 'react-navigation-header-buttons';

import DefaultStyles from '../constants/DefaultStyles';
import CustomHeaderButton from '../components/CustomHeaderButton';

const Filters = props => {
    return (
        <View style={DefaultStyles.screen}>
            <Text>The Filters Screen!</Text>
        </View>
    )
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
    }
};

export default Filters;