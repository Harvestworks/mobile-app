import React, { Component } from "react";
import Home from "../components/home/";
import Mission from "../components/mission";
import Meetups from "../components/meetups";
import { DrawerNavigator } from "react-navigation";
import DrawBar from "../components/DrawBar";
export default (DrawNav = DrawerNavigator(
  {
    Home: { screen: Home },
    Mission: { screen: Mission },
    Meetups: { screen: Meetups }
  },
  {
    contentComponent: props => <DrawBar {...props} />
  }
));
