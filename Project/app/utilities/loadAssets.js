/* eslint-disable global-require */
import React from 'react';
import PropTypes from 'prop-types';
import { AppLoading, Asset, Font } from 'expo';
import { Ionicons } from '@expo/vector-icons';

export default function (WrappedComponent) {
  class AssetLoader extends React.Component {
    static propTypes = {
      skipLoadingScreen: PropTypes.bool,
    };

    state = {
      isLoadingComplete: false,
    };

    loadResourcesAsync = async () => (
      Promise.all([
        Asset.loadAsync([
          require('app/assets/images/robot-dev.png'),
          require('app/assets/images/robot-prod.png'),
        ]),
        Font.loadAsync({
          // This is the font that we are using for our tab bar
          ...Ionicons.font,
          // We include SpaceMono because we use it in HomeScreen.js. Feel free
          // to remove this if you are not using it in your app
          'space-mono': require('app/assets/fonts/SpaceMono-Regular.ttf'),
        }),
      ])
    );

    handleLoadingError = (error) => {
      // In this case, you might want to report the error to your error
      // reporting service, for example Sentry
      console.warn(error); // eslint-disable-line no-console
    };

    handleFinishLoading = () => {
      this.setState({ isLoadingComplete: true });
    };

    render() {
      if (!this.state.isLoadingComplete && !this.props.skipLoadingScreen) {
        return (
          <AppLoading
            startAsync={this.loadResourcesAsync}
            onError={this.handleLoadingError}
            onFinish={this.handleFinishLoading}
          />
        );
      } else {
        return (
          <WrappedComponent />
        );
      }
    }
  }

  return AssetLoader;
}
/* eslint-enable global-require */
