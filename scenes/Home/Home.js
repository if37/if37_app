import React from 'react'
import { StyleSheet, View} from 'react-native'
import HomeBtn from '../../components/HomeBtn'
import {colors} from '../../style/style'

const Home = () => {
    return (
        <View style={styles.container}>
            <HomeBtn img='camera' text='Prendre une photo' />
            <HomeBtn img='openFile' text='Ouvrir un fichier' />
            <HomeBtn img='parameter' text='Paramètres' />
            <HomeBtn img='help' text='Aide' />
        </View>
    )
}

const styles = StyleSheet.create({
    container : {
        flexDirection : 'column',
        backgroundColor : colors.colorWhite,
        justifyContent : 'space-around',
        alignItems: 'center',
        flex:1,
        padding : 30
        
    },
})

export default Home
