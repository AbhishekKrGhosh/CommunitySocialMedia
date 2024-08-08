import { StyleSheet } from "react-native";
import { getFontFamily } from "../fonts/helper";

const globalStyle = StyleSheet.create({
header:{
    marginLeft:27,
    marginRight:17,
    marginTop:30,
    flexDirection:'row',
    alignItems:'center',
    justifyContent:'space-between'
  },
  messageIcon:{
    padding:14,
    borderRadius:100,
    backgroundColor:'#F9FAFB'
},
messageNumberContainer:{
    backgroundColor:'#F35BAC',
    justifyContent:'center',
    alignItems:'center',
    flexDirection:'row',
    width:10,
    height:10,
    borderRadius:10,
    position:'absolute',
    top:12,
    right:10
},
messageNumber:{
    color:'#FFFFFF',
    fontSize:6,
    fontFamily:getFontFamily('Inter_18pt', 600)
},
userStoryContainer:{
    marginTop:20,
},
userPostContainer:{
    marginHorizontal:24,
    
}
})
export default globalStyle