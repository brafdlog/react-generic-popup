require('./style/popup.scss');
import React from 'react';

export default class Popup extends React.Component {

  render() {
    return (
      <h1>{this.props.title}</h1>
    );
  }
}