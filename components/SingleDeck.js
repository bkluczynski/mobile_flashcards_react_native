import React from 'react'
import { TouchableOpacity, Text, StyleSheet, View} from 'react-native'
import { List, ListItem } from 'react-native-elements'
import IndividualDeckView from './IndividualDeckView'


const SingleDeck = ({title, onPress, cardsCounter}) => {
  return (

    <ListItem
        key={title}
        title={title}
        onPress={onPress}
        subtitle={`Cards: ${cardsCounter}`}
        titleStyle={{textAlign:'center', fontSize:24, paddingTop:30}}
        subtitleStyle={{textAlign:'center', paddingBottom:30}}
      />
  )
}



export default SingleDeck;
