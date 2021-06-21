import React, {useState, useEffect} from 'react';
import {ActivityIndicator, Text, View, StyleSheet} from 'react-native';
import {FlatList} from 'react-native-gesture-handler';
import {connect} from 'react-redux';
import {postRead} from '../../actions';
import {fetchComments, fetchUser} from '../../api';

function Post({postRead, route: {params}}) {
  const [user, setUser] = useState(false);
  const [comments, setComments] = useState(false);
  useEffect(() => {
    postRead(params.data.id);
    fetchUser(params.data.userId).then(data => setUser(data[1]));
    fetchComments(params.data.id).then(data => setComments(data[1]));
  }, []);
  return !user && !comments ? (
    <ActivityIndicator size="large" color="#0CAD10" />
  ) : (
    <View style={styles.container}>
      <Text style={styles.title}>Description</Text>
      <Text style={styles.paragraph}>{params.data.body}</Text>
      <Text style={styles.title}>User</Text>
      <Text style={styles.paragraph}>{user.name}</Text>
      <Text style={styles.paragraph}>{user.email}</Text>
      <Text style={styles.paragraph}>{user.phone}</Text>
      <Text style={styles.paragraph}>{user.website}</Text>
      <Text style={styles.commentsTitle}>COMMENTS</Text>
      <FlatList
        data={comments}
        renderItem={({item}) => {
          return <Text style={styles.comment}>{item.body}</Text>;
        }}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {flex: 1},
  title: {
    fontWeight: 'bold',
    fontSize: 18,
    marginVertical: 10,
    marginLeft: 10,
  },
  paragraph: {
    color: '#515151',
    marginHorizontal: 10,
  },
  commentsTitle: {
    fontWeight: 'bold',
    backgroundColor: 'lightgray',
    paddingLeft: 10,
    paddingVertical: 4,
    marginTop: 15,
  },
  comment: {
    color: '#515151',
    paddingHorizontal: 10,
    marginTop: 14,
    paddingBottom: 7,
    borderBottomWidth: 1,
    borderBottomColor: 'lightgray',
  },
});

const mapDispatchToProps = dispatch => {
  return {
    postRead: data => dispatch(postRead(data)),
  };
};
export default connect(null, mapDispatchToProps)(Post);
