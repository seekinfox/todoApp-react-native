import { View, Text, StyleSheet, FlatList } from 'react-native'
import React from 'react'
import { Days } from '../utils/defaultLists'
import DaysTag from './common/DaysTag'


export default function TodoDays() {
  return (
    <View style={styles.tododays__container}>
      <FlatList
         horizontal
         data={Days}
         renderItem={({item}) => <DaysTag item={item} />}
      />
    </View>
  )
}

const styles = StyleSheet.create({
   tododays__container : {
      paddingVertical: '5%',
      paddingLeft: '10%',
      overflow: 'hidden'
   }
})