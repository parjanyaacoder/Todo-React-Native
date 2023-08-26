import React from 'react';
import { View, Text, Pressable } from 'react-native';
import styles from '../styles/CategoriesListStyles';
import Screens from '../constants/Screens';
import { useNavigation } from '@react-navigation/native';

const CategoriesList = () => {

  const navigation = useNavigation()

  const navigateToDailyTodosPage = () => {
    navigation.navigate(Screens.DAILY_TODO_LIST_PAGE)
  }
  const navigateToWeeklyTodosPage = () => {
    navigation.navigate(Screens.WEEKLY_TODO_LIST_PAGE)
  }  
  const navigateToMonthlyTodosPage = () => {
    navigation.navigate(Screens.MONTHLY_TODO_LIST_PAGE)
  }  

  return ( 
   <View style={styles.container} > 
    <Text>Todo Categories</Text>
    <View style={styles.categoriesContainer}>
      <Pressable onPress={navigateToDailyTodosPage} style={styles.category("blue")}>
        <Text>Daily</Text>
      </Pressable>
        <View style={styles.width16} />
      <Pressable onPress={navigateToWeeklyTodosPage} style={styles.category("red")}>
        <Text>Weekly</Text>
      </Pressable>
      <View style={styles.width16}/>      
      <Pressable onPress={navigateToMonthlyTodosPage} style={styles.category("pink")}>
        <Text>Monthly</Text>
      </Pressable>
    </View>
   </View> 
  );
};

export default CategoriesList;

