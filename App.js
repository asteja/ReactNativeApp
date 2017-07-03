import React, { Component } from 'react';
import { StyleSheet, Text, TextField, Image, View } from 'react-native';

class BananaImage extends Component {
  render() {
    let pic = {
      uri: 'https://upload.wikimedia.org/wikipedia/commons/d/de/Bananavarieties.jpg'
    };
    return (
      <Image source={pic} style={{width: 193, height: 110}}/>
    );
  }
}

class ImageDescription extends Component {
  render() {
    return(
      <Text style={styles.font}>Bananas of different varieties</Text>
    )
  }
}

class UserNameLBL extends Component {
  render() {
    return(
      <TextField style={styles.measurements}></TextField>
    )
  }
}

export default class App extends React.Component {
  render() {
    return (
      <View style={styles.container}>
        <BananaImage/>
        <ImageDescription/>
        <UserNameLBL/>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'blue',
    alignItems: 'center',
    justifyContent: 'center',
  },
  font: {
    color: 'white',
  },
  measurements: {
    width: 100,
    height: 100,
  },
});
