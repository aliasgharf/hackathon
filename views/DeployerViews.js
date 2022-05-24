import React from 'react';
import PlayerViews from './PlayerViews';

import logo1 from './01.png';
import logo2 from './02.png';
import logo3 from './03.png';

const exports = {...PlayerViews};

const sleep = (milliseconds) => new Promise(resolve => setTimeout(resolve, milliseconds));

exports.GetHand = class extends React.Component {
  render() {
    const {parent, playable, hand, outcome} = this.props;
    return (
      // BW: Conditional statements are required: if disabled then greyout else standard picture
      // BW: The png path needs to be adjusted when moves to MainNet 
      <div>
        <h2>It's time to select the badge <br /> you'd like to collect:</h2>
        {hand ? '' : ''}
        <br />
        {!playable ? 'Please wait...' : ''}
        <br />
        <button class="button button1"
          disabled={outcome[0]}
          onClick={() => parent.playHand('ROCK')}
        >Module 1</button>
        <button class="button button2"
          disabled={outcome[1]}
          onClick={() => parent.playHand('PAPER')}
        >Module 2</button>
        <button class="button button3"
          disabled={outcome[2]}
          onClick={() => parent.playHand('SCISSORS')}
        >Module 3</button>
      </div>
    );
  }
}

exports.WaitingForResults = class extends React.Component {
  render() {
    return (
      <div>
        Waiting for results...
      </div>
    );
  }
}

exports.Wrapper = class extends React.Component {
  render() {
    const {content} = this.props;
    return (
      <div className="Deployer">
        
        {content}
      </div>
    );
  }
}

exports.SetWager = class extends React.Component {
  render() {
    const {parent, defaultWager, standardUnit} = this.props;
    const wager = (this.state || {}).wager || defaultWager;
    return (
      <div>
        <input
          type='number'
          placeholder={defaultWager}
          onChange={(e) => this.setState({wager: e.currentTarget.value})}
        /> {standardUnit}
        <br />
        <button
          onClick={() => parent.setWager(wager)}
        >Set wager</button>
      </div>
    );
  }
}

exports.Deploy = class extends React.Component {
  render() {
    const {parent, wager, standardUnit} = this.props;
    return (
      <div>
        <h2> 



The next step is to verify which modules you've completed.</h2>
        The assessment fee is 0.5 ALGO for each module.
        <br />
        Click below to accept:
        <br />
        <br />
        <button
          onClick={() => parent.deploy()}
        >I Accept</button>
      </div>
    );
  }
}

exports.Deploying = class extends React.Component {
  render() {
    return (
      <div>Deploying... please wait.</div>
    );
  }
}

exports.WaitingForAttacher = class extends React.Component {
  async copyToClipboard(button) {
    const {ctcInfoStr} = this.props;
    navigator.clipboard.writeText(ctcInfoStr);
    const origInnerHTML = button.innerHTML;
    button.innerHTML = 'Thank You!';
    button.disabled = true;
    await sleep(1000);
    button.innerHTML = origInnerHTML;
    button.disabled = false;
  }

  render() {
    const {ctcInfoStr} = this.props;
    return (
      <div>
        <h2>Please pass this magic code <br /> so we can join you</h2>
        Waiting for KINSPACE to join...
        <pre className='ContractInfo'>
          {ctcInfoStr}
        </pre>
        <button
          onClick={(e) => this.copyToClipboard(e.currentTarget)}
        >Pass to KINSPACE</button>
      </div>
    )
  }
}

export default exports;