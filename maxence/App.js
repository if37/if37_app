import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Button, TouchableOpacity, Image,  } from 'react-native';
import DropdownComponent from './Components/DropdownComponent';

export default function App() {
  return (
    <View style={styles.container}>
      <TouchableOpacity style={styles.button}>
      <Image style={styles.backImage} source={require('./assets/left-arrow.png')}/>
      </TouchableOpacity>
      <DropdownComponent></DropdownComponent>
      <View style={styles.btnGroup}>
        <TouchableOpacity style={styles.boldBtn}>
          <Text>B</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.boldBtn}>
          <Text>I</Text>
        </TouchableOpacity>
      </View>
      <StatusBar style="auto"/>
    </View>
  );
}

const styles = StyleSheet.create({
container: {
    flex: 1,
    backgroundColor: '#fff',
    paddingTop: '10%'
  },

  button: {
    backgroundColor: '#C4C4C4',
    width: '100%',
    height: '10%',
    justifyContent: 'center',
    paddingLeft: '2%'
  },

  backImage: {
    width: '10%',
    height: '50%',
  },

  dropdown: {
    marginTop: '5%',
    marginLeft: '10%',
    marginRight: '10%',
    paddingLeft: '5%',
    borderWidth: 1
  },

  btnGroup: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-evenly',
    marginTop: '5%',
    width: '100%',
    height: '10%',
    backgroundColor: '#DCF1FA'
  }
});