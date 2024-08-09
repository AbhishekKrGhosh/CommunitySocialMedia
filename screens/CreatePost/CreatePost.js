import React, { useState } from 'react';
import { SafeAreaView, Text, TextInput, Button, Image, Alert, ScrollView } from 'react-native';
import { launchImageLibrary } from 'react-native-image-picker';
import axios from 'axios';

const CreatePost = () => {
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [location, setLocation] = useState('');
  const [image, setImage] = useState(null);
  const [profileImage, setProfileImage] = useState(null);

  const selectImage = (setImageCallback) => {
    const options = {
      mediaType: 'photo',
      includeBase64: true,  // Ensure Base64 data is included
      quality: 1,  // High quality
    };

    launchImageLibrary(options, response => {
      console.log('ImagePicker Response:', response); // Log response for debugging

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
      if (!firstName || !lastName || !image || !profileImage) {
        Alert.alert('Please fill all required fields and select both images');
        return;
      }

      const postData = {
        firstName,
        lastName,
        location,
        image,
        profileImage
      };

      const response = await axios.post('https://socialmedia-xmxs.onrender.com/api/posts', postData, {
        headers: {
          'Content-Type': 'application/json',
        },
      });

      console.log('Post created:', response.data);
      Alert.alert('Post created successfully!');
    } catch (error) {
      console.error('Error creating post:', error);
      Alert.alert('Failed to create post.');
    }
  };

  return (
    <SafeAreaView style={{ padding: 16 }}>
      <ScrollView>
        <Text style={{ fontSize: 18, marginBottom: 10 }}>Create Post</Text>

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

        <Text>Location (Optional):</Text>
        <TextInput
          value={location}
          onChangeText={setLocation}
          placeholder="Enter Location"
          style={styles.input}
        />

        <Button title="Select Post Image" onPress={() => selectImage(setImage)} />
        {image && <Image source={{ uri: image }} style={styles.imagePreview} />}

        <Button title="Select Profile Image" onPress={() => selectImage(setProfileImage)} />
        {profileImage && <Image source={{ uri: profileImage }} style={styles.imagePreview} />}

        <Button title="Submit Post" onPress={handleSubmit} />
      </ScrollView>
    </SafeAreaView>
  );
};

const styles = {
  input: {
    borderWidth: 1,
    borderColor: '#ccc',
    padding: 8,
    marginBottom: 10,
    borderRadius: 4,
  },
  imagePreview: {
    width: 200,
    height: 200,
    marginTop: 10,
    marginBottom: 10,
    resizeMode: 'cover',
  },
};

export default CreatePost;
