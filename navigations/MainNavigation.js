import { CardStyleInterpolators, createStackNavigator } from "@react-navigation/stack";
import { Routes } from "./Routes";
import Home from "../screens/Home/Home";
import Profile from "../screens/Profile/Profile";
import CreatePost from "../screens/CreatePost/CreatePost";
import Community from "../screens/Community/Community";
import SplashScreen from "../screens/SplashScreen/SplashScreen";
import { Easing } from "react-native";

const Stack = createStackNavigator()

const config = {
    animation: 'spring',
    config: {
      stiffness: 1000,
      damping: 500,
      mass: 3,
      overshootClamping: false,
      restDisplacementThreshold: 0.01,
      restSpeedThreshold: 0.01,
    },
  };
  const closeConfig = {
    animation: 'timing',
    config: {
      duration:200,
      easing: Easing.linear
    }
  };

const MainNavigation = () => {
    return (
        <Stack.Navigator screenOptions={{header:()=>null, headerShown:false, gestureEnabled:true, transitionSpec:{
            open:config,
            close:closeConfig
        }, cardStyleInterpolator:CardStyleInterpolators.forHorizontalIOS}} initialRouteName={Routes.SplashScreen}>
            <Stack.Screen name={Routes.Home} component={Home} />
            <Stack.Screen name={Routes.Profile} component={Profile} />
            <Stack.Screen name={Routes.CreatePost} component={CreatePost} />
            <Stack.Screen name={Routes.Community} component={Community} />
            <Stack.Screen name={Routes.SplashScreen} component={SplashScreen} />
        </Stack.Navigator>
    )
}

export default MainNavigation