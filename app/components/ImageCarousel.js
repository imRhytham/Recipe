import React, {useState} from 'react';
import {View, StyleSheet, Image, ScrollView, Dimensions} from 'react-native';

const {width} = Dimensions.get('window');
const height = width * 0.8;

const ImageCarousel = ({photosArray}) => {
  const [active, setActive] = useState(0);
  const handleScroll = e => {
    const index = Math.ceil(e.nativeEvent.contentOffset.x / width);
    if (index !== active) {
      setActive(index);
    }
  };
  return (
    <View style={styles.container}>
      <ScrollView
        horizontal
        onScroll={e => handleScroll(e)}
        style={styles.scroll}
        pagingEnabled
        showsHorizontalScrollIndicator={false}>
        {photosArray.map((image, index) => (
          <Image key={index} source={{uri: image}} style={styles.image} />
        ))}
      </ScrollView>
      <View style={styles.pagination}>
        {photosArray.map((i, k) => (
          <View
            key={k}
            style={k === active ? styles.pagingActiveText : styles.pagingText}
          />
        ))}
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    width,
    height,
    overflow: 'hidden',
    position: 'absolute',
    top: 0,
  },
  scroll: {
    width,
    height,
  },
  image: {
    width,
    height,
    resizeMode: 'cover',
  },
  pagination: {
    flexDirection: 'row',
    position: 'absolute',
    top: 275,
    alignSelf: 'center',
  },
  pagingText: {
    width: 6,
    height: 6,
    borderRadius: 3,
    margin: 3,
    backgroundColor: '#888',
  },

  pagingActiveText: {
    width: 6,
    height: 6,
    borderRadius: 3,
    margin: 3,
    backgroundColor: '#fff',
  },
});

export default ImageCarousel;
