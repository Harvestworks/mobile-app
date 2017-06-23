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

const background = require("../../../images/hw70s_bkg.jpg");

class Mission extends Component {
  static navigationOptions = {
    header: null
  };
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
            <Title>Mission</Title>
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
          <Image source={background} style={styles.bkgImg}>
            <Text style={styles.subtitle}>
              TECHNOLOGY FOR THE ART OF THE 21st CENTURY
            </Text>
            <Text style={styles.p}>
              Founded as a not-for-profit organization by artists in 1977, Harvestworks has helped a generation of artists create new works using technology. Our mission is to support the creation and presentation of art works achieved through the use of new and evolving technologies. Our goals are to create an environment where artists can make work inspired and achieved by electronic media; to create a responsive public context for the appreciation of new work by presenting and disseminating the finished works; to advance the art community’s and the public’s “agenda” for the use of technology in art; and to bring together innovative practitioners from all branches of the arts collaborating in the use of electronic media. We assist with commissions and residencies, production services, education and information programs, and the presentation and distribution of their work.
            </Text>
          </Image>
        </Content>
      </Container>
    );
  }
}

export default Mission;
