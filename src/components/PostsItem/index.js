import React from 'react';
import {Pressable, View, Text, StyleSheet} from 'react-native';
import {FontAwesomeIcon} from '@fortawesome/react-native-fontawesome';
import {faStar} from '@fortawesome/free-solid-svg-icons';

function PostsItem({navigation, data}) {
  return (
    <Pressable
      key={data.id}
      style={styles.containerItem}
      onPress={() => {
        navigation.navigate('Post', {data: data});
      }}>
      {!data.read && (
        <View style={styles.containerDot}>
          <Text style={styles.dotRead}></Text>
        </View>
      )}
      <Text style={styles.titleEmail}>{data.title}</Text>
      <View style={{width: 25}}>
        {data.isFavorite && (
          <FontAwesomeIcon icon={faStar} size={25} color={'#F1EB5E'} />
        )}
      </View>
    </Pressable>
  );
}

const styles = StyleSheet.create({
  containerItem: {
    marginVertical: 5,
    flexDirection: 'row',
    flex: 1,
    alignItems: 'center',
    paddingHorizontal: 10,
  },
  containerDot: {justifyContent: 'center', paddingHorizontal: 6},
  dotRead: {
    width: 10,
    height: 10,
    backgroundColor: '#007DFC',
    borderRadius: 5,
    overflow: 'hidden',
  },
  titleEmail: {
    color: '#515151',
    flexWrap: 'wrap',
    flex: 1,
    marginRight: 10,
  },
});

export default PostsItem;
