import React from 'react';
import { View, Pressable, Text } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import Screens from '../constants/Screens';

const MonthlyTodoListPage = (props) => {
  const navigation = useNavigation();
  return (
    <View style={{ height: "100%", width: "100%", backgroundColor: "white", alignItems: "center", justifyContent:"center"  }} >
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