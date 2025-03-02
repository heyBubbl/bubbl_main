// App.js
import React from 'react';
import { StatusBar, LogBox } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { SafeAreaProvider } from 'react-native-safe-area-context';
import "./global.css"

// Import screens
import CreateWalletScreen from './src/screens/auth/CreateWalletScreen';

// Create navigation stacks
const Stack = createStackNavigator();

// Ignore specific warnings if needed
LogBox.ignoreLogs(['Reanimated 2']);

const App = () => {
  return (
    <SafeAreaProvider>
      <NavigationContainer>
        <StatusBar barStyle="dark-content" backgroundColor="#FFFFFF" />
        <Stack.Navigator 
          initialRouteName="CreateWallet"
          screenOptions={{
            headerShown: false,
            cardStyle: { backgroundColor: '#FFFFFF' }
          }}
        >
          {/* Auth/Onboarding Flow */}
          <Stack.Screen name="CreateWallet" component={CreateWalletScreen} />
        </Stack.Navigator>
      </NavigationContainer>
    </SafeAreaProvider>
  );
};

export default App;