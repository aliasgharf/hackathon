import React from 'react';

const exports = {};

exports.ViewResults = class extends React.Component {
  render() {
    const {outcome} = this.props;
    console.log(`outcomes are ${outcome[0]}, ${outcome[1]}, ${outcome[2]}`);
    // BW: We may want to improve the UI here 
       
    return (
      <div>
        <h4>You have received certification badges for the following: </h4>
        <br /> Module 1 - {String(outcome[0])}
        <br /> Module 2 - {String(outcome[1])}
        <br /> Module 3 - {String(outcome[2])}

      </div>
    );
  }
}

exports.UpdateResults = class extends React.Component {
  render() {
    return (
      <div>
       <h2> Congratulations </h2>
       <h4>You've successfully completed the course! </h4>
       <h4>It's time to add this badge to your collection.</h4>
      
       
       <button class="button button4"></button>
      </div>
    );
  }
}

exports.Timeout = class extends React.Component {
  render() {
    return (
      <div>
        There's been a timeout.
      </div>
    );
  }
}

export default exports;