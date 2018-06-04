import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { Notifications } from 'expo';
import { createSwitchNavigator } from 'react-navigation';
import {
  createNavigationPropConstructor,
  initializeListeners,
} from 'react-navigation-redux-helpers';

import AuthLoadingScreen from 'app/screens/AuthLoadingScreen';
import AuthNavigator from 'app/navigation/AuthNavigator';
import MainTabNavigator from 'app/navigation/MainTabNavigator';
import registerForPushNotificationsAsync from 'app/api/registerForPushNotificationsAsync';


export const AppNavigator = createSwitchNavigator({
  // You could add another route here for authentication.
  // Read more at https://reactnavigation.org/docs/en/auth-flow.html

  AuthLoading: AuthLoadingScreen,
  Auth: AuthNavigator,
  Main: MainTabNavigator,
},
{
  initialRouteName: 'AuthLoading',
});

class RootNavigation extends React.Component {
  static propTypes = {
    nav: PropTypes.object.isRequired,
    dispatch: PropTypes.func.isRequired,
  }

  componentWillMount() {
    this.navigationPropConstructor = createNavigationPropConstructor('root');
  }

  componentDidMount() {
    this.notificationSubscription = this.registerForPushNotifications();
    initializeListeners('root', this.props.nav);
  }

  componentWillUnmount() {
    if (this.notificationSubscription) {
      this.notificationSubscription.remove();
    }
  }

  render() {
    const navigation = this.navigationPropConstructor(
      this.props.dispatch,
      this.props.nav,
    );
    return <AppNavigator navigation={navigation} />;
  }

  registerForPushNotifications() {
    // Send our push token over to our backend so we can receive notifications
    // You can comment the following line out if you want to stop receiving
    // a notification every time you open the app. Check out the source
    // for this function in api/registerForPushNotificationsAsync.js
    registerForPushNotificationsAsync();

    // Watch for incoming notifications
    this.notificationSubscription = Notifications.addListener(this.handleNotification);
  }

  handleNotification = ({ origin, data }) => {
    console.log(`Push notification ${origin} with data: ${JSON.stringify(data)}`); // eslint-disable-line no-console
  };
}

const mapStateToProps = (state) => ({
  nav: state.get('nav').toJS(),
});

export default connect(
  mapStateToProps,
  null,
)(RootNavigation);
