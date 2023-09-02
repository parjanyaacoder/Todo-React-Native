import React from 'react';
import { Text, View } from 'react-native';
import { FlatList } from 'react-native-gesture-handler';
import TodoItem from './TodoItem';
import { ScrollView } from 'react-native-gesture-handler';
import { useSelector } from 'react-redux';
import TodoSelectors from '../selectors/todo';
import styles from '../styles/RecentTodosStyles';

const RecentTodos = () => {
  const data = useSelector(TodoSelectors.getRecentTodos)

  const renderItem = ({item}) => {
    const { title, description } = item
    return <TodoItem title={title} description={description}
        onDelete={() => {}} onEdit={() => {}} changeCheckboxStatus={() => {}}
    />
  }

  const renderHeaderComponent = () => (
    <Text style={styles.marginBtn8} >{"Recent Todos"}</Text>
  )

  const renderItemSeparator = () => (
    <View style={styles.itemSeparator} />
  )


  return (
      <FlatList
      data={data}
      keyboardShouldPersistTaps={"always"}
      contentContainerStyle={styles.fullWidth}
      style={styles.flatlistStyle}
      renderItem={renderItem}
      scrollEnabled
      ListFooterComponent={renderItemSeparator}
      ItemSeparatorComponent={renderItemSeparator}
      ListHeaderComponent={renderHeaderComponent}
      keyExtractor={(item) => item.id}
    />
  );
};

export default RecentTodos;