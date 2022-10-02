import React from 'react';
import {ScrollView, View, StyleSheet} from 'react-native';
import RecipeCard from '../components/RecipeCard';
import {recipes, categories} from '../data';

const Home = ({navigation}) => {
  recipes.forEach(recipe => {
    categories.forEach(category => {
      if (recipe.categoryId === category.id) {
        recipe.category = category.name;
      }
    });
  });
  console.log(recipes);

  return (
    <View style={styles.container}>
      <ScrollView contentContainerStyle={styles.container}>
        {recipes?.map((recipe, index) => (
          <RecipeCard
            key={index}
            photo_url={recipe.photo_url}
            title={recipe.title}
            category={recipe.category}
            onPress={() => {
              navigation.navigate('Recipe Details', {
                recipe,
                title: recipe.title,
              });
            }}
          />
        ))}
      </ScrollView>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
    flexDirection: 'row',
    flexWrap: 'wrap',
  },
});

export default Home;
