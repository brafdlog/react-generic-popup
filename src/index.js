import React from 'react';
import ReactDOM from 'react-dom';
import Popup from './Popup';

export function render(containerId, title) {
  ReactDOM.render(<Popup title={title} />, document.getElementById(containerId));
}