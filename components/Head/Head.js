import { View, Text, StyleSheet } from 'react-native'
import React from 'react'
import { FontAwesome5 } from '@expo/vector-icons'; 
import { Ionicons } from '@expo/vector-icons'; 
import CButton from '../common/CButton';

export default function Head() {
  return (
    <View style={styles.headContainer}>
      <View style={styles.head__innerOne}>
         <Text>Hello</Text>
         <Text>User</Text>
         <Text>Good Morning</Text>
      </View>
      <View style={styles.head__innerTwo}>
         <CButton
            renderItem={()=> <Ionicons name="settings" size={24} color="black" />}
         />
         <CButton
            renderItem={()=> <FontAwesome5 name="user-alt" size={24} color="black" />}
         />
      </View>
    </View>
  )
}

const styles = StyleSheet.create({
   headContainer: {
      borderWidth: 2,
      height: 200,
      flexDirection: 'row',
      padding: '10%' 
      },
   head__innerOne: {
      flex: 2,
      borderWidth: 1,
      borderColor:'blue',
      justifyContent:'space-evenly',
      alignItems: 'flex-start',
   }, 
   head__innerTwo : {
      flex: 1,
      borderWidth: 1,
      borderColor:'red',
      flexDirection:'row',
      justifyContent: 'flex-end'
   }
})