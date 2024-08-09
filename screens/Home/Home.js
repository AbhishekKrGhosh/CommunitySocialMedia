import React, { useEffect, useState } from 'react';
import {
  FlatList,
  SafeAreaView,
  Text,
  TouchableOpacity,
  View,
  ActivityIndicator,
} from 'react-native';
import axios from 'axios';
import { FontAwesomeIcon } from '@fortawesome/react-native-fontawesome';
import { faPlus } from '@fortawesome/free-solid-svg-icons';
import globalStyle from './style';
import UserStory from '../../components/UserStory/UserStory';
import UserPost from '../../components/UserPost/UserPost';
import { horizontalScale } from '../../assets/styles/scaling';
import { Routes } from '../../navigations/Routes';
import Title from '../../components/Title/Title';

const Home = ({ navigation }) => {
  const [userStories, setUserStories] = useState([]);
  const [userPosts, setUserPosts] = useState([]);
  const [userStoriesCurrentPage, setUserStoriesCurrentPage] = useState(1);
  const [userStoriesRenderedData, setUserStoriesRenderedData] = useState([]);
  const [isLoadingUserStories, setIsLoadingUserStories] = useState(false);
  const [userPostsCurrentPage, setUserPostsCurrentPage] = useState(1);
  const [userPostsRenderedData, setUserPostsRenderedData] = useState([]);
  const [isLoadingUserPosts, setIsLoadingUserPosts] = useState(false);
  const [isLoadingInitialData, setIsLoadingInitialData] = useState(true);

  const userStoriesPageSize = 4;
  const userPostsPageSize = 2;

  const pagination = (data, currentPage, pageSize) => {
    const startIndex = (currentPage - 1) * pageSize;
    const endIndex = startIndex + pageSize;
    return data.slice(startIndex, endIndex);
  };

  useEffect(() => {
    const fetchData = async () => {
      try {
        // Fetch posts and user stories from the API
        const postsResponse = await axios.get('https://socialmedia-xmxs.onrender.com/api/posts');
        setUserPosts(postsResponse.data); // Assuming posts are in posts property
        setUserStories(postsResponse.data); // Adjust according to API response structure
        setIsLoadingInitialData(false);
      } catch (error) {
        console.error('Error fetching data:', error);
        setIsLoadingInitialData(false);
      }
    };

    fetchData();
  }, []);

  useEffect(() => {
    if (!isLoadingInitialData) {
      setIsLoadingUserStories(true);
      const getInitialStories = pagination(userStories, 1, userStoriesPageSize);
      setUserStoriesRenderedData(getInitialStories);
      setIsLoadingUserStories(false);

      setIsLoadingUserPosts(true);
      const getInitialPosts = pagination(userPosts, 1, userPostsPageSize);
      setUserPostsRenderedData(getInitialPosts);
      setIsLoadingUserPosts(false);
    }
  }, [isLoadingInitialData, userStories, userPosts]);

  const handleLoadMoreUserStories = () => {
    if (isLoadingUserStories) return;
    setIsLoadingUserStories(true);
    const contentToAppend = pagination(userStories, userStoriesCurrentPage + 1, userStoriesPageSize);
    if (contentToAppend.length > 0) {
      setUserStoriesCurrentPage(userStoriesCurrentPage + 1);
      setUserStoriesRenderedData(prev => [...prev, ...contentToAppend]);
    }
    setIsLoadingUserStories(false);
  };

  const handleLoadMoreUserPosts = () => {
    if (isLoadingUserPosts) return;
    setIsLoadingUserPosts(true);
    const contentToAppend = pagination(userPosts, userPostsCurrentPage + 1, userPostsPageSize);
    if (contentToAppend.length > 0) {
      setUserPostsCurrentPage(userPostsCurrentPage + 1);
      setUserPostsRenderedData(prev => [...prev, ...contentToAppend]);
    }
    setIsLoadingUserPosts(false);
  };

  return (
    <SafeAreaView style={globalStyle.whitebackground}>
      {isLoadingInitialData ? (
        <ActivityIndicator size="large" color="#0000ff" />
      ) : (
        <View style={globalStyle.userPostContainer}>
          <FlatList
            ListHeaderComponent={
              <>
                <View style={globalStyle.header}>
                  <Title title={"Let's Create"} />
                  <TouchableOpacity
                    style={globalStyle.messageIcon}
                    onPress={() => { navigation.navigate(Routes.CreatePost); }}
                  >
                    <FontAwesomeIcon icon={faPlus} size={horizontalScale(20)} color='#898DAE' />
                  </TouchableOpacity>
                </View>
                <View style={globalStyle.userStoryContainer}>
                  <FlatList
                    onEndReachedThreshold={0.5}
                    onEndReached={handleLoadMoreUserStories}
                    horizontal={true}
                    showsHorizontalScrollIndicator={false}
                    data={userStoriesRenderedData}
                    renderItem={({ item }) => (
                      <UserStory
                        key={'userStory' + item.id}
                        firstName={item.firstName}
                        profileImage={{ uri: item.profileImage }} // Ensure the profileImage is in the correct format
                      />
                    )}
                  />
                </View>
              </>
            }
            onEndReachedThreshold={0.5}
            onEndReached={handleLoadMoreUserPosts}
            showsVerticalScrollIndicator={false}
            data={userPostsRenderedData}
            renderItem={({ item }) => (
              <UserPost
                firstName={item.firstName}
                lastName={item.lastName}
                image={{ uri: item.image }} // Ensure the image is in the correct format
                profileImage={{ uri: item.profileImage }} // Ensure the profileImage is in the correct format
                likes={0}
                comments={0}
                bookmarks={0}
                location={item.location}
              />
            )}
          />
        </View>
      )}
    </SafeAreaView>
  );
};

export default Home;
