import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import Constants from 'expo-constants'
import Home from './screens/Home'
import CreateEmployee from './screens/CreateEmployee'
import Profile from './screens/Profile'
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';


const Stack = createStackNavigator();

const myOptiontheme={

  headerTintColor:"white",
  headerStyle:{
    backgroundColor:"#2980b9"
  }

  
}

function App() {
  return (
    <View style={styles.container}>

      <Stack.Navigator>
        <Stack.Screen 
        name="Home" 
        component={Home}
         options={{
           ...myOptiontheme,
           title:"Employee Manager"
           
         }}
         />
        <Stack.Screen 
        name="Create" 
        component={CreateEmployee}
        options={{
          ...myOptiontheme,
          title:"Create employee"
          
        }}
        />
        <Stack.Screen 
        name="Profile" 
        component={Profile}
        options={{
          ...myOptiontheme,
          title:"Create employee"
          
        }} />
      </Stack.Navigator>
     
    </View>
  );
}

export default ()=> {
  return (

    <NavigationContainer>
      <App />
    </NavigationContainer>
  )

}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#bdc3c7',
    

  },
});
