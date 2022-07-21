import { View, Text, StyleSheet } from 'react-native'
import React, { useState } from 'react'
import { AntDesign } from '@expo/vector-icons';
import { sizes } from '../../utils/defaultSize';
import Colors from '../../utils/colors';
import { Ionicons } from '@expo/vector-icons';
import CButton from './CButton';

export default function TodoItem({item, handleRemoveItem}) {
   const [checked, setChecked] = useState({
      item: '',
      status: false
   })
   const handleOnChecked =()=> {
      setChecked(prev =>({...checked, item: item.key, status: !prev.status }))
   }

  return (
    <View style={styles.todoItem__container}>
      <View style={styles.todoItem__checkbox}>
         <CButton 
            onPress={handleOnChecked}
            renderItem={() => 
               <AntDesign name="checksquareo" size={26} color={
                  (checked.item === item.key && checked.status === true) ? 
                  Colors.WhiteOOFF : Colors.primaryWhite} 
               />}  
            />
      </View>
      <Text style={styles.todoItem__text}>
         <Text style={(checked.item === item.key && checked.status === true) && styles.checkedText}>
            {item.title}
         </Text>
      </Text>
      <View style={styles.todoItem__removeButton}>
         <CButton 
         onPress={() => handleRemoveItem(item.key)}
         renderItem={() => 
            <Ionicons 
               style={styles.removeIcon}
               name="remove-circle-outline" 
               size={24} color={Colors.primaryWhite} 
            />}  
         />
      </View>
    </View>
  )
}

const styles = StyleSheet.create({
   todoItem__container: {
      paddingVertical: 20,
      flexDirection: 'row',
      alignItems: 'center',
      paddingHorizontal: 20,
      marginBottom: 10,
      borderRadius: 15,
      backgroundColor: Colors.WhiteOOFF
   },
   todoItem__text: {
      color: Colors.WhiteOFF,
      fontSize: sizes.title,
      //fontfamily: 'BorlowMedium',
   },
   todoItem__checkbox: {
      marginRight: 15,
      opacity: .8,
      overflow:'hidden',
      color: 'white'
   },
   checkedText : {
      opacity: .2,
      color:Colors.WhiteOOFF
   },
   todoItem__removeButton : {
      alignSelf: 'flex-end',
      marginLeft:'auto',
   }
})