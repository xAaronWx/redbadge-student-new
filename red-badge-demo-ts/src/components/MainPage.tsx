import * as React from "react";
import { Component } from "react";
import Dice from "./Dice";

export interface MainPageProps {}

export interface MainPageState {
  winnerStatus: string;
}

class MainPage extends React.Component<MainPageProps, MainPageState> {
  constructor(props: MainPageProps) {
    super(props);
    this.state = { winnerStatus: "" };
  }
  render() {
    return (
      <div>
        <p> {this.state.winnerStatus} </p>
        <Dice playerName="Player 1" diceRoll={4} />
        <Dice playerName="Player 2" diceRoll={2} />
      </div>
    );
  }
}

export default MainPage;
