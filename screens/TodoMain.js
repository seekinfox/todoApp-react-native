import { View, Text, StyleSheet, Modal } from 'react-native'
import React from 'react'
import Head from '../components/Head'
import TodoDays from '../components/TodoDays'
import TodoList from '../components/TodoList'
import FloatingButton from '../components/common/FloatingButton'
import CreateTodo from './CreateTodo'

export default function TodoMain() {
   const [openForm, setOpenForm] = useState({
      animation: 'slide',
      visible: 'false',
   })
   const handleOpenForm =() => {
      setOpenForm({...openForm, visible: true})
   }


  return (
    <View style={styles.todoMain__container}>
     <View style={styles.todoMain__innerTop}>
         <Head />
         <TodoDays />
      </View>
      <View style={styles.todoMain__innerBottom}>
         <TodoList />
      </View>
      <FloatingButton handleOpenForm={handleOpenForm} />
      <CreateTodo openForm={openForm} setOpenForm={setOpenForm} />
    </View>
  )
}

const styles = StyleSheet.create({
   todoMain__container: {
      flex: 1,
      display: 'relative'
   },
   todoMain__innerBottom: {
      flex: 1,
      overflow:'scroll'
   },
})