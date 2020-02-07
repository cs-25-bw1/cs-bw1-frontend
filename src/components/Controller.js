import React from "react";
import { connect } from "react-redux";
import { movePlayer } from "../store/app/actions";
import "./controller.scss";

const Controller = props => {
  console.log("this is the props", props);
  return (
    <div className="NavButtonDiv">
      <div>
        <button
          className="btn"
          onClick={() => {
            props.movePlayer("s");
          }}
        >
          N
        </button>
      </div>
      <div>
        <button
          className="btn"
          onClick={() => {
            props.movePlayer("w");
          }}
        >
          W
        </button>
        <button
          className="btn"
          onClick={() => {
            props.movePlayer("e");
          }}
        >
          E
        </button>
      </div>
      <div>
        <button
          className="btn btn-n"
          onClick={() => {
            props.movePlayer("n");
          }}
        >
          S
        </button>
      </div>
    </div>
  );
};

export default connect(null, { movePlayer })(Controller);
