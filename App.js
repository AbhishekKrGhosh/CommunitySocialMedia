
import React, { useEffect, useState } from 'react';
import {
  FlatList,
  SafeAreaView,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import { getFontFamily } from './assets/fonts/helper';
import Title from './components/Title/Title';
import { FontAwesomeIcon } from '@fortawesome/react-native-fontawesome';
import { faEnvelope } from '@fortawesome/free-solid-svg-icons';
import globalStyle from './assets/styles/globalStyle';
import UserStory from './components/UserStory/UserStory';
import UserPost from './components/UserPost/UserPost';


const App = ()=> {
  const userStories = [
    {
      firstName:'Amit',
      id:1,
      profileImage:require('./assets/images/default_profile.png')
    },
    {
      firstName:'Hitanshu',
      id:2,
      profileImage:require('./assets/images/default_profile.png')
    },
    {
      firstName:'Viren',
      id:3,
      profileImage:require('./assets/images/default_profile.png')
    },
    {
      firstName:'Rupesh',
      id:4,
      profileImage:require('./assets/images/default_profile.png')
    },
    {
      firstName:'Ayushi',
      id:5,
      profileImage:require('./assets/images/default_profile.png')
    },
    {
      firstName:'Sumit',
      id:6,
      profileImage:require('./assets/images/default_profile.png')
    },
    {
      firstName:'Nikhil',
      id:7,
      profileImage:require('./assets/images/default_profile.png')
    },
    {
      firstName:'Vishal',
      id:8,
      profileImage:require('./assets/images/default_profile.png')
    },
    {
      firstName:'Khasim',
      id:9,
      profileImage:require('./assets/images/default_profile.png')
    }
  ]

  const userPosts = [
    {
      firstName : 'Amit',
      lastName : 'Giri',
      location:'faridabad',
      image:require('./assets/images/default_post.png'),
      profileImage:require('./assets/images/default_profile.png'),
      likes:1201,
      comments:24,
      bookmark:55,
      id:1
    },
    {
      firstName : 'Hitanshu',
      lastName : 'Gupta',
      location:'agra',
      image:require('./assets/images/default_post.png'),
      profileImage:require('./assets/images/default_profile.png'),
      likes:1211,
      comments:64,
      bookmark:5825,
      id:2
    },
    {
      firstName : 'Viren',
      lastName : 'Variya',
      location:'surat',
      image:require('./assets/images/default_post.png'),
      profileImage:require('./assets/images/default_profile.png'),
      likes:11,
      comments:4,
      bookmark:5,
      id:3
    },
    {
      firstName : 'Rupesh',
      lastName : 'Gaur',
      location:'varanasi',
      image:require('./assets/images/default_post.png'),
      profileImage:require('./assets/images/default_profile.png'),
      likes:12010,
      comments:242,
      bookmark:555,
      id:4
    },
    {
      firstName : 'Ayushi',
      lastName : 'Mehta',
      location:'bilwara',
      image:require('./assets/images/default_post.png'),
      profileImage:require('./assets/images/default_profile.png'),
      likes:120221,
      comments:2454,
      bookmark:5565,
      id:5
    }
  ]

  const userStoriesPageSize = 4
  const [userStoriesCurrentPage, setUserStoriesCurrentPage] = useState(1)
  const [userStoriesRenderedData, setUserStoriesRenderedData] = useState([])
  const [isLoadingUserStories, setIsLoadingUserStories] = useState(false)

  const userPostsPageSize = 2
  const [userPostsCurrentPage, setUserPostsCurrentPage] = useState(1)
  const [userPostsRenderedData, setUserPostsRenderedData] = useState([])
  const [isLoadingUserPosts, setIsLoadingUserPosts] = useState(false)

  const pagination = (database, currentPage, pageSize) =>{
    console.log('currentPage:'+currentPage)
    const startIndex = (currentPage - 1) * pageSize
    const endIndex = startIndex + pageSize
    if(startIndex >= database.length){
      return []
    }
    return database.slice(startIndex, endIndex)
  }
  useEffect(()=>{
    setIsLoadingUserStories(true)
    const getInitialData = pagination(userStories, 1, userStoriesPageSize)
    setUserStoriesRenderedData(getInitialData)
    setIsLoadingUserStories(false)

    setIsLoadingUserPosts(true)
    const getInitialDataPost = pagination(userPosts, 1, userPostsPageSize)
    setUserPostsRenderedData(getInitialDataPost)
    setIsLoadingUserPosts(false)
  },[])
  return (
    <SafeAreaView >
      
      <View style={globalStyle.userPostContainer}>
        <FlatList
        
        ListHeaderComponent={<>
        <View style={globalStyle.header}>
      <Title title={"Let's explore"}/>
      <TouchableOpacity style={globalStyle.messageIcon}>
      <FontAwesomeIcon icon={faEnvelope} size={20} color='#898DAE'/>
      <View style={globalStyle.messageNumberContainer}>
      <Text style={globalStyle.messageNumber}>2</Text>
      </View>
      </TouchableOpacity>
      </View>
      <View style={globalStyle.userStoryContainer}>
        <FlatList
        onEndReachedThreshold={0.5}
        onEndReached={()=>{
          if(isLoadingUserStories){
            return
          }
          setIsLoadingUserStories(true)
          const contentToAppend = pagination(userStories, userStoriesCurrentPage+1, userStoriesPageSize)
          if(contentToAppend.length>0){
            setUserStoriesCurrentPage(userStoriesCurrentPage + 1)
            setUserStoriesRenderedData(prev=>[...prev, ...contentToAppend])
          }
          setIsLoadingUserStories(false)
        }}
        horizontal={true} showsHorizontalScrollIndicator={false} data={userStoriesRenderedData} renderItem={({item})=>(
          <UserStory key={'userStory'+item.id} firstName={item.firstName} profileImage={item.profileImage}/>
        )}/>
      </View>
        </>}
        onEndReachedThreshold={0.5}
        onEndReached={()=>{
          if(isLoadingUserPosts){
            return
          }
          setIsLoadingUserPosts(true)
          const contentToAppend = pagination(userPosts, userPostsCurrentPage+1, userPostsPageSize)
          if(contentToAppend.length>0){
            setUserPostsCurrentPage(userPostsCurrentPage + 1)
            setUserPostsRenderedData(prev=>[...prev, ...contentToAppend])
          }
          setIsLoadingUserPosts(false)
        }}
        showsVerticalScrollIndicator={false} data={userPostsRenderedData} renderItem={({item})=>
        <UserPost firstName={item.firstName} lastName={item.lastName} image={item.image} profileImage={item.profileImage} likes={item.likes} comments={item.comments} bookmarks={item.bookmark} location={item.location}/>
        }/>
      </View>
    </SafeAreaView>
  );
}


export default App;
