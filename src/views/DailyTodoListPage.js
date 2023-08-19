import React from 'react';
import { View, Pressable, Text } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import Screens from '../constants/Screens';

const DailyTodoListPage = (props) => {
  const navigation = useNavigation();
  return (
    <View style={{ height: "100%", width: "100%", backgroundColor: "white", alignItems: "center", justifyContent:"center"  }} >
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