import React from 'react';
import {StyleSheet, ScrollView} from 'react-native';
import IngredientCard from '../components/IngredientCard';
import {ingredients} from '../data';

const ViewIngredients = ({route, navigation}) => {
  const {recipeIngredients} = route.params;

  const allIngredients = recipeIngredients.map(ingredient => ({
    ingredientId: ingredient[0],
    quantity: ingredient[1],
  }));

  allIngredients?.forEach(recipeIngredient => {
    ingredients.forEach(ingredient => {
      if (recipeIngredient.ingredientId === ingredient.ingredientId) {
        recipeIngredient.name = ingredient.name;
        recipeIngredient.photo_url = ingredient.photo_url;
      }
    });
  });

  return (
    <ScrollView contentContainerStyle={styles.container}>
      <IngredientCard ingredients={allIngredients} />
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#fff',
    height: '100%',
    alignItems: 'center',
    justifyContent: 'center',
    flexDirection: 'row',
    flexWrap: 'wrap',
  },
});

export default ViewIngredients;
