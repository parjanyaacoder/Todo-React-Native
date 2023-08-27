import React from 'react';
import { Text, View } from 'react-native';
import { FlatList } from 'react-native-gesture-handler';
import TodoItem from './TodoItem';
import { ScrollView } from 'react-native-gesture-handler';
import { useSelector } from 'react-redux';
import TodoSelectors from '../selectors/todo';

const RecentTodos = () => {
  const data = useSelector(TodoSelectors.getRecentTodos)

  const renderItem = ({item}) => {
    const { title, description } = item
    return <TodoItem title={title} description={description}
        onDelete={() => {}} onEdit={() => {}} changeCheckboxStatus={() => {}}
    />
  }

  const renderHeaderComponent = () => (
    <Text style={{ marginBottom: 8 }} >{"Recent Todos"}</Text>
  )

  const renderItemSeparator = () => (
    <View style={{ height: 3, backgroundColor: "#ffffff", width: "100%", marginVertical: 12, borderRadius: 12 }} />
  )


  return (
      <FlatList
      data={data}
      keyboardShouldPersistTaps={"always"}
      contentContainerStyle={{ width: "100%" }}
      style={{ width: "100%" }}
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