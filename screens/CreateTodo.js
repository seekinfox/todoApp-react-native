import { View, Text, Modal, StyleSheet } from 'react-native'
import React from 'react'
import Colors from '../utils/colors'
import CButton from '../components/common/CButton'
import { sizes } from '../utils/defaultSize'
import CreateTodoBody from '../components/CreateTodoBody'

export default function CreateTodo({openForm, setOpenForm, handletextChange, handleOnDone}) {
   console.log(openForm)
   const handleOnCancel = () => {
      setOpenForm({
         ...openForm,
         visible: false
      })
   }
   return (
   <Modal
      animationType={openForm.animation}
      visible={openForm.visible}
      // visible={true}
      transparent={true}
      onRequestClose={() => setOpenForm({
         ...openForm,
         visible: false
      })}
   >
      <View style={styles.createTodo__innerContainer}>
        <View style={styles.createTodo__cancelButton}>
            <CButton 
               onPress={handleOnCancel} 
               renderItem={() => <Text style={styles.cancelText}>Cancel</Text>} 
            />
        </View>
        <View style={styles.createTodo__innerTwo}>
            <Text style={styles.createTodo__title}>Task</Text>
            <CreateTodoBody handletextChange={handletextChange} handleOnDone={handleOnDone} />
         </View>
      </View>
   </Modal>
  )
}

const styles = StyleSheet.create({
   createTodo__modalContainer: {
     padding: 10,
     flex: 1,
     justifyContent:'center',
     alignItems:'center'
   },
   createTodo__innerContainer : {
      flex:1,
      backgroundColor: Colors.primaryBlue
   },
   createTodo__cancelButton: {
      alignSelf: 'flex-end',
      margin: 20
   },
   cancelText: {
      fontFamily: 'BorlowMedium',
      color: Colors.primaryWhite,
      fontSize: sizes.button,
   },
   createTodo__title: {
      fontFamily: 'BorlowMedium',
      color: Colors.primaryWhite,
      fontSize: sizes.mainTitle,
      letterSpacing: 2,
      marginBottom: 20,
   },
   createTodo__innerTwo: {
      flex: 1,
      paddingHorizontal: '15%',
   }
})