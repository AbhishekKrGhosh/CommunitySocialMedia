import React from 'react'
import { SafeAreaView, Text } from 'react-native'
import globalStyle from '../../assets/styles/globalStyle'
import { TouchableOpacity } from 'react-native-gesture-handler'
import { Routes } from '../../navigations/Routes'
import style from './style'

const Profile = ({navigation}) => {
  return (
    <SafeAreaView style={[globalStyle.flex, globalStyle.flex]}>
        <TouchableOpacity onPress={()=>navigation.navigate(Routes.Home)}>
            <Text style={style.backButton}>Go Back</Text>
        </TouchableOpacity>
        <Text>
            Welcome to Profile
        </Text>
    </SafeAreaView>
  )
}

export default Profile