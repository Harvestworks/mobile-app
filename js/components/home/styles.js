
const React = require('react-native');

const { StyleSheet, Dimensions } = React;

const deviceHeight = Dimensions.get('window').height;

export default {
  container: {
    position: 'absolute',
    top: 0,
    bottom: 0,
    left: 0,
    right: 0,
    margin: 0,
  },
  bkgImg: {
    flex: 1,
    height: null,
    width: null,
  },
  title: {
    flex: 1,
    fontSize: 28,
  },
  subtitle: {
    flex: 1,
    fontSize: 14,
    fontWeight: 'bold',
    marginTop: 20,
    alignSelf: 'center',
  },
  p: {
    flex: 1,
    fontSize: 16,
    lineHeight: 24,
    marginTop: 30,
    paddingTop: 10,
    paddingLeft: 15,
    paddingRight: 10,
    paddingBottom: 100,
  },
  btn: {
    marginTop: 20,
    alignSelf: 'center',
  },
};
