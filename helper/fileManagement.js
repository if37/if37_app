import * as DocumentPicker from 'expo-document-picker';

export const openDocumentFile = async () => {
    try {
        const res = await DocumentPicker.getDocumentAsync({});
        return res.uri
      } catch (err) {
        console.log(err)
      }
}

