import { StyleSheet } from "react-native";
import { getFontFamily } from "../../assets/fonts/helper";
import { horizontalScale, scaleFontSize, verticalScale } from "../../assets/styles/scaling";

const style = StyleSheet.create({
    whitebackground:{
        backgroundColor:'#FFF'
    },
header:{
    marginLeft:horizontalScale(27),
    marginRight:horizontalScale(17),
    marginTop:verticalScale(30),
    flexDirection:'row',
    alignItems:'center',
    justifyContent:'space-between'
  },
  messageIcon:{
    padding:horizontalScale(14),
    borderRadius:horizontalScale(100),
    backgroundColor:'#F9FAFB'
},
messageNumberContainer:{
    backgroundColor:'#F35BAC',
    justifyContent:'center',
    alignItems:'center',
    flexDirection:'row',
    width:horizontalScale(10),
    height:horizontalScale(10),
    borderRadius:horizontalScale(10),
    position:'absolute',
    top:verticalScale(10),
    right:horizontalScale(10)
},
messageNumber:{
    color:'#FFFFFF',
    fontSize:scaleFontSize(6),
    fontFamily:getFontFamily('Inter_18pt', 600)
},
userStoryContainer:{
    marginTop:verticalScale(20),
},
userPostContainer:{
    marginHorizontal:horizontalScale(24),
    
}
})
export default style