import React from 'react';

import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';

import {Provider} from 'react-redux';
import {Posts, Post, Favorites} from './src/screens';
import configureStore from './src/configureStore';
import {createMaterialTopTabNavigator} from '@react-navigation/material-top-tabs';

import {ReloadPosts, SaveFavorite} from './src/components';

function HomeTabs() {
  const Tab = createMaterialTopTabNavigator();
  return (
    <Tab.Navigator
      tabBarOptions={{
        pressColor: 'white',
        activeTintColor: 'white',
        inactiveTintColor: 'white',
        labelStyle: {fontWeight: '500'},
        style: {backgroundColor: '#0CAD10'},
      }}>
      <Tab.Screen name="All" component={Posts} />
      <Tab.Screen name="Favorites" component={Favorites} />
    </Tab.Navigator>
  );
}

const App = () => {
  const store = configureStore();
  const Stack = createStackNavigator();
  return (
    <Provider store={store}>
      <NavigationContainer>
        <Stack.Navigator
          screenOptions={{
            headerStyle: {
              backgroundColor: '#0CAD10',
            },
            headerTintColor: '#fff',
          }}>
          <Stack.Screen
            name="Posts"
            component={HomeTabs}
            options={() => ({
              headerRight: () => {
                return <ReloadPosts />;
              },
            })}
          />
          <Stack.Screen
            name="Post"
            component={Post}
            options={({route}) => ({
              headerRight: () => {
                return <SaveFavorite data={route.params} />;
              },
            })}
          />
        </Stack.Navigator>
      </NavigationContainer>
    </Provider>
  );
};

export default App;
