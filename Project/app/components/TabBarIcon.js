import React from 'react';
import PropTypes from 'prop-types';
import { StyleSheet } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import Colors from 'app/constants/Colors';


export default class TabBarIcon extends React.Component {
  static propTypes = {
    name: PropTypes.string.isRequired,
    focused: PropTypes.bool.isRequired,
  };

  render() {
    return (
      <Ionicons
        name={this.props.name}
        size={26}
        style={styles.icon}
        color={this.props.focused ? Colors.tabIconSelected : Colors.tabIconDefault}
      />
    );
  }
}

const styles = StyleSheet.create({
  icon: {
    marginBottom: -3,
  },
});
