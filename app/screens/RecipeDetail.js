import React from 'react';
import {
  View,
  StyleSheet,
  Text,
  Pressable,
  ScrollView,
  TouchableOpacity,
} from 'react-native';
import ImageCarousel from '../components/ImageCarousel';
import {recipes, categories} from '../data';
import Icon from 'react-native-vector-icons/MaterialIcons';

const RecipeDetail = ({route, navigation}) => {
  const {recipe} = route.params;
  recipes.forEach(item => {
    categories.forEach(category => {
      if (item.categoryId === category.id) {
        item.category = category.name;
      }
    });
  });
  return (
    <View style={styles.container}>
      <TouchableOpacity
        title="Go Back"
        onPress={() => navigation.goBack()}
        style={styles.backButton}>
        <Icon name="chevron-left" size={30} color="#76D49C" />
      </TouchableOpacity>
      <View style={styles.carouselContainer}>
        <ImageCarousel photosArray={recipe.photosArray} />
      </View>
      <ScrollView contentContainerStyle={styles.detailContainer}>
        <Text style={styles.title}>{recipe.title}</Text>
        <Text style={styles.category}>{recipe.category}</Text>
        <Text style={styles.time}>{recipe.time} minutes</Text>
        <Pressable
          style={styles.buttonStyle}
          onPress={() =>
            navigation.navigate('Ingredient Details', {
              recipeIngredients: recipe.ingredients,
              title: recipe.title,
            })
          }>
          <Text style={styles.buttonTextStyle}>View ingredients</Text>
        </Pressable>
        <Text style={styles.description}>{recipe.description}</Text>
      </ScrollView>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#fff',
    flex: 1,
  },
  backButton: {
    backgroundColor: '#fff',
    width: 50,
    height: 50,
    position: 'absolute',
    top: 40,
    left: 20,
    borderRadius: 25,
    justifyContent: 'center',
    alignItems: 'center',
    zIndex: 100,
  },
  carouselContainer: {
    height: 300,
  },
  detailContainer: {
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  title: {
    fontSize: 25,
    color: '#000',
    fontWeight: 'bold',
    textAlign: 'center',
    margin: 10,
  },
  category: {
    fontSize: 18,
    textAlign: 'center',
    color: '#76D49C',
    fontWeight: 'bold',
    margin: 5,
  },
  time: {
    fontSize: 16,
    color: '#FF6347',
    textAlign: 'center',
    fontWeight: 'bold',
    padding: 10,
  },
  buttonStyle: {
    width: 250,
    height: 50,
    alignItems: 'center',
    justifyContent: 'center',
    paddingVertical: 12,
    paddingHorizontal: 32,
    borderRadius: 100,
    borderWidth: 1,
    borderColor: '#76D49C',
    backgroundColor: 'white',
  },
  buttonTextStyle: {
    color: '#76D49C',
    fontWeight: 'bold',
    textAlign: 'center',
  },
  description: {
    fontSize: 16,
    color: '#000',
    textAlign: 'left',
    padding: 10,
    marginHorizontal: 10,
  },
});

export default RecipeDetail;
