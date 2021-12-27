import React, {useState,useEffect} from 'react'
import * as FileSystem from 'expo-file-system'
import { SafeAreaView, StyleSheet, View, Text, Image } from 'react-native'
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
            <Image style={styles.image} source={{uri:uri}} /> 
            <Text style={styles.heading}>Results :</Text>
            <Text style={styles.extracted}>{loadingExtract? "...loading" : extract}</Text>
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
    image: {
        width: 200,
        height: 200,
        marginBottom: 30
    }, 
    heading : {
        fontSize: 25,
        color: colors.textColorHighlight,
        marginBottom: 20
    },
    extracted : {}
});

export default FsView
