import { StatusBar } from 'expo-status-bar';
import { useEffect, useState } from 'react';
import { StyleSheet, Text, View, Button, TouchableOpacity, Image,  TextInput} from 'react-native';
import DropdownComponent from './Components/DropdownComponent';
import ColorPicker from 'react-native-wheel-color-picker'
import { borderBottomColor } from 'react-native/Libraries/Components/View/ReactNativeStyleAttributes';

export default function App() {

  const [fontSize, setFontSize] = useState(12);

  //where cursor start
  const [start, setStart] = useState(0);

  //where cursor end
  const [end, setEnd] = useState(0);

  const [text, setText] = useState("sample sentence");

  //substring of text from start to the last letter unselected
  const [preText, setPreText] = useState(text);

  //susbtring of text from the first letter unselected after the selected text to the last letter of text
  const [postText, setPostText] = useState("");

  //selected substring modified
  const [modifiedText, setModifiedText] = useState("");

  // boolean to display or not the color wheel
  const [displayColorPicker, setDisplayColorPicker] = useState(false);

  const [displayColorPicker2, setDisplayColorPicker2] = useState(false);

  // the chosen color for the font
  const [color, setColor] = useState("#000");

  // the chosen color for highlight
  const [color2, setColor2] = useState("#000");

  const boldify = () => {
    let subtext = "";
    if (start > 0) {
      if (end < text.length) {
        if (text != "") {
          setPreText(text.substring(0, start));
          setPostText(text.substring(end, text.length));
          subtext = text.substring(start, end);
        }
      }
      else {
        setPostText("");
        setPreText(text.substring(0, start));
        subtext = text.substring(start, end);
      }
      setPreText(text.substring(0, start));
    }
    else {
      setPreText("");
      setPostText(text.substring(end, text.length));
      subtext = text.substring(start, end);
    }
    setModifiedText(<Text style={{fontWeight: 'bold'}}>{subtext}</Text>);
  }

  const italify = () => {
    let subtext = "";
    if (start > 0) {
      if (end < text.length) {
        if (text != "") {
          setPreText(text.substring(0, start));
          setPostText(text.substring(end, text.length));
          subtext = text.substring(start, end);
        }
      }
      else {
        setPostText("");
        setPreText(text.substring(0, start));
        subtext = text.substring(start, end);
      }
      setPreText(text.substring(0, start));
    }
    else {
      setPreText("");
      setPostText(text.substring(end, text.length));
      subtext = text.substring(start, end);
    }
    setModifiedText(<Text style={{fontStyle: 'italic'}}>{subtext}</Text>);
  }

  const underline = () => {
    let subtext = "";
    if (start > 0) {
      if (end < text.length) {
        if (text != "") {
          setPreText(text.substring(0, start));
          setPostText(text.substring(end, text.length));
          subtext = text.substring(start, end);
        }
      }
      else {
        setPostText("");
        setPreText(text.substring(0, start));
        subtext = text.substring(start, end);
      }
      setPreText(text.substring(0, start));
    }
    else {
      setPreText("");
      setPostText(text.substring(end, text.length));
      subtext = text.substring(start, end);
    }
    setModifiedText(<Text style={{textDecorationLine: 'underline'}}>{subtext}</Text>);
  }

  const changeFontColor = () => {
    let subtext = "";
    if (start > 0) {
      if (end < text.length) {
        if (text != "") {
          setPreText(text.substring(0, start));
          setPostText(text.substring(end, text.length));
          subtext = text.substring(start, end);
        }
      }
      else {
        setPostText("");
        setPreText(text.substring(0, start));
        subtext = text.substring(start, end);
      }
      setPreText(text.substring(0, start));
    }
    else {
      setPreText("");
      setPostText(text.substring(end, text.length));
      subtext = text.substring(start, end);
    }
    setModifiedText(<Text style={{color: color}}>{subtext}</Text>);
  }

  const highlight = () => {
    let subtext = "";
    if (start > 0) {
      if (end < text.length) {
        if (text != "") {
          setPreText(text.substring(0, start));
          setPostText(text.substring(end, text.length));
          subtext = text.substring(start, end);
        }
      }
      else {
        setPostText("");
        setPreText(text.substring(0, start));
        subtext = text.substring(start, end);
      }
      setPreText(text.substring(0, start));
    }
    else {
      setPreText("");
      setPostText(text.substring(end, text.length));
      subtext = text.substring(start, end);
    }
    setModifiedText(<Text style={{backgroundColor: color2}}>{subtext}</Text>);
  }

  return (
    <View style={styles.container}>
      <TouchableOpacity style={styles.button}>
      <Image style={styles.backImage} source={require('./assets/left-arrow.png')}/>
      </TouchableOpacity>
      <DropdownComponent 
      style={styles.dropdown}
      data={selectionModes}
      maxHeight={150}
      labelField="label"
      valueField="value"
      placeholder="Mode de sélection"
      ></DropdownComponent>
      <View style={styles.btnGroup}>
        <TouchableOpacity 
        style={styles.editorbtn}
        onPress={boldify}
        >
          <Text style={styles.boldBtn}>B</Text>
        </TouchableOpacity>
        <TouchableOpacity 
        style={styles.editorbtn}
        onPress={italify}
        >
          <Text style={styles.italicBtn}>I</Text>
        </TouchableOpacity>
        <TouchableOpacity 
        style={styles.editorbtn}
        onPress={underline}
        >
          <Text style={styles.underlineBtn}>U</Text>
        </TouchableOpacity>
        <TouchableOpacity 
        style={styles.editorbtn}
        onPress={() => {
          setDisplayColorPicker(!displayColorPicker);
        }}
        >
          <Text style={[styles.colorBtn, , {borderBottomColor: color}]}>A</Text>
        </TouchableOpacity>
        <TouchableOpacity
        style={[styles.editorbtn]}
        onPress={() => {
          setDisplayColorPicker2(!displayColorPicker2);
        }}>
          <Image style={[styles.highlightBtn, {tintColor: color2}]} source={require('./assets/paint-bucket.png')}></Image>
        </TouchableOpacity>
        <TouchableOpacity style={{flex: 1}}>
          <DropdownComponent
          data={fontSizes}
          labelField="label"
          valueField="value"
          placeholder="12"
          onChange={item => {
            setFontSize(item.value);
          }}
          ></DropdownComponent>
        </TouchableOpacity>
      </View>
      <TextInput
      style={[styles.textInput, {fontSize: fontSize}]}
      multiline={true}
      onSelectionChange={(event) => {
        setStart(event.nativeEvent.selection.start);
        setEnd(event.nativeEvent.selection.end);
      }}
      >
      {preText}
      {modifiedText}
      {postText}
      </TextInput>
      {displayColorPicker ?
      <ColorPicker
      discrete={true}
      thumbSize={30}
      onColorChangeComplete={(color) => {
        setColor(color);
        changeFontColor();
      }}
      ></ColorPicker> : null}
      {displayColorPicker2 ?
      <ColorPicker
      discrete={true}
      thumbSize={30}
      onColorChangeComplete={(color) => {
        setColor2(color);
        highlight();
      }}
      ></ColorPicker> : null}
      <StatusBar style="auto"/>
    </View>
  );
}


const selectionModes = [
  {label: "Sélection Manuelle", value: 1},
  {label: "Voyelles", value: 2},
  {label: "Consonnes", value: 3},
  {label: "Lettres doublées", value: 4}
];

const fontSizes = [
  {label: "12", value: 12},
  {label: "14", value: 14},
  {label: "16", value: 16},
  {label: "18", value: 18},
  {label: "20", value: 20},
];



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
    alignItems: 'center',
    marginTop: '5%',
    width: '100%',
    height: '10%',
    backgroundColor: '#DCF1FA',
  },

  editorbtn: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    height: '100%'
  },

  boldBtn: {
    fontWeight: 'bold',
    fontSize: 25
  },

  italicBtn: {
    fontStyle: 'italic',
    fontSize: 25
  },

  underlineBtn: {
    textDecorationLine: 'underline',
    fontSize: 25
  },

  colorBtn: {
    fontSize: 25,
    borderBottomWidth: 5
  },

  highlightBtn: {
    width: '50%',
    height: '50%',
    resizeMode: 'contain'
  },

  textInput: {
    color: 'black',
    marginTop: '15%',
    marginLeft: '5%',
  },
});