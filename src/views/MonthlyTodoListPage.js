import React from 'react';
import { View, Pressable, Text } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import Screens from '../constants/Screens';
import styles from '../styles/MonthlyTodoListPageStyles';

const MonthlyTodoListPage = (props) => {
  const navigation = useNavigation();
  return (
    <View style={styles.container}>
    <Pressable onPress={() => {
      navigation.navigate(Screens.HOME_PAGE)
    }}>
        <Text>
            {"MonthlyTodoListPage"}
        </Text>
    </Pressable>
</View>
  );
};

export default MonthlyTodoListPage;