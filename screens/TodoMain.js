import { View, Text } from 'react-native'
import React from 'react'
import Head from '../components/Head'
import TodoDays from '../components/TodoDays'

export default function TodoMain() {
  return (
    <View>
      <Head />
      <TodoDays />
    </View>
  )
}