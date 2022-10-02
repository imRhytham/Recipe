import {Image, ScrollView, StyleSheet, Text, View} from 'react-native';
import React from 'react';
import RecipeCard from '../components/RecipeCard';
import {recipes} from '../data';

const RecipesByIngredient = ({route, navigation}) => {
  const {ingredient} = route.params;
  console.log(ingredient);

  const filteredRecipes = recipes.filter(recipe => {
    return (
      recipe.ingredients.filter(i => i[0] === ingredient.ingredientId).length >
      0
    );
  });
  console.log(filteredRecipes);

  return (
    <View style={styles.container}>
      <View style={styles.imageContainer}>
        <Image
          source={{
            uri: ingredient.photo_url,
          }}
          style={styles.image}
        />
      </View>
      <Text style={styles.text}>Recipes with {ingredient.name}</Text>
      <ScrollView contentContainerStyle={styles.scroll}>
        {filteredRecipes.map((recipe, index) => (
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
    flex: 1,
    backgroundColor: '#fff',
  },
  imageContainer: {
    width: '100%',
    height: 300,
    borderBottomWidth: 1,
    borderBottomColor: '#d3d3d3',
    overflow: 'hidden',
  },
  image: {
    width: '100%',
    height: 300,
    resizeMode: 'cover',
  },
  text: {
    color: '#000',
    fontSize: 18,
    fontWeight: 'bold',
    marginTop: 10,
    marginLeft: 30,
  },
  scroll: {
    alignItems: 'center',
    justifyContent: 'space-around',
    flexDirection: 'row',
    flexWrap: 'wrap',
  },
});

export default RecipesByIngredient;
