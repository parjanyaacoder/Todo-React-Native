import React, { useEffect } from 'react';
import PropTypes from 'prop-types';
import { View, Pressable, Text } from 'react-native';
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
    useEffect(() => {
      dispatch(TodoActions.fetchRecentTodos())
    }, [])
  
  return (
  <View style={styles.bgStyles} >
    <View style={styles.top} >
      <View style={styles.container}>
      <ProgressView />
      <CategoriesList />
      </View>
    </View>
    <View style={styles.bottom} >
    <View style={styles.container}>
      <RecentTodos />
    </View>
     </View>
</View>
  );
};

HomePage.propTypes = {
 
};

HomePage.defaultProps = {

};

export default HomePage;