import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import Home from './app/screens/Home';
import Categories from './app/screens/Categories';
import RecipeDetail from './app/screens/RecipeDetail';
import RecipeByCategory from './app/screens/RecipeByCategory';
import ViewIngredients from './app/screens/ViewIngredients';
import {createDrawerNavigator} from '@react-navigation/drawer';
import {TouchableOpacity} from 'react-native';
import {DrawerActions} from '@react-navigation/native';
import Icon from 'react-native-vector-icons/MaterialIcons';
import RecipesByIngredient from './app/screens/RecipeByIngredients';

const Stack = createNativeStackNavigator();
const Drawer = createDrawerNavigator();

const StackNavigator = ({navigation}) => {
  return (
    <Stack.Navigator>
      <Stack.Screen
        name="Home"
        component={Home}
        options={{
          headerTitleAlign: 'center',
          headerLeft: () => (
            <TouchableOpacity
              onPress={() => navigation.dispatch(DrawerActions.openDrawer())}>
              <Icon name="menu" size={25} color="black" />
            </TouchableOpacity>
          ),
        }}
      />
      <Stack.Screen
        name="Categories"
        component={Categories}
        options={{headerTitleAlign: 'center'}}
      />
      <Stack.Screen
        name="Recipe Details"
        component={RecipeDetail}
        options={({route}) => ({
          title: route.params.title,
          headerShown: false,
        })}
      />
      <Stack.Screen
        name="Recipe"
        component={RecipeByCategory}
        options={({route}) => ({title: route.params.title})}
      />
      <Stack.Screen
        name="Ingredient Details"
        component={ViewIngredients}
        options={({route}) => ({
          title: `Ingredients for ${route.params.title}`,
        })}
      />
      <Stack.Screen
        name="Recipe by Ingredient"
        component={RecipesByIngredient}
        options={({route}) => ({
          title: route.params.title,
          headerTitleAlign: 'center',
        })}
      />
    </Stack.Navigator>
  );
};

function App() {
  return (
    <NavigationContainer>
      <Drawer.Navigator initialRouteName="Home">
        <Drawer.Screen
          name="Home"
          component={StackNavigator}
          options={{headerShown: false}}
        />
        <Drawer.Screen name="Categories" component={Categories} />
      </Drawer.Navigator>
      {/* <Stack.Navigator>
        <Stack.Screen
          name="Home"
          component={Home}
          options={{headerTitleAlign: 'center'}}
        />
        <Stack.Screen
          name="Categories"
          component={Categories}
          options={{headerTitleAlign: 'center'}}
        />
        <Stack.Screen
          name="Recipe Details"
          component={RecipeDetail}
          options={({route}) => ({
            title: route.params.title,
            headerShown: false,
          })}
        />
        <Stack.Screen
          name="Recipe"
          component={RecipeByCategory}
          options={({route}) => ({title: route.params.title})}
        />
        <Stack.Screen
          name="Ingredient Details"
          component={ViewIngredients}
          options={({route}) => ({
            title: `Ingredients for ${route.params.title}`,
          })}
        />
      </Stack.Navigator> */}
    </NavigationContainer>
  );
}

export default App;

// import * as React from 'react';
// import {Button, View} from 'react-native';
// import {createDrawerNavigator} from '@react-navigation/drawer';
// import {NavigationContainer} from '@react-navigation/native';
// import {GestureHandlerRootView} from 'react-native-gesture-handler';

// function HomeScreen({navigation}) {
//   return (
//     <View style={{flex: 1, alignItems: 'center', justifyContent: 'center'}}>
//       <Button
//         onPress={() => navigation.navigate('Notifications')}
//         title="Go to notifications"
//       />
//     </View>
//   );
// }

// function NotificationsScreen({navigation}) {
//   return (
//     <View style={{flex: 1, alignItems: 'center', justifyContent: 'center'}}>
//       <Button onPress={() => navigation.goBack()} title="Go back home" />
//     </View>
//   );
// }

// const Drawer = createDrawerNavigator();

// function App() {
//   return (
//     <GestureHandlerRootView style={{flex: 1}}>
//       <NavigationContainer>
//         <Drawer.Navigator initialRouteName="Home">
//           <Drawer.Screen name="Home" component={HomeScreen} />
//           <Drawer.Screen name="Notifications" component={NotificationsScreen} />
//         </Drawer.Navigator>
//       </NavigationContainer>
//     </GestureHandlerRootView>
//   );
// }

// export default App;
