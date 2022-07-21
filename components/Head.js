import { View, Text, StyleSheet } from 'react-native'
import React from 'react'
import { FontAwesome5 } from '@expo/vector-icons'; 
import { Ionicons } from '@expo/vector-icons'; 
import CButton from './common/CButton';
import Colors from '../utils/colors';
import { sizes } from '../utils/defaultSize';

export default function Head() {
  return (
    <View style={styles.headContainer}>
      <View style={styles.head__innerOne}>
         <Text style={styles.head__textTitle}>Hello</Text>
         <Text style={styles.head__textTitle}>User</Text>
         <Text style={styles.head__textSubtitle}>Good Morning</Text>
      </View>
      <View style={styles.head__innerTwo}>
         <CButton
            renderItem={()=> 
               <Ionicons name="settings" size={33} color={Colors.WhiteOFF} 
            />}
         />
         <CButton
            renderItem={()=> 
               <FontAwesome5 name="user-alt" size={33} color={Colors.WhiteOFF} 
            />}
         />
      </View>
    </View>
  )
}

const styles = StyleSheet.create({
   headContainer: {
      flexDirection: 'row',
      paddingHorizontal: 10,
      paddingTop: '15%',
      paddingBottom: 10, 
      },
   head__innerOne: {
      flex: 2,
      justifyContent:'space-evenly',
      alignItems: 'flex-start',
      paddingLeft: 30
   }, 
   head__innerTwo : {
      flex: 1,

      flexDirection:'row',
      justifyContent: 'flex-end',
      alignItems: 'flex-start',
   },
   head__textTitle: {
      textTransform:'uppercase',
      letterSpacing: 3,
      fontSize: sizes.mainTitle,
      //fontfamily: 'BorlowMedium',
      fontWeight: 'bold',
      color: Colors.primaryWhite
   },
   head__textSubtitle: {
      //fontfamily: 'BorlowLight',
      fontWeight: 'bold',
      fontSize: sizes.title,
      color: Colors.BlackOFF,
      marginTop: 6,
      color: Colors.WhiteOFF,
      letterSpacing: 2
   }
})