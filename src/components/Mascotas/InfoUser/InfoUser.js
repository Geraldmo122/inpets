import React, {useState} from 'react'
import { View } from 'react-native'
import { Avatar, Text} from "react-native-elements"
import { getAuth, updateProfile} from "firebase/auth"
import { styles} from "./InfoUser.styles"
import * as ImagePicker from "expo-image-picker"
import {getDownloadURL, getStorage, ref, uploadBytes} from "firebase/storage"


export function InfoUser(props) {

    const { setLoading, setLoadingText}= props;

    const{ uid, photoURL, displayName, email} = getAuth().currentUser;
    const [avatar, setAvatar] = useState(photoURL)

    const changeAvatar = async () => {
        const result = await ImagePicker.launchImageLibraryAsync({
          mediaTypes:ImagePicker.MediaTypeOptions.All,
          allowsEditing:true,
          aspect:[4, 3],
        })

        if (!result.cancelled) uploadImage(result.uri)
    }
    const  uploadImage = async(uri) => {
      setLoadingText("Actualizando avatar");
      setLoading(true);

      const response = await fetch(uri);
      const blob= await response.blob();

      const storage = getStorage();
      const storegeRef = ref (storage, `avatar/${uid}`);

      uploadBytes(storegeRef, blob).then((snapshot)=>{
        updatePhotoUrl(snapshot.metadata.fullPath)
      })
    }

    const updatePhotoUrl = async(imagePath) => {
      const storage = getStorage();
      const imageRef = ref(storage, imagePath);

      const imageUrl= await getDownloadURL (imageRef);
      
      const auth = getAuth();
      updateProfile(auth.currentUser, { photoURL:imageUrl});

      setAvatar(imageUrl);
      setLoading(false);
    };
  return (
    <View style={styles.content}>
      <Avatar 
            size="large" 
            containerStyle={styles.avatar}
            rounded icon = {{type:"material", name: "person"}}
            source={{uri: avatar}}
        >
            <Avatar.Accessory size={24} onPress={changeAvatar}/>
        </Avatar>

        <View>
            <Text style={styles.displayName}>{displayName || "Anónimo"}</Text>
            <Text>{email}</Text>
        </View>
    </View>
  )
}