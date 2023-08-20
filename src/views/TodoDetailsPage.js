import React from 'react';
import { View, Pressable, Text } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import Screens from '../constants/Screens';
import styles from '../styles/TodoDetailsPageStyles';

const TodoDetailsPage = (props) => {
  const navigation = useNavigation();
  return (
    <View style={styles.container}>
    <Pressable onPress={() => {
      navigation.navigate(Screens.CREATE_TODO_PAGE)
    }}>
        <Text>
            {"TodoDetailsPage"}
        </Text>
    </Pressable>
</View>
  );
};

export default TodoDetailsPage;