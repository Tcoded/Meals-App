import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';

import CategorySelection from '../screens/CategorySelection';
import CategoryMeal from '../screens/CategoryMeal';
import MealDetails from '../screens/MealDetails';

const MealsNavigator = createStackNavigator({
        Categories: CategorySelection,
        CategoryMeals: CategoryMeal,
        Details: MealDetails
    });

export default createAppContainer(MealsNavigator);