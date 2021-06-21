import React, {useState} from 'react';
import {Pressable, Text} from 'react-native';
import {connect} from 'react-redux';
import {addToFavorite, removeFavorite} from '../../actions';
import {FontAwesomeIcon} from '@fortawesome/react-native-fontawesome';
import {faStar as SolidStar} from '@fortawesome/free-solid-svg-icons';
import {faStar as RegularStar} from '@fortawesome/free-regular-svg-icons';

function SaveFavorite({data, addToFavorite, removeFavorite}) {
  const [isFavorite, setIsFavorite] = useState(data.data.isFavorite);
  return (
    <Pressable
      onPress={() => {
        isFavorite ? removeFavorite(data.data.id) : addToFavorite(data.data.id);
        setIsFavorite(!isFavorite);
      }}
      style={{marginRight: 10}}>
      <Text>
        {isFavorite ? (
          <FontAwesomeIcon icon={SolidStar} size={18} color={'#F1EB5E'} />
        ) : (
          <FontAwesomeIcon icon={RegularStar} size={18} color={'#F1EB5E'} />
        )}
      </Text>
    </Pressable>
  );
}

const mapDispatchToProps = dispatch => {
  return {
    addToFavorite: id => dispatch(addToFavorite(id)),
    removeFavorite: id => dispatch(removeFavorite(id)),
  };
};

export default connect(null, mapDispatchToProps)(SaveFavorite);
