import React, {useEffect} from 'react';
import {View, Text, FlatList, Pressable, StyleSheet} from 'react-native';
import {fetchData, removeAllPosts} from '../../actions';
import {connect} from 'react-redux';
import {PostsItem} from '../../components';

function Posts({fetchData, removeAllPosts, data, navigation}) {
  useEffect(() => {
    fetchData();
  }, []);
  return (
    <>
      <View style={styles.container}>
        <FlatList
          ListEmptyComponent={<Text>No emails</Text>}
          data={data.data}
          keyExtractor={item => item.id}
          ItemSeparatorComponent={() => <View style={styles.separator}></View>}
          renderItem={({item}) => (
            <PostsItem data={item} navigation={navigation} />
          )}
        />
        <Pressable style={styles.deleteButton} onPress={removeAllPosts}>
          <Text style={styles.deleteText}>Delete All</Text>
        </Pressable>
      </View>
    </>
  );
}

const styles = StyleSheet.create({
  container: {position: 'relative', flex: 1, paddingBottom: 60},
  separator: {height: 0.5, backgroundColor: 'lightgray'},
  deleteButton: {
    position: 'absolute',
    bottom: 0,
    right: 0,
    left: 0,
    paddingVertical: 20,
    backgroundColor: '#D0011B',
  },
  deleteText: {textAlign: 'center', color: 'white'},
});

const mapStateToProps = state => {
  return {
    data: state.data,
  };
};

const mapDispatchToProps = dispatch => {
  return {
    fetchData: () => dispatch(fetchData()),
    removeAllPosts: () => dispatch(removeAllPosts()),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Posts);
