import { View, Text, StyleSheet, TextInput } from 'react-native'
import React from 'react'
import { Foundation } from '@expo/vector-icons';
import Colors from '../utils/colors';
import { sizes } from '../utils/defaultSize';
import { TouchableOpacity } from 'react-native-web';

export default function CreateTodoBody({handletextChange, handleOnDone}) {
  return (
    <View style={styles.createTodoBody__container}>
      <View style={styles.createTodoBody__textInput}>
         <TextInput
            autoCorrect
            multiline
            selectionColor={Colors.primaryBlue}
            style={styles.textInput}
            placeholder='Type Here...'
            onChangeText={handletextChange}
         />
      </View>
      <View style={styles.createTodoBody__innerOne}>
         <Foundation name="calendar" size={50} color={Colors.primaryWhite} />
         <Text style={styles.innerDateText}>21/07/2022</Text>
      </View>
      <View style={styles.createTodoBody__doneButtonContainer}>
         <TouchableOpacity style={styles.doneButton} onPress={handleOnDone}>
               <Text style={styles.DoneText}>Done</Text>
         </TouchableOpacity>
      </View>
    </View>
  )
}
const styles = StyleSheet.create({
   createTodoBody__container: {
      flex: 1
   },
   createTodoBody__innerOne: {
      flexDirection: 'row',
      alignItems: 'center'
   },
   innerDateText: {
      fontFamily: 'BorlowMedium',
      fontSize: sizes.subTitle,
      color: Colors.WhiteOFF,
      marginLeft: 20,
      letterSpacing: 1,
   },
   createTodoBody__textInput : {
      marginBottom: 20
   },
   textInput: {
      color: Colors.WhiteOFF,
      fontSize: sizes.title,
      padding: 10,
      fontFamily: 'BorlowLight',
   },
   createTodoBody__doneButtonContainer : {
      flex: 1,
      justifyContent: 'center',
      alignItems: 'center'
   },
   doneButton : {
      width: 130,
      height: 130,
      justifyContent:  'center',
      alignItems: 'center',
      backgroundColor: Colors.primaryWhite,
      borderRadius: '50%'
   },
   DoneText: {
      fontSize: sizes.title,
      color: Colors.primaryBlue,
      fontFamily: "BorlowLight"
   }
})