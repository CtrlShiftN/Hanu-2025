import React from 'react'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import RecentTransactionsScreen from './RecentTransactionsScreen';
import AllTransactionScreen from './AllTransactionScreen';
import { Ionicons } from '@expo/vector-icons';

const BottomTabs = createBottomTabNavigator();

const FinancialManagementScreen = ({ navigation }) => {
    return (
        <BottomTabs.Navigator
        >
          <BottomTabs.Screen
            name="RecentTransactionsScreen"
            component={RecentTransactionsScreen}
            options={{
              headerShown: false,
              title: 'Last 7 Days',
              tabBarLabel: 'Last 7 Days',
              tabBarIcon: ({ color, size }) => (
                <Ionicons name="hourglass" size={size} color={color} />
              ),
            }}
          />
          <BottomTabs.Screen
            name="AllTransactionsScreen"
            component={AllTransactionScreen}
            options={{
              headerShown: false,
              title: 'All Days',
              tabBarLabel: 'All Days',
              tabBarIcon: ({ color, size }) => (
                <Ionicons name="calendar" size={size} color={color} />
              ),
            }}
          />
        </BottomTabs.Navigator>
    );
}

export default FinancialManagementScreen