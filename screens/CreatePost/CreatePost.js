import React, { useState } from 'react';
import { SafeAreaView, Text, TextInput, Button, Image, Alert, ScrollView, TouchableOpacity, View } from 'react-native';
import { launchImageLibrary } from 'react-native-image-picker';
import axios from 'axios';
import { useCommunity } from '../../context/CommunityContext';
import { Routes } from '../../navigations/Routes';
import styles from './style'; 
import { CommonActions } from '@react-navigation/native';

const CreatePost = ({ navigation }) => {
  const { selectedCommunity, setActivity } = useCommunity();
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [location, setLocation] = useState('');
  const [description, setDiscription] = useState('')
  const [image, setImage] = useState(null);
  const [profileImage, setProfileImage] = useState(null);

  const selectImage = (setImageCallback) => {
    const options = {
      mediaType: 'photo',
      includeBase64: true,
      quality: 0,
    };

    launchImageLibrary(options, response => {
      if (response.didCancel) {
        console.log('User cancelled image picker');
      } else if (response.errorCode) {
        console.log('ImagePicker Error:', response.errorMessage);
      } else {
        if (response.assets && response.assets[0].base64) {
          const base64Image = `data:${response.assets[0].type};base64,${response.assets[0].base64}`;
          setImageCallback(base64Image);
        } else {
          console.log('Base64 data is not available');
        }
      }
    });
  };

  const handleSubmit = async () => {
    try {
      if (!firstName || !lastName || !description || !image || !profileImage) {
        Alert.alert('Please fill all required fields and select both images');
        return;
      }

      const postData = {
        communityName: selectedCommunity,
        firstName,
        lastName,
        description,
        location,
        image,
        profileImage,
      };

      const response = await axios.post('https://socialmedia-xmxs.onrender.com/api/posts', postData, {
        headers: {
          'Content-Type': 'application/json',
        },
      });

      console.log('Post created:', response.data);
      Alert.alert('Post created successfully!');
      setActivity("Done")
      navigation.dispatch(
        CommonActions.reset({
          index: 0,
          routes: [{ name: Routes.Home }],
        })
      );

    } catch (error) {
      console.error('Error creating post:', error);
      Alert.alert('Failed to create post.');
    }
  };

  return (
    <SafeAreaView style={styles.container}>
      <ScrollView>
        <Text style={styles.title}>Create Post</Text>

        <Text>First Name:</Text>
        <TextInput
          value={firstName}
          onChangeText={setFirstName}
          placeholder="Enter First Name"
          style={styles.input}
        />

        <Text>Last Name:</Text>
        <TextInput
          value={lastName}
          onChangeText={setLastName}
          placeholder="Enter Last Name"
          style={styles.input}
        />

      <Text>Description:</Text>
        <TextInput
          value={description}
          onChangeText={setDiscription}
          placeholder="Enter Description"
          multiline={true}
          style={styles.input}
        />

        <Text>Location (Optional):</Text>
        <TextInput
          value={location}
          onChangeText={setLocation}
          placeholder="Enter Location"
          style={styles.input}
        />
        
<View style={styles.buttonsandimage}>
<TouchableOpacity style={styles.button} onPress={() => selectImage(setImage)}>
          <Text style={styles.buttonText}>Select Post Image</Text>
        </TouchableOpacity>
        {image && <Image source={{ uri: image }} style={styles.imagePreview} />}

        <TouchableOpacity style={styles.button} onPress={() => selectImage(setProfileImage)}>
          <Text style={styles.buttonText}>Select Profile Image</Text>
        </TouchableOpacity>
        {profileImage && <Image source={{ uri: profileImage }} style={styles.imagePreview} />}

        <TouchableOpacity style={styles.button} onPress={handleSubmit}>
          <Text style={styles.buttonText}>Submit Post</Text>
        </TouchableOpacity>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

export default CreatePost;
