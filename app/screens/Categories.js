import React from 'react';
import {View, StyleSheet, ScrollView} from 'react-native';
import CategoryCard from '../components/CategoryCard';
import {categories, recipes} from '../data';

const Categories = ({navigation}) => {
  categories?.forEach(category => {
    recipes.forEach(recipe => {
      if (recipe.categoryId === category.id) {
        category.recipes = category.recipes || [];
        category.recipes.push(recipe);
      }
    });
  });
  return (
    <View style={styles.container}>
      <ScrollView contentContainerStyle={styles.container}>
        {categories?.map((category, index) => (
          <CategoryCard
            key={index}
            photo_url={category.photo_url}
            title={category.name}
            recipeLength={category.recipes?.length}
            onPress={() => {
              navigation.navigate('Recipe', {
                category,
                title: category.name,
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

export default Categories;
