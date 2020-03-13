import React from 'react';
import { View, Text } from 'react-native';

import DefaultStyles from '../constants/DefaultStyles';

const Filters = props => {
    return (
        <View style={DefaultStyles.screen}>
            <Text>The Filters Screen!</Text>
        </View>
    )
};

Filters.navigationOptions = {
    headerTitle: 'My Filters'
};

export default Filters;