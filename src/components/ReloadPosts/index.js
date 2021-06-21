import React from 'react';
import {Pressable, Text} from 'react-native';
import {connect} from 'react-redux';
import {fetchData} from '../../actions';
import {FontAwesomeIcon} from '@fortawesome/react-native-fontawesome';
import {faRedoAlt} from '@fortawesome/free-solid-svg-icons';

function ReloadPosts({fetchData}) {
  return (
    <Pressable onPress={fetchData} style={{marginRight: 20}}>
      <FontAwesomeIcon icon={faRedoAlt} size={18} color="white" />
    </Pressable>
  );
}

const mapDispatchToProps = dispatch => {
  return {
    fetchData: () => dispatch(fetchData()),
  };
};
export default connect(null, mapDispatchToProps)(ReloadPosts);
