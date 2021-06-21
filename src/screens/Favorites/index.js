import React from 'react';
import {View, Pressable, Text} from 'react-native';
import {connect} from 'react-redux';

function Favorites({data, navigation}) {
  return data.favorites.length > 0 ? (
    <View style={{padding: 10}}>
      {data.favorites.map(item => (
        <Pressable
          onPress={() => {
            navigation.navigate('Post', {data: item});
          }}>
          <Text>{item.title}</Text>
        </Pressable>
      ))}
    </View>
  ) : (
    <Text>No favorites</Text>
  );
}

const mapStateToProps = state => ({data: state.data});

export default connect(mapStateToProps, null)(Favorites);
