import React from 'react';
import { Notifications } from 'expo';
import { createSwitchNavigator } from 'react-navigation';

import MainTabNavigator from 'app/navigation/MainTabNavigator';
import registerForPushNotificationsAsync from 'app/api/registerForPushNotificationsAsync';


const AppNavigator = createSwitchNavigator({
  // You could add another route here for authentication.
  // Read more at https://reactnavigation.org/docs/en/auth-flow.html
  Main: MainTabNavigator,
});

export default class RootNavigation extends React.Component {
  componentDidMount() {
    this.notificationSubscription = this.registerForPushNotifications();
  }

  componentWillUnmount() {
    if (this.notificationSubscription) {
      this.notificationSubscription.remove();
    }
  }

  render() {
    return <AppNavigator />;
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
