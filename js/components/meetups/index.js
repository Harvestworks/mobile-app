import React, { Component } from "react";
import { connect } from "react-redux";
import { Image } from "react-native";
import {
  Container,
  Header,
  Title,
  Content,
  Text,
  Button,
  Icon,
  Left,
  Right,
  Body
} from "native-base";
import styles from "./styles";

//const background = require("../../../images/hw70s_bkg.jpg");

var Trello = require("trello");
var trello = new Trello("MY APPLICATION KEY", "MY USER TOKEN");
 
class Meetups extends Component {
  static navigationOptions = {
    header: null
  };

  getMeetupInfo() {
    //Callback
    trello.getCardsOnList(listId, callback);
 
    //Promise 
    var cardsPromise = trello.getCardsOnList(listId);
    cardsPromise.then((cards) => {
      //do stuff 
    });
  }

  render() {
    const { props: { name, index, list } } = this;
    return (
      <Container style={styles.container}>
        <Header>
          <Left>
            <Button transparent onPress={() => this.props.navigation.goBack()}>
              <Icon name="ios-arrow-back" />
            </Button>
          </Left>

          <Body>
            <Title>Meetups</Title>
          </Body>

          <Right>
            <Button
              transparent
              onPress={() => this.props.navigation.navigate("DrawerOpen")}
            >
              <Icon name="ios-menu" />
            </Button>
          </Right>
        </Header>

        <Content>
            <Text style={styles.p}>
              Meetup information to be inserted here.  Using the Trello API 
            </Text>
        </Content>
      </Container>
    );
  }
}

export default Meetups;
