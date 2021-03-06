import React, { Component } from 'react'
import { View,
         TouchableOpacity,
         Text,
         StyleSheet,
         TextInput,
         KeyboardAvoidingView
       } from 'react-native'
import SubmitButton from './SubmitButton'
import { connect } from 'react-redux'
import { addDeck } from '../actions'
import { saveDeckTitle } from '../utils/helpers'
import { NavigationActions } from 'react-navigation'


class NewDeckView extends Component {

  state = {
    deckTitle: '',
  }

  submit = () => {
    const { deckTitle } = this.state
    const { dispatch } = this.props

    //add title to decks in redux
    dispatch(addDeck(deckTitle))
    //save deck title in asyncStorage
    saveDeckTitle(deckTitle)

    this.toNewDeck(deckTitle)
    //clear the state of deckTitle after successful submition
    this.setState(() => ({
      deckTitle: ''
    }))
  }

  toNewDeck = (deckTitle) => {
    this.props.navigation.navigate('IndividualDeckView', { title:  deckTitle})
  }



  render(){

    console.log('props',this.props)

    return (
      <View style={styles.container}>
        <Text style={{fontSize: 25, padding:20, textAlign:'center'}}>What is the title of your new deck?</Text>
        <TextInput
          style={styles.input}
          onChangeText={(deckTitle) => this.setState({deckTitle})}
          value={this.state.deckTitle}
          >
        </TextInput>
        <SubmitButton onPress={this.submit} text={"SUBMIT"}/>
      </View>
    )
  }

}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',

  },
  input : {
    width: 200,
    height: 44,
    padding: 8,
    borderWidth: 1,
    borderColor: '#757575',
    margin:20
  },
})

export default connect()(NewDeckView)
