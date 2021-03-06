import { useNavigation } from '@react-navigation/native'
import React from 'react'
import {StyleSheet, View, Text, TouchableOpacity, Image } from 'react-native'
import {images, colors, fonts} from "../style/style"
import {openDocumentFile} from '../helper/fileManagement'
const HomeBtn = ({img,text}) => {
    const navigation = useNavigation()
    const navPressHandler = async () => { 
        switch(img){
            case 'openFile' :
                const uri = await openDocumentFile()
                navigation.navigate('fsView', {uri: uri})
            break;
            default :
                navigation.navigate(img)
            break;
        }   
    }
    return (
        <TouchableOpacity style={styles.fnBtn} onPress={navPressHandler}>
                <View style={styles.fnContainer} >
                    <Image
                    style={styles.image}
                    source={images[img]} />
                    <Text style={styles.text}>{text}</Text>
                </View>
        </TouchableOpacity>
    )
}

const styles = StyleSheet.create({
    fnBtn : {
        backgroundColor: colors.colorGreyLight,
        width : "100%",
        padding: 20
    },

    fnContainer : {
        flexDirection : 'column',
        alignItems: 'center',
        justifyContent : 'space-evenly',

    },

    image : {
        width : 60,
        height : 60,
        marginBottom: 10
    },

    text : { 
        fontSize : fonts.fontSize,
        fontFamily : fonts.font1
    }
})

export default HomeBtn
