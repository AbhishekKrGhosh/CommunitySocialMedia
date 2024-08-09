import React, { useState, useEffect } from 'react';
import { SafeAreaView, Text, TextInput, Button, View, FlatList, Alert, ActivityIndicator, TouchableOpacity } from 'react-native';
import axios from 'axios';
import { useCommunity } from '../../context/CommunityContext';
import { Routes } from '../../navigations/Routes';
import styles from './style'; // Import the styles

const Community = ({ navigation }) => {
  const { selectedCommunity, setSelectedCommunity } = useCommunity();
  const [searchQuery, setSearchQuery] = useState('');
  const [communities, setCommunities] = useState([]);
  const [allCommunities, setAllCommunities] = useState([]); 
  const [newCommunityName, setNewCommunityName] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const [isSearching, setIsSearching] = useState(false);

  useEffect(() => {
    const fetchCommunities = async () => {
      try {
        setIsLoading(true);
        const response = await axios.get('https://socialmedia-xmxs.onrender.com/api/community');
        setAllCommunities(response.data); 
        setCommunities(response.data); 
        setIsLoading(false);
      } catch (error) {
        console.error('Error fetching communities:', error);
        setIsLoading(false);
      }
    };

    fetchCommunities();
  }, []);

  const handleSearch = () => {
    if (!searchQuery) {
      setCommunities([]);
      return;
    }

    setIsSearching(true);
    
    const filteredCommunities = allCommunities.filter(community =>
      community.communityName.toLowerCase().includes(searchQuery.toLowerCase())
    );

    setCommunities(filteredCommunities.slice(0, 10));
    setIsSearching(false);
  };

  const handleCreateCommunity = async () => {
    if (!newCommunityName) {
      Alert.alert('Please enter a community name.');
      return;
    }

    try {
      const response = await axios.post('https://socialmedia-xmxs.onrender.com/api/community', {
        communityName: (newCommunityName).toLowerCase(),
      });

      if (response.status === 201) {
        Alert.alert('Community created successfully!');
        setNewCommunityName('');
        setAllCommunities(prev => [...prev, response.data]); 
        setCommunities(prev => [...prev, response.data]); 
        setSelectedCommunity(response.data.communityName.toLowerCase());
        navigation.navigate(Routes.Home); 
      }
    } catch (error) {
      if (error.response && error.response.status === 409) {
        Alert.alert('Community already exists.');
      } else {
        console.error('Error creating community:', error);
        Alert.alert('Failed to create community.');
      }
    }
  };

  const handleSelectCommunity = (communityName) => {
    setSelectedCommunity(communityName.toLowerCase());
    setSearchQuery('')
    setCommunities(allCommunities)
    navigation.navigate(Routes.Home); 
  };

  return (
    <SafeAreaView style={styles.container}>
      {isLoading ? (
        <ActivityIndicator style={styles.loadingIndicator} size="large" color="#0000ff" />
      ) : (
        <>
          <View style={styles.searchContainer}>
            <Text style={styles.searchTitle}>Search Community:</Text>
            <TextInput
              value={searchQuery}
              onChangeText={setSearchQuery}
              placeholder="Enter community name"
              style={styles.searchInput}
              onChange={handleSearch}
            />
            {isSearching && <ActivityIndicator style={styles.loadingIndicator} size="small" color="#0000ff" />}
            {searchQuery && (
              <FlatList
                data={communities}
                keyExtractor={item => item._id}
                renderItem={({ item }) => (
                  <TouchableOpacity onPress={() => handleSelectCommunity(item.communityName)}>
                    <View style={styles.communityItem}>
                      <Text style={styles.communityText}>
                        {(item.communityName).toUpperCase()}
                      </Text>
                    </View>
                  </TouchableOpacity>
                )}
              />
            )}
          </View>

          <View style={styles.createContainer}>
            <Text style={styles.createTitle}>Create New Community:</Text>
            <TextInput
              value={newCommunityName}
              onChangeText={setNewCommunityName}
              placeholder="Enter new community name"
              style={styles.createInput}
            />
            <TouchableOpacity style={styles.createButton} onPress={handleCreateCommunity}>
              <Text style={styles.createButtonText}>Create</Text>
            </TouchableOpacity>
          </View>
        </>
      )}
    </SafeAreaView>
  );
};

export default Community;
