import React from 'react';
import { View, Pressable, Text } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import Screens from '../constants/Screens';

const CreateTodoPage = (props) => {
  const navigation = useNavigation();
  return (
    <View style={{ flex: 1, backgroundColor: "white", alignItems: "center", justifyContent:"center"  }} >
    <Pressable onPress={() => {
      navigation.navigate(Screens.DAILY_TODO_LIST_PAGE)
    }}>
        <Text>
            {"CreateTodoPage"}
        </Text>
    </Pressable>
</View>
  );
};

export default CreateTodoPage;