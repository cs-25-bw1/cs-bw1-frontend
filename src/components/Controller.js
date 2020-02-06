import React from "react";
import { connect } from "react-redux";
import { movePlayer } from "../store/app/actions";
import styled from "styled-components";

const Controller = props => {
  console.log("this is the props", props);
  return (
    <div className="NavButtonDiv">
      <Button
        // style={{ color: "green", backgroundColor: "red", fontSize: "4rem" }}
        onClick={() => {
          props.movePlayer("n");
        }}
      >
        N
      </Button>
      <Button
        onClick={() => {
          props.movePlayer("s");
        }}
      >
        S
      </Button>
      <Button
        onClick={() => {
          props.movePlayer("e");
        }}
      >
        E
      </Button>
      <Button
        onClick={() => {
          props.movePlayer("w");
        }}
      >
        W
      </Button>
    </div>
  );
};

const Button = styled.button`
  color: green;
  background: lightgrey;
  border: 2px green;
  font-size: 4rem;
  :hover {
    color: blue;
    cursor: pointer;
  }
`;

export default connect(null, { movePlayer })(Controller);
