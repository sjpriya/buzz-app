import React from "react";
import { createAppContainer } from "react-navigation";
import { createBottomTabNavigator } from "react-navigation-tabs";
import Instagram from "./scr/Instagram";
import Facebook from "./scr/facebook";

export default class App extends React.Component{
render(){
return<AppContainer></AppContainer>
}
}
const TabNavigator=createBottomTabNavigator(
  {Facebook: {screen: Facebook},
  Instagram: {screen: Instagram}
}
)

const AppContainer= createAppContainer(TabNavigator)
    