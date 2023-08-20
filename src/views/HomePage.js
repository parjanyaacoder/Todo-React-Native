import React from 'react';
import PropTypes from 'prop-types';
import { View, Pressable, Text } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import Screens from '../constants/Screens';
import styles from '../styles/HomePageStyles';
import ProgressView from '../components/ProgressView';

const HomePage = (props) => {
    const navigation = useNavigation();
  
  return (
    <View style={styles.container}>
      <ProgressView />
    <Pressable onPress={() => {
      navigation.navigate(Screens.TODO_DETAILS_PAGE)
    }}>
        <Text>
            {"HomePage"}
        </Text>
    </Pressable>
</View>
  );
};

HomePage.propTypes = {
 
};

HomePage.defaultProps = {

};

export default HomePage;