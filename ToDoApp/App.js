import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import TaskScreen from './components/TaskScreen';  
import CompletedTasks from './components/CompletedTasks';  
import { TaskProvider } from './context/TaskContext';  

const Stack = createStackNavigator();

const App = () => {
  return (
    <TaskProvider>
      <NavigationContainer>
        <Stack.Navigator>
          <Stack.Screen 
            name="TaskScreen" 
            component={TaskScreen} 
            options={{ headerShown: false }} 
          />
          <Stack.Screen 
            name="CompletedTasks" 
            component={CompletedTasks} 
            options={{ headerShown: false }} 
          />
        </Stack.Navigator>
      </NavigationContainer>
    </TaskProvider>
  );
};

export default App;
