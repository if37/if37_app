const fetch = require('cross-fetch');
const config = {
    api : "https://vision.googleapis.com/v1/images:annotate?key=" ,
    apiKey : "AIzaSyCxICIvCCPQ2lxGvDFfvldgUj3VCV7c9ag" ,
}


const callGoogleVIsionApi = async (imageUrl) => {
// Convert the image data to a Buffer and base64 encode it.

    // var imageFile = fs.readFileSync('/path/to/file');
    // const base64 = Buffer.from(imageUrl).toString('base64');
    let googleVisionRes = await fetch(config.api + config.apiKey, {
        method: 'POST',
        body: JSON.stringify({
            "requests": [
                {
                    "image":{
                        "source":{
                          "imageUri":
                            imageUrl
                        },
                    },
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
    //console.log(text);
    const fullText = text.fullTextAnnotation.text
    console.log(fullText)
    return fullText;
}

//callGoogleVIsionApi("gs://image_assets_dis/img_test/img_test_1.png")
module.exports = {
    callGoogleVIsionApi
}

