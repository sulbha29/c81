import React from 'react';
import Bookdonation from '../screens/bookdonatescreen';
import Bookrequest from '../screens/bookrequestscreen';
import {createBottomTabNavigator} from 'react-navigation-tabs';
import {Image} from 'react-native'

export const AppTabnavigator = createBottomTabNavigator({
    donatebooks:{screen:Bookdonation,navigationOptions:{
        tabBarIcon: <Image source={require("../assets/request-icon.png")}style={{width:50,height:50}}/>,
        tabBarlabel:"donate books"
    }},
    requestbooks:{screen:Bookrequest,navigationOptions:{
        tabBarIcon: <Image source={require("../assets/donate-icon.png")}style={{width:50,height:50}}/>,
        tabBarlabel:"request books"
    }}
})