import React from 'react';
import { StyleSheet, Text } from 'react-native';


export class MonoText extends React.Component {
  static propTypes = {
    style: Text.propTypes.style,
  };

  render() {
    return <Text {...this.props} style={[this.props.style, styles.text]} />;
  }
}

const styles = StyleSheet.create({
  text: {
    fontFamily: 'space-mono',
  },
});
