const fetch = require('cross-fetch');
const config = {
    api : "https://vision.googleapis.com/v1/images:annotate?key=" ,
    apiKey :  "AIzaSyA1uIaO7XMHMyYCiuEaLwEIuIQWnOb21nw",
}

const callGoogleVIsionApi = async (base64) => {
// Convert the image data to a Buffer and base64 encode it.

    // var imageFile = fs.readFileSync('/path/to/file');
    // const base64 = Buffer.from(imageUrl).toString('base64');
    let googleVisionRes = await fetch(config.api + config.apiKey, {
        method: 'POST',
        body: JSON.stringify({
            "requests": [
                 {
                    "image":{
                        "content": base64
                      },
                    // "image":{
                    //     "source":{
                    //       "imageUri":
                    //         imageUrl
                    //     },
                    // },
                    "features": [
                        { type: "TEXT_DETECTION", maxResults: 5 },
                        { type: "DOCUMENT_TEXT_DETECTION", maxResults: 5 },
                    ],
                }
            ]
        })
    });
    const result = await googleVisionRes.json()
    const [text] = result.responses
    const fullText = text.fullTextAnnotation.text
    return fullText;
}

callGoogleVIsionApi("gs://image_assets_dis/img_test/img_test_1.png")
module.exports = {
    callGoogleVIsionApi
}

