import React from 'react-native';

const {
  DatePickerIOS,
} = React;

const DatePickerItem = React.createClass({
  getInitialState() {
    return { date: new Date() };
  },

  onDateChange(date) {
    this.setState({ date });
  },

  render() {
    const { date } = this.state;
    return <DatePickerIOS mode="datetime" date={date} onDateChange={this.onDateChange} />;
  },
});

export default DatePickerItem;
