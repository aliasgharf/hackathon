//REACH_CONNECTOR_MODE=ALGO ../reach react

import React from 'react';
import AppViews from './views/AppViews';
import DeployerViews from './views/DeployerViews';
import AttacherViews from './views/AttacherViews';
import {renderDOM, renderView} from './views/render';
import './index.css';
import * as backend from './build/index.main.mjs';
import { loadStdlib } from '@reach-sh/stdlib';
const reach = loadStdlib(process.env);

// Additional codes to run on Algorand
import { ALGO_MyAlgoConnect as MyAlgoConnect } from '@reach-sh/stdlib';
reach.setWalletFallback(reach.walletFallback({
  providerEnv: 'MainNet', MyAlgoConnect }));

const handToInt = {'ROCK': 0, 'PAPER': 1, 'SCISSORS': 2};
//const intToOutcome = ['Bob wins!', 'Draw!', 'Alice wins!'];
const {standardUnit} = reach;
const defaults = {defaultFundAmt: '10', /*defaultWager: '0.001',*/ standardUnit};

// Initialise weekOutcomeArray ie Alice's current status
let weekOutcomeArray = [false, false, false];

// No change is required here
class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {view: 'ConnectAccount', ...defaults};
  }
  async componentDidMount() {
    const acc = await reach.getDefaultAccount();
    const balAtomic = await reach.balanceOf(acc);
    const bal = reach.formatCurrency(balAtomic, 4);
    this.setState({acc, bal});
    if (await reach.canFundFromFaucet()) {
      this.setState({view: 'FundAccount'});
    } else {
      this.setState({view: 'DeployerOrAttacher'});
    }
  }
  async fundAccount(fundAmount) {
    console.log("async fundAccount");
    await reach.fundFromFaucet(this.state.acc, reach.parseCurrency(fundAmount));
    this.setState({view: 'DeployerOrAttacher'});
  }
  async skipFundAccount() { this.setState({view: 'DeployerOrAttacher'}); }
  selectAttacher() { this.setState({view: 'Wrapper', ContentView: Attacher}); }
  selectDeployer() { this.setState({view: 'Wrapper', ContentView: Deployer}); }
  render() { return renderView(this, AppViews); }
}

class Player extends React.Component {
  async seeWeekOutcomeArray() {
    if (weekOutcomeArray[0] == true && weekOutcomeArray[1] == true && weekOutcomeArray[2] == true ) {
      this.setState({view: 'UpdateResults', outcome: weekOutcomeArray});
    } else {
      this.setState({view: 'ViewResults', outcome: weekOutcomeArray});
    }
    console.log(`Ana's weekly results are: ${weekOutcomeArray}`);
    return weekOutcomeArray;
  }
  async updateWeekOutcomeArray(weekNumber, weekOutcome) {
    //this.setState({view: 'UpdateResults'});
    weekOutcomeArray[weekNumber] = weekOutcome;
    console.log(`Week index ${weekNumber} has been updated with ${weekOutcome}`);
    console.log(`Weekoutcome Array is now ${weekOutcomeArray}`);
  }
}

// Alice
class Deployer extends Player {
  constructor(props) {
    super(props);
    this.state = {view: 'Deploy'};
  }
  async deploy() {
    const ctc = this.props.acc.contract(backend);
    this.setState({view: 'Deploying', ctc});
    //this.wager = reach.parseCurrency(0); // UInt
    this.deadline = {ETH: 10, ALGO: 100, CFX: 1000}[reach.connector]; // UInt
    backend.Alice(ctc, this);
    const ctcInfoStr = JSON.stringify(await ctc.getInfo(), null, 2);
    this.setState({view: 'WaitingForAttacher', ctcInfoStr});
  }

  // Req: The requirement is to display the webpage with 3 picture icons
  //      If the week is true then icon is the grey out version
  //      Else the week is the colour icon and cannot be clicked
  // GetHand and WaitingForResults have been copied to DeployerViews.js (Necessary?)
  async provideWeek() { // Fun([], UInt)
    const hand = await new Promise(resolveHandP => {
      this.setState({view: 'GetHand', playable: true, outcome: weekOutcomeArray, resolveHandP});
    });
    console.log(`Module ${handToInt[hand]+1} has been selected`);
    this.setState({view: 'WaitingForResults', hand});
    return handToInt[hand];
  }
  playHand(hand) { this.state.resolveHandP(hand); }
  render() { return renderView(this, DeployerViews); }
}

// Creator
class Attacher extends Player {
  constructor(props) {
    super(props);
    this.state = {view: 'Attach'};
  }
  attach(ctcInfoStr) {
    const ctc = this.props.acc.contract(backend, JSON.parse(ctcInfoStr));
    this.setState({view: 'Attaching'});
    backend.Creator(ctc, this);
    console.log("The Smart Contract has been attahed");
  }
  async setFee() {
    const assessmentFee = reach.parseCurrency(0.5);
    console.log(`Creator sets the assessment fee of ${reach.formatCurrency(assessmentFee,4)}`);
    return assessmentFee;
  }
  render() { return renderView(this, AttacherViews); }
}

renderDOM(<App />);