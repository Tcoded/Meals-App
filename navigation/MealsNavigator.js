import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';
import { createBottomTabNavigator } from 'react-navigation-tabs';

import CategorySelection from '../screens/CategorySelection';
import CategoryMeal from '../screens/CategoryMeal';
import MealDetails from '../screens/MealDetails';
import Favorites from '../screens/Favorites';

import Colors from '../constants/Colors';

const MealsNavigator = createStackNavigator({
        Categories: CategorySelection,
        CategoryMeals: CategoryMeal,
        Details: MealDetails
    },
    {
        defaultNavigationOptions: {
            headerStyle: {
                backgroundColor: Colors.primaryColor
            }
        }
    }
);

const TabNavigator = createBottomTabNavigator({
    Meals: MealsNavigator,
    Favorites: Favorites
});

export default createAppContainer(TabNavigator);