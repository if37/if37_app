import React, {useState,useEffect} from 'react'
import * as FileSystem from 'expo-file-system'
import { SafeAreaView, StyleSheet, ScrollView, Text, Image, Dimensions } from 'react-native'
import {callGoogleVIsionApi} from '../../helper/textDetection'
import {colors} from '../../style/style'

const FsView = ({ route }) => {
    const [loadingExtract, setLoadingExtract] = useState(true)
    const [extract, setExtract] = useState("")
    const {uri} = route.params
    useEffect(async () =>{
        try {
            const result = await FileSystem.readAsStringAsync(uri, {encoding:'base64'})
            const extract = await callGoogleVIsionApi(result)
            setExtract(extract)
            setLoadingExtract(false)
        } catch (error) {
            console.log(error)
        }
    },[])
    return (
        <SafeAreaView style={styles.container}>
            <ScrollView style={styles.ScrollView}>
                <Image style={styles.image} source={{uri:uri}} resizeMode='contain' /> 
                <Text style={styles.heading}>Results :</Text>
                <Text style={styles.extracted}>{loadingExtract? "...loading" : extract}</Text>
            </ScrollView>
        </SafeAreaView>
    )
}

const styles = StyleSheet.create({
    container : {
        flexDirection : 'column',
        alignItems : 'center',
        marginTop: 50,
        marginBottom:50
    },
    ScrollView : {
        margin:0,
        padding: 0
    },
    image: {
        width: Dimensions.get('window').width, 
        height: Dimensions.get('window').height/2,
        marginBottom: 20
    }, 
    heading : {
        fontSize: 25,
        color: colors.textColorHighlight,
        marginBottom: 20,
        marginHorizontal: 20,
    },
    extracted : {
        marginHorizontal: 20,
    }
});

export default FsView
