import { createStackNavigator } from "@react-navigation/stack";
import { Routes } from "./Routes";
import Home from "../screens/Home/Home";
import Profile from "../screens/Profile/Profile";
import CreatePost from "../screens/CreatePost/CreatePost";

const Stack = createStackNavigator()

const MainNavigation = () => {
    return (
        <Stack.Navigator screenOptions={{header:()=>null, headerShown:false}} initialRouteName={Routes.Home}>
            <Stack.Screen name={Routes.Home} component={Home}/>
            <Stack.Screen name={Routes.Profile} component={Profile}/>
            <Stack.Screen name={Routes.CreatePost} component={CreatePost}/>
        </Stack.Navigator>
    )
}

export default MainNavigation