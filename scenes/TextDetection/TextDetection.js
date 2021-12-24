import React, {useState, useEffect} from 'react'
import { StyleSheet, View, Text } from 'react-native'
import {imageTest} from '../../style/style'
const {callGoogleVIsionApi} = require('../../helper/textDetection')

const TextDetection = () => {
        
    const [results, setResult] = useState()
    const [textExtracted, setTextExtracted] = useState(false)
    /**
     * TODO(developer): Uncomment the following line before running the sample.
     */
    useEffect(async () => {
        try {
            const result = await callGoogleVIsionApi('gs://image_assets_dis/img_test/img_test_1.png')
            setResult(result)
            setTextExtracted(true)
            console.log(result);
        } catch (error) {
            console.log('error');
        }
    }, [])
    return (
        <View style={styles.container}>
            {!textExtracted ? 
                <Text>...loading</Text>
                : 
                <Text>{results}</Text>
            } 
        </View>
    )

}
const styles = StyleSheet.create({
    container : {
        flex : 1,
        alignItems : "center",
        justifyContent : "center"
    }
})

export default TextDetection
