import React from 'react';
import 'babel-polyfill';

export default class App extends React.Component {
  
  render () {
    return (
      <div>
       {this.props.children}
      </div>
    );
  }

};
