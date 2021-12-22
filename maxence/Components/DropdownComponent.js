import React, { useState } from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { Dropdown } from 'react-native-element-dropdown';

const selectionMode = [
    {label: "Sélection Manuelle", value: 1},
    {label: "Voyelles", value: 2},
    {label: "Consonnes", value: 3},
    {label: "Lettres doublées", value: 4}
  ];


const DropdownComponent = () => {
    const [value, setValue] = useState(null);
    const [isFocus, setIsFocus] = useState(false);
    
    return (
      <View>
        <Dropdown
          style={styles.dropdown}
          data={selectionMode}
          maxHeight={150}
          labelField="label"
          valueField="value"
          placeholder="Mode de sélection"
          value={value}
          onFocus={() => setIsFocus(true)}
          onBlur={() => setIsFocus(false)}
          onChange={item => {
            setValue(item.value);
            setIsFocus(false);
          }}
        />
      </View>
    );
  };

  const styles = StyleSheet.create({
    dropdown: {
        marginTop: '5%',
        marginLeft: '10%',
        marginRight: '10%',
        paddingLeft: '5%',
        borderWidth: 1
      }
    });

  export default DropdownComponent;