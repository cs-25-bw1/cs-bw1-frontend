import React from "react";
import { connect } from "react-redux";
import { movePlayer } from "../store/app/actions";

const Controller = props => {
  console.log("this is the props", props);
  return (
    <div className="NavButtonDiv">
      <h1>Controller here</h1>
      <button
        onClick={() => {
          props.movePlayer("n");
        }}
      >
        N
      </button>
      <button
        onClick={() => {
          props.movePlayer("s");
        }}
      >
        S
      </button>
      <button
        onClick={() => {
          props.movePlayer("e");
        }}
      >
        E
      </button>
      <button
        onClick={() => {
          props.movePlayer("w");
        }}
      >
        W
      </button>
    </div>
  );
};

export default connect(null, { movePlayer })(Controller);
