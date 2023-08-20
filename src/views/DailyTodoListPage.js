import React from 'react';
import { View, Pressable, Text } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import Screens from '../constants/Screens';
import styles from '../styles/DailyTodoListPageStyles';

const DailyTodoListPage = (props) => {
  const navigation = useNavigation();
  return (
        <View style={styles.container}>
        <Pressable onPress={() => {
           navigation.navigate(Screens.WEEKLY_TODO_LIST_PAGE)
        }}>
            <Text>
                {"DailyTodoListPage"}
            </Text>
        </Pressable>
    </View>
  );
};

export default DailyTodoListPage;