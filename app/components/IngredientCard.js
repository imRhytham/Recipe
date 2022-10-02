import {useNavigation} from '@react-navigation/native';
import React from 'react';
import {TouchableOpacity, StyleSheet, Image, Text, View} from 'react-native';

const IngredientCard = ({ingredients}) => {
  const navigation = useNavigation();
  return (
    <View style={styles.container}>
      {ingredients?.map((ingredient, index) => {
        return (
          <TouchableOpacity
            onPress={() => {
              navigation.navigate('Recipe by Ingredient', {
                ingredient,
                title: ingredient.name,
              });
            }}
            style={styles.cardContainer}
            key={ingredient.ingredientId}>
            <Image source={{uri: ingredient.photo_url}} style={styles.image} />
            <Text style={styles.title}>{ingredient.name}</Text>
            <Text style={styles.quantity}>{ingredient.name}</Text>
          </TouchableOpacity>
        );
      })}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    width: '100%',
    height: '100%',
    flexDirection: 'row',
    flexWrap: 'wrap',
  },
  cardContainer: {
    margin: 10,
    width: 100,
    height: 150,
    backgroundColor: '#fff',
    flexDirection: 'column',
    alignItems: 'center',
    overflow: 'hidden',
  },
  image: {
    width: 100,
    height: 100,
    borderRadius: 50,
    resizeMode: 'cover',
  },
  title: {
    color: '#000',
    fontSize: 15,
    fontWeight: 'bold',
    paddingHorizontal: 3,
    textAlign: 'center',
  },
  quantity: {
    fontSize: 10,
    color: '#D6D6D6',
    fontWeight: 'bold',
    position: 'absolute',
    bottom: 0,
  },
});

export default IngredientCard;
