import React from "react";
import PropTypes from 'prop-types'
import { Image, Text, View } from "react-native";
import UserProfileImage from "../UserProfileImage/UserProfileImage";
import { FontAwesomeIcon } from "@fortawesome/react-native-fontawesome";
import { faEllipsis } from "@fortawesome/free-solid-svg-icons";
import style from "./style";
import { faBookmark, faHeart, faMessage } from "@fortawesome/free-regular-svg-icons";
import { horizontalScale, scaleFontSize } from "../../assets/styles/scaling";

const UserPost = (props) => {
    return (
        <View style={style.userPostContainer}>
            <View style={style.user}>
                <View style={style.userContainer}>
                <UserProfileImage profileImage={props.profileImage} imageDimensions={horizontalScale(48)}/>
                <View style={style.userTextContainer}>
                    <Text style={style.username}>{props.firstName} {props.lastName}</Text>
                    {props.location && <Text style={style.location}>{props.location}</Text>}
                </View>
                </View>
            </View>
            <View style={style.postImage}>
                <Image source={props.image} style={{width:300, height:200}}/>
            </View>
        </View>
    )
}

UserPost.propTypes = {
    firstName: PropTypes.string.isRequired,
    lastName: PropTypes.string.isRequired,
    location: PropTypes.string,
    image: PropTypes.any.isRequired,
    profileImage:PropTypes.any.isRequired,
}

export default UserPost