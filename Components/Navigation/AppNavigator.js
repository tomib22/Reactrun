
import React from 'react'
import { NavigationContainer } from '@react-navigation/native'
import { createStackNavigator } from '@react-navigation/stack'
import ActivitiesScreen from './screens/ActivitiesScreen'
import StatsScreen from './screens/StatsScreen'

const Stack = createStackNavigator()

const AppNavigator = () => (
  <NavigationContainer>
    <Stack.Navigator>
      <Stack.Screen name="Activities" component={ActivitiesScreen} />
      <Stack.Screen name="Stats" component={StatsScreen} />
    </Stack.Navigator>
  </NavigationContainer>
);

export default AppNavigator
