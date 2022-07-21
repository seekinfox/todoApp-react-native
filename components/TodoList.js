import { View, StyleSheet, FlatList } from 'react-native'
import React from 'react'
import TodoItem from './common/TodoItem'

export default function TodoList({todos, handleRemoveItem}) {
   
  return (
    <View style={styles.todoList__container}>
      <FlatList
         data={todos}
         renderItem={({item}) => <TodoItem item={item} handleRemoveItem={handleRemoveItem} />}
      />
    </View>
  )
}

const styles = StyleSheet.create({
   todoList__container: {
      flex: 1,
      paddingHorizontal: 30,
   }
})