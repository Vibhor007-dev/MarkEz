import React, { Component } from 'react';
import { View, Text, TouchableOpacity, StyleSheet, Image } from 'react-native';
import AppHeader from '../components/AppHeader';
import db from '../config';

export default class HomeScreen extends React.Component {
  alex1pressed(){
    var alex1 = db.ref('alex/'+ '/');
    alex1.update({
      'absent':'true'
    })
  }
  alex2pressed(){
    var alex2 = db.ref('alex/'+'/');
    alex2.update({
      'present':'true'
    })
  }
  donald1pressed(){
    var donald1=db.ref('donald/'+'/');
    donald1.update({
      'absent':'true'
    })
  }
   donald2pressed(){
    var donald2=db.ref('donald/'+'/');
    donald2.update({
      'present':'true'
    })
   }

    peter1pressed(){
    var peter1=db.ref('peter/'+'/');
    peter1.update({
      'absent':'true'
    })
  }
  peter2pressed(){
    var peter2=db.ref('peter/'+'/');
    peter2.update({
      'present':'true'
    })
  }
  
  william1pressed(){
    var william1=db.ref('william/'+'/');
    william1.update({
      'absent':'true'
    })
  }
  william2pressed(){
    var william2=db.ref('william/'+'/');
    william2.update({
      'present':'true'
    })
  }
 
  
  
    goToBuzzerScreen = (buzzercolor) => {
    this.props.navigation.navigate('BuzzerScreen', { color: buzzercolor });
  };
  render() {
    return (
      <View>
        <AppHeader />

        <Text style={styles.studenChartContainer}>Alex</Text>
        <Text style={styles.studenChartContainer}>Donald</Text>
        <Text style={styles.studenChartContainer}>Peter</Text>
        <Text style={styles.studenChartContainer}>William</Text>


        <TouchableOpacity
          style={styles.button}
          onPress={() => {
            this.alex1pressed();
          }}>
          <Text style={styles.buttonText}>Absent</Text>
        </TouchableOpacity>

        <TouchableOpacity
          style={styles.button }
          onPress={() => {
            this.donald1pressed();
          }}>
          <Text style={styles.buttonText}>Absent</Text>
        </TouchableOpacity>

        <TouchableOpacity
          style={styles.button}
          onPress={() => {
               this.peter1pressed();
          }}>
          <Text style={styles.buttonText}>Absent</Text>
        </TouchableOpacity>

        <TouchableOpacity
          style={styles.button}
          onPress={() => {
             this.william1pressed();
          }}>
          <Text style={styles.buttonText}>Absent</Text>
        </TouchableOpacity>
        
           <TouchableOpacity
          style={styles.button2}
          onPress={() => {
           this.alex2pressed();
          }}>
          <Text style={styles.button2Text}>Present</Text>
        </TouchableOpacity>

        <TouchableOpacity
          style={styles.button2}
          onPress={() => {
             this.donald2pressed();
          }}>
          <Text style={styles.button2Text}>Present</Text>
        </TouchableOpacity>

        <TouchableOpacity
          style={styles.button2}
          onPress={() => {
              this.peter2pressed();
          }}>
          <Text style={styles.button2Text}>Present</Text>
        </TouchableOpacity>

        <TouchableOpacity
          style={styles.button2}
          onPress={() => {
              this.william2pressed();
          }}>
          <Text style={styles.button2Text}>Present</Text>
        </TouchableOpacity>
        
        <TouchableOpacity
          style={styles.button3}
          onPress={() => {
            this.goToBuzzerScreen('yellow');
          }}>
          <Text style={styles.button3Text}>Submit</Text>
        </TouchableOpacity>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1
  },
  text: {
    fontSize: 20,
    fontWeight: 'bold',
    marginTop: 30,
  },
  studenChartContainer: {
     flexDirection: 'row',
     padding: 10,
     alignItems: 'center',
     margin: 20
  },
  button: {
    justifyContent: 'center',
    alignSelf: 'center',
    borderWidth: 2,
    borderRadius: 5,
    marginTop: -99,
    marginBottom: 1,
    marginLeft: 200,
    
    width: 100,
    height: 30,
    backgroundColor: 'red'
  },
  buttonText: {
    textAlign: 'center',
    color: 'white',
  },
  button2: {
    justifyContent: 'center',
    alignSelf: 'center',
    borderWidth: 2,
    borderRadius: 5,
    marginBottom: 60,
   // marginTop: 10,
    marginLeft: -30,
    width: 100,
    height: 30,
    backgroundColor: 'green'
  },
  button2Text: {
    textAlign: 'center',
    color: 'white',
  },
  button3: {
    justifyContent: 'center',
    alignSelf: 'center',
    borderWidth: 2,
    borderRadius: 5,
    //marginBottom: 10,
   marginTop: 90,
    marginLeft: 40,
    width: 200,
    height: 50,
    backgroundColor: 'yellow',
  },
   button3Text: {
    textAlign: 'center',
    color: 'purple',
  },
 
});
