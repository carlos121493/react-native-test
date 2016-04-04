import React from 'react-native';

const {
  ActivityIndicatorIOS,
  View,
  Text,
} = React;

const ActivityIndicator = React.createClass({
  render() {
    return (<View>
      <Text>indicator</Text>
      <ActivityIndicatorIOS color="#f00" size="large" />
    </View>);
  },
});

export default ActivityIndicator;
