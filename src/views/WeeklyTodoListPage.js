import React from 'react';
import { View, Pressable, Text } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import Screens from '../constants/Screens';
import styles from '../styles/WeelyTodoListPageStyles';

const WeeklyTodoListPage = (props) => {
  const navigation = useNavigation();
  return (
    <View style={styles.container}>
    <Pressable onPress={() => {
      navigation.navigate(Screens.MONTHLY_TODO_LIST_PAGE)
    }}>
        <Text>
            {"WeeklyTodoListPage"}
        </Text>
    </Pressable>
</View>
  );
};

export default WeeklyTodoListPage;