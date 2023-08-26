import React from 'react';
import { Text, View } from 'react-native';
import { FlatList } from 'react-native-gesture-handler';
import TodoItem from './TodoItem';
import { ScrollView } from 'react-native-gesture-handler';

const RecentTodos = () => {
  const data = [
    { id: '1', title: 'Task 1', description: "Task 1" },
    { id: '2', title: 'Task 2', description: "Task 2" },
    { id: '3', title: 'Task 3', description: "Task 3" },
    { id: '4', title: 'Task 4', description: "Task 4" },
    { id: '5', title: 'Task 5', description: "Task 5" },
    { id: '6', title: 'Task 6', description: "Task 6" },
    { id: '7', title: 'Task 7', description: "Task 7" },
    { id: '8', title: 'Task 8', description: "Task 8" },
    { id: '9', title: 'Task 9', description: "Task 9" },
    { id: '10', title: 'Task 1', description: "Task 10" },
    { id: '11', title: 'Task 2', description: "Task 11" },
    { id: '12', title: 'Task 3', description: "Task 12" },
    { id: '13', title: 'Task 1', description: "Task 13" },
    { id: '14', title: 'Task 2', description: "Task 14" },
    { id: '15', title: 'Task 3', description: "Task 15" },
    { id: '16', title: 'Task 1', description: "Task 16" },
    { id: '17', title: 'Task 2', description: "Task 17" },

  ]

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