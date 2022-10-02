import React from 'react';
import {View, StyleSheet, ScrollView} from 'react-native';
import RecipeCard from './../components/RecipeCard';

const RecipeByCategory = ({route, navigation}) => {
  const {category} = route.params;

  return (
    <View style={styles.container}>
      <ScrollView contentContainerStyle={styles.container}>
        {category.recipes?.map((recipe, index) => (
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
    height: '100%',
    alignItems: 'center',
    justifyContent: 'center',
    flexDirection: 'row',
    flexWrap: 'wrap',
  },
});

export default RecipeByCategory;
