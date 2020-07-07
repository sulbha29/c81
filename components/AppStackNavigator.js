import React from 'react';
import {createStackNavigator} from 'react-navigation-stack';
import BookDonateScreen from '../screens/bookdonatescreen';
import RecieverDetailsScreen from '../screens/RecieverDetailsScreen';
export const AppStackNavigator = createStackNavigator({
    BookDonateList:{
        screen:Bookdonation,
        navigationOptions:{
            headerShown:false
        }
    },
    RecieverDetails:{
        screen:Bookrequest,
        navigationOptions:{
            headerShown:false
        }
    },
},
    {
        initialRouteName:'BookDonateList'
    
})