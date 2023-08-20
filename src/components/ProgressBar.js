import React from 'react';
import { View, Text } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import styles from '../styles/ProgressBarStyles';
import PropTypes from 'prop-types';

const ProgressBar = (props) => {
  const navigation = useNavigation();
  
  const { title, completedTodosCount, allTodosCount } = props;
  const wd = 100 * completedTodosCount/allTodosCount
  return (
    <View style={styles.progressBox} >
       <Text style={styles.title}>
            {`${title}`}
        </Text>
    <View style={styles.progressBarContainer}>
        <Text style={styles.status} >
            {`${completedTodosCount}/${allTodosCount}`}
        </Text>
        <View style={styles.progressIndicatorStyles(wd)} />  
    </View>
    </View>
  );
};

ProgressBar.propTypes = {
  title: PropTypes.string.isRequired,
  completedTodosCount: PropTypes.number.isRequired,
  allTodosCount: PropTypes.number.isRequired
};

ProgressBar.defaultProps = {
};

export default ProgressBar;