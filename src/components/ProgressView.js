import React from 'react';
import { View, Text } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import styles from '../styles/ProgressViewStyles';
import ProgressBar from './ProgressBar';

const ProgressView = (props) => {
  const navigation = useNavigation();
  return (
    <View style={styles.container}>
        <Text>
            {"Progress"}
        </Text>
        <View style={styles.contentStyles} >
            <ProgressBar title={"Daily"} completedTodosCount={4} allTodosCount={10} />
            <View style={styles.width8} />
            <ProgressBar title={"Weekly"} completedTodosCount={5} allTodosCount={20}  />
        </View>
        <View style={styles.contentStyles} >
        <ProgressBar title={"Monthly"} completedTodosCount={8} allTodosCount={10} />  
        </View>
    </View>
  );
};

export default ProgressView;