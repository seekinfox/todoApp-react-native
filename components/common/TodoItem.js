import { View, Text, StyleSheet } from 'react-native'
import React, { useState } from 'react'
import { CheckBox } from 'react-native';
import { sizes } from '../../utils/defaultSize';
import Colors from '../../utils/colors';

export default function TodoItem({item}) {
   const [checked, setChecked] = useState({
      item: '',
      status: false
   })
   const handleOnChecked =()=> {
      setChecked(prev =>({...checked, item: item.key, status: !prev.status }))
   }
   console.log(checked)

  return (
    <View style={styles.todoItem__container}>
      <CheckBox
         disabled={false}
         value={checked.status}
         onValueChange={handleOnChecked}
         style={styles.todoItem__checkbox}
      />
      <Text style={styles.todoItem__text}>
         <Text style={(checked.item === item.key && checked.status === true) && styles.checkedText}>
            {item.title}
         </Text>
      </Text>
    </View>
  )
}

const styles = StyleSheet.create({
   todoItem__container: {
      paddingVertical: 30,
      flexDirection: 'row',
      alignItems: 'center',
      paddingHorizontal: 20,
   },
   todoItem__text: {
      color: Colors.WhiteOFF,
      fontSize: sizes.title
   },
   todoItem__checkbox: {
      marginRight: 15,
      width: 30,
      height: 30,
      opacity: .8,
      overflow:'hidden',
      color: 'white'
   },
   checkedText : {
      opacity: .5,
      textDecorationLine: 'line-through',
      textDecorationColor: Colors.primaryBlue,
      textDecorationStyle:'solid'
   }
})