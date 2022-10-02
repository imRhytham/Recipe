import React from 'react';
import {Text, StyleSheet, Image, TouchableOpacity} from 'react-native';

const RecipeCard = ({photo_url, title, category, onPress}) => {
  return (
    <TouchableOpacity style={styles.cardContainer} onPress={onPress}>
      <Image source={{uri: photo_url}} style={styles.image} />
      <Text style={styles.title}>{title}</Text>
      <Text style={styles.category}>{category}</Text>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  cardContainer: {
    margin: 10,
    width: 150,
    height: 175,
    backgroundColor: '#fff',
    alignItems: 'center',
    borderRadius: 10,
    borderWidth: 1,
    borderColor: '#D3D3D3',
    overflow: 'hidden',
  },
  image: {
    width: 150,
    height: 100,
    borderRadius: 10,
    resizeMode: 'cover',
  },
  title: {
    fontSize: 17,
    color: '#000',
    fontWeight: 'bold',
    paddingHorizontal: 3,
    textAlign: 'center',
  },
  category: {
    fontSize: 15,
    color: '#000',
    fontWeight: 'bold',
    position: 'absolute',
    bottom: 0,
  },
});

export default RecipeCard;
