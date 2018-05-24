import React from 'react';
import PropTypes from 'prop-types';
import {
  AsyncStorage,
  Button,
  StyleSheet,
  View,
} from 'react-native';

class SignInScreen extends React.Component {
  static propTypes = {
    navigation: PropTypes.shape({
      navigate: PropTypes.func.isRequired,
    }).isRequired,
  };

  static navigationOptions = {
    title: 'Please sign in',
  };

  render() {
    return (
      <View style={styles.container}>
        <Button title="Sign in!" onPress={this.signInAsync} />
      </View>
    );
  }

  signInAsync = async () => {
    await AsyncStorage.setItem('userToken', 'abc');
    this.props.navigation.navigate('Main');
  };
}

export default SignInScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: 15,
    backgroundColor: '#fff',
  },
});
