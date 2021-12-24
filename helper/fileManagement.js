import * as DocumentPicker from 'expo-document-picker';

export const openDocumentFile = async () => {
    try {
        const res = await DocumentPicker.getDocumentAsync({});
        console.log(
          res.uri,
          res.type, // mime type
          res.name,
          res.size,
        )
        return res.uri
      } catch (err) {
        console.log(err)
      }
}

