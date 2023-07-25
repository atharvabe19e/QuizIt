import React from 'react'
import { StyleSheet, Text, View,TouchableOpacity } from 'react-native'

const Quiz = ({navigation}) => {
  return (
    <View style={styles.container}>
      <View style={styles.top}>
      <Text style={styles.question}>Question</Text>
      </View>
    
      <View  style={styles.options}>
      <TouchableOpacity style={styles.optionButtom}>
        <Text style={styles.option}>
          Option1
          </Text>
      </TouchableOpacity>
      <TouchableOpacity style={styles.optionButtom}>
        <Text style={styles.option}>
          Option1
          </Text>
      </TouchableOpacity>
      <TouchableOpacity style={styles.optionButtom}>
        <Text style={styles.option}>
          Option1
          </Text>
      </TouchableOpacity>
      <TouchableOpacity style={styles.optionButtom}>
        <Text style={styles.option}>
          Option1
          </Text>
      </TouchableOpacity>
      </View>
    <View style={styles.bottom}>
    {/*   <TouchableOpacity style={styles.button}>
        <Text style={styles.buttonText}>SKIP</Text>
      </TouchableOpacity>
      <TouchableOpacity style={styles.button}>
        <Text style={styles.buttonText}>NEXT</Text>
      </TouchableOpacity>
    */}
       <TouchableOpacity 
      onPress={() => navigation.navigate('Result')} style={styles.button}>
        <Text style={styles.buttonText}>END</Text>
      </TouchableOpacity>
</View> 
    </View>
   
  )
}

export default Quiz

const styles = StyleSheet.create({
  container: {
    paddingTop: 40,
    paddingHorizontal: 20,
    height: '100%',
  },
  top: {
    marginVertical: 16,
  },
  options: {
    marginVertical: 16,
    flex: 1,
  },
  bottom: {
    marginBottom: 12,
    paddingVertical: 16,
    justifyContent: 'center',
    flexDirection: 'row',

  },
  button: {
    backgroundColor: '#1A759F',
    padding: 12,
    paddingHorizontal: 16,
    borderRadius: 16,
    alignItems: 'center',
    marginBottom: 30,
    width:'40%'
  },
  buttonText: {
    fontSize: 18,
    fontWeight: '600',
    color: 'white',
  },
  question: {
    fontSize: 28,
  },
  option: {
    fontSize: 18,
    fontWeight: '500',
    color: 'white',
  },
  optionButtom: {
    paddingVertical: 12,
    marginVertical: 6,
    backgroundColor: '#34A0A4',
    paddingHorizontal: 12,
    borderRadius: 12,
  },
})