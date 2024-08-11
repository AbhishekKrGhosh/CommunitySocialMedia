import {StyleSheet} from 'react-native';
import {getFontFamily} from '../../assets/fonts/helper';
import { horizontalScale, scaleFontSize, verticalScale } from '../../assets/styles/scaling';

const style = StyleSheet.create({
  userPostContainer: {
    marginTop:verticalScale(5),
    borderBottomWidth:1,
    borderBottomColor:'#EFF2F6'
  },
  user: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  userContainer: {flexDirection: 'row'},
  userTextContainer: {justifyContent: 'center', marginLeft: horizontalScale(10)},
  username: {
    color: '#000',
    fontFamily: getFontFamily('Inter_18pt', '500'),
    fontSize: scaleFontSize(16),
  },
  location: {
    color: '#79869F',
    fontFamily: getFontFamily('Inter_18pt', '400'),
    fontSize: scaleFontSize(12),
    marginTop: verticalScale(5),
  },
  postImage: {
    alignItems: 'center',
    marginVertical: verticalScale(20)
    
  },
  image:{
    borderWidth:4,
    borderColor:'#914F1E'
  },
  discription:{
    padding:5
  },
  UpperBorderImage:{
    borderWidth:2,
    borderColor:'#914F1E',
    padding:2,
    backgroundColor:'#fff'
  },
  userPostStats:{marginLeft:horizontalScale(10), flexDirection:'row'},
  userPostStatsButton:{flexDirection:'row'},
  userPostStatsButtonRight:{flexDirection:'row', marginLeft:horizontalScale(27)},
  userPostStatText:{marginLeft:horizontalScale(3), color:'#79869F'}
});

export default style;
