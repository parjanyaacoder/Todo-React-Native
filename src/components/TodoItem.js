
import React from 'react';
import { View, Text, Pressable } from 'react-native';
import PropTypes from 'prop-types';
import { useNavigation } from '@react-navigation/native';
import { Screen } from 'react-native-screens';
import Screens from '../constants/Screens';

const TodoItem = (props) => {

    const navigation = useNavigation()

    const { title, description, changeCheckboxStatus,
        onEdit, onDelete } = props;

    const onTodoPress = () => {
        navigation.navigate(Screens.TODO_DETAILS_PAGE, { item })
    }    

  return (
    <View style={{ flexDirection: 'row' }}>
      <View>
        {/* Checkbox */}
      </View>
      <Pressable onPress={onTodoPress} >
        <Text>{title}</Text>
        <Text>{description}</Text>
      </Pressable>
      <View style={{ flexDirection: 'row' }}>
        {/* Icons */}
      </View>
    </View>
  );
};

TodoItem.propTypes = {
    title: PropTypes.string.isRequired,
    description: PropTypes.string.isRequired,
    changeCheckboxStatus: PropTypes.func.isRequired,
    onEdit: PropTypes.func.isRequired,
    onDelete: PropTypes.func.isRequired,
}


export default TodoItem;
