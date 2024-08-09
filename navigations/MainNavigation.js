import { createStackNavigator } from "@react-navigation/stack";
import { Routes } from "./Routes";
import Home from "../screens/Home/Home";
import Profile from "../screens/Profile/Profile";
import CreatePost from "../screens/CreatePost/CreatePost";
import Community from "../screens/Community/Community";
import SplashScreen from "../screens/SplashScreen/SplashScreen";

const Stack = createStackNavigator()

const MainNavigation = () => {
    return (
        <Stack.Navigator screenOptions={{header:()=>null, headerShown:false}} initialRouteName={Routes.SplashScreen}>
            <Stack.Screen name={Routes.Home} component={Home}/>
            <Stack.Screen name={Routes.Profile} component={Profile}/>
            <Stack.Screen name={Routes.CreatePost} component={CreatePost}/>
            <Stack.Screen name={Routes.Community} component={Community}/>
            <Stack.Screen name={Routes.SplashScreen} component={SplashScreen}/>
        </Stack.Navigator>
    )
}

export default MainNavigation