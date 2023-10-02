import React from 'react';
import { connect } from 'react-redux';
import { moveClockwise, moveCounterClockwise } from '../state/action-creators';

const Wheel = (props) => {
   const {wheel, moveClockwise, moveCounterClockwise} = props;

   const cogs = [0, 1, 2, 3, 4, 5];

   const handleClockwise = () => {
    moveClockwise(wheel);
   }

   const handleCounterClockwise = () => {
    moveCounterClockwise(wheel);
   }

  return (
    <div id="wrapper">
      <div id="wheel">
        {cogs.map((val, idx) => {
           if(val === wheel) {
            return (<div value={val} key={idx} className="cog active" style={{"--i": val}}>B</div>)
           } else {
            return (<div value={val} key={idx} className="cog" style={{"--i": val}}></div>)
           }
        })}
       </div>

       <div id="keypad">
        <button id="counterClockwiseBtn" onClick={handleCounterClockwise}>Counter Clockwise</button>
        <button id="clockwiseBtn" onClick={handleClockwise}>Clockwise</button>
       </div>
   </div>
  )
}

const mapStateToProps = (state) => {
  return {
    wheel: state.wheel
  }
}



export default connect(mapStateToProps, {moveClockwise, moveCounterClockwise}) (Wheel);
