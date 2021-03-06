import React from 'react';
import { Platform, Text } from 'react-native';
import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';
import { createBottomTabNavigator } from 'react-navigation-tabs';
import { createMaterialBottomTabNavigator } from 'react-navigation-material-bottom-tabs';
import { createDrawerNavigator } from 'react-navigation-drawer';
import { Ionicons } from '@expo/vector-icons';

import CategorySelection from '../screens/CategorySelection';
import CategoryMeal from '../screens/CategoryMeal';
import MealDetails from '../screens/MealDetails';
import Favorites from '../screens/Favorites';
import Filters from '../screens/Filters';
import Colors from '../constants/Colors';

const defaultStackOptions = {
        headerStyle: {
            backgroundColor: Colors.primaryColor
        },
        headerTitleStyle: {
            fontFamily: 'open-sans-bold'
        },
        headerBackTitleStyle: {
            fontFamily: 'open-sans'
        }
};

const MealsNavigator = createStackNavigator({
        Categories: CategorySelection,
        CategoryMeals: CategoryMeal,
        Details: MealDetails
    }, {
        defaultNavigationOptions: defaultStackOptions
    }
);

const FavoritesNavigator = createStackNavigator({
    Favorites: Favorites,
    MealDetail: MealDetails
    }, {
        defaultNavigationOptions: defaultStackOptions
    }
);

const tabsScreenConfig = {
    Meals: {
        screen: MealsNavigator,
        navigationOptions: {
            tabBarIcon: (tabInfo) => {
                return (
                    <Ionicons
                        name='ios-restaurant'
                        size={25}
                        color={tabInfo.tintColor} 
                    />
                );
            },
            tabBarColor: Colors.primaryColor,
            tabBarLabel: Platform.OS === 'android'
                ? <Text style={{fontFamily: 'open-sans-bold'}}>Meals</Text>
                : 'Meals'
        }
    },
    Favorites: {
        screen: FavoritesNavigator,
        navigationOptions: {
            tabBarIcon: (tabInfo) => {
                return (
                    <Ionicons
                        name='ios-star'
                        size={25}
                        color={tabInfo.tintColor}
                    />
                );
            },
            tabBarColor: Colors.secondaryColor,
            tabBarLabel: Platform.OS === 'android'
                ? <Text style={{fontFamily: 'open-sans-bold'}}>Favorites</Text>
                : 'Favorites'
        }
    }
};

const TabNavigator = Platform.OS === 'android'
    ? createMaterialBottomTabNavigator(tabsScreenConfig, {
        activeColor: 'white',
        shifting: true
    })
    : createBottomTabNavigator(tabsScreenConfig, {
        tabBarOptions: {
            activeTintColor: 'white',
            activeBackgroundColor: Colors.primaryColor,
            labelStyle: {
                fontFamily: 'open-sans-bold'
            }
        }
    }
);

const FiltersNav = createStackNavigator({
    Filters: Filters
}, {
    defaultNavigationOptions: defaultStackOptions
});

const MainNavigator = createDrawerNavigator({
    MainScreen: {
        screen: TabNavigator,
        navigationOptions: {
            drawerLabel: 'Meals & Favorites'
        }
    },
    Filters: {
        screen: FiltersNav,
        navigationOptions: {
            drawerLabel: 'My Filters'
        }
    },
}, {
    contentOptions: {
        activeTintColor: Colors.primaryColor,
        labelStyle: {
            fontFamily: 'open-sans-bold'
        }
    }
});

export default createAppContainer(MainNavigator);