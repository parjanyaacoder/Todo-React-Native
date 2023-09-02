import React, { useEffect } from 'react';
import PropTypes from 'prop-types';
import { View, Text, TouchableOpacity } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import Screens from '../constants/Screens';
import styles from '../styles/HomePageStyles';
import ProgressView from '../components/ProgressView';
import CategoriesList from '../components/CategoriesList';
import RecentTodos from '../components/RecentsTodos';
import { useDispatch } from 'react-redux';
import TodoActions from '../actions/todo';

const HomePage = (props) => {
    const navigation = useNavigation();
    const dispatch = useDispatch()

    const onFabPress = () => {
      console.log("ParjantaPress")
      navigation.navigate(Screens.CREATE_TODO_PAGE)
    }

    useEffect(() => {
      dispatch(TodoActions.fetchRecentTodos())
    }, [])
  
  return (
  <View style={styles.bgStyles} >
    <View style={styles.container}>
      <ProgressView />
      <CategoriesList />
    </View>
    <View style={styles.bottom} >
    <View style={styles.bottomContainer}>
      <RecentTodos />
    </View>
     </View>
     <TouchableOpacity onPress={onFabPress} style={styles.fabBtn} >
      <View >
      <Text style={styles.addIcon} >
        {'+'}
      </Text>
      </View>
    </TouchableOpacity>
    
</View>
  );
};

HomePage.propTypes = {
 
};

HomePage.defaultProps = {

};

export default HomePage;