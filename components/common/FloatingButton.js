import { View, Text, TouchableOpacity, StyleSheet } from 'react-native'
import React from 'react'
import { Ionicons } from '@expo/vector-icons';
import Colors from '../../utils/colors';

export default function FloatingButton({handleOpenForm}) {
  return (
    <TouchableOpacity style={styles.floatingButton__container} onPress={handleOpenForm}>
      <View style={styles.floatingButton__innerContainer}>
         <Ionicons name="add" size={40} color={Colors.primaryBlue} />
      </View>
    </TouchableOpacity>
  )
}

const styles = StyleSheet.create({
   floatingButton__container: {
      width: 60,
      height: 60,
      backgroundColor: Colors.primaryWhite,
      borderRadius: 50,
      marginLeft: 30,
      marginBottom: 20
   },
   floatingButton__innerContainer: {
      width: '100%',
      height:'100%',
      justifyContent:'center',
      alignItems:'center'
   }
})