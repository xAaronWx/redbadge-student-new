import * as React from "react";

export interface RollButtonProps {
  rollDiceOne(rollNumber: number): void;
  rollDiceTwo(rollNumber: number): void;
}

const RollButton: React.SFC<RollButtonProps> = (props) => {
  function handleClick() {
    let ranNum1 = Math.floor(Math.random() * 6 + 1);
    let ranNum2 = Math.floor(Math.random() * 6 + 1);
    props.rollDiceOne(ranNum1);
    props.rollDiceTwo(ranNum2);
  }

  return (
    <div>
      <br />
      <button onClick={handleClick}>Roll</button>
    </div>
  );
};

export default RollButton;
