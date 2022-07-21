import { View, Text, StyleSheet, FlatList } from 'react-native'
import React from 'react'
import { todos } from '../utils/defaultLists'
import TodoItem from './common/TodoItem'

export default function TodoList() {
   
  return (
    <View style={styles.todoList__container}>
      <FlatList
         data={todos}
         renderItem={({item}) => <TodoItem item={item} />}
      />
    </View>
  )
}

const styles = StyleSheet.create({
   todoList__container: {
      borderColor: 'red',
      paddingHorizontal: 20,
   }
})