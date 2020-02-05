import React, { useEffect } from "react";
import { connect } from "react-redux";
import { initWorld, movePlayer } from "../store/app/actions";
import Controller from "./Controller";

const World = props => {
  useEffect(() => {
    props.initWorld();
  }, [props.world]);

  const { title, name, description, players } = props.world;
  return (
    <div>
      <div>
        <h3>Player name: </h3>
        <p>{name}</p>
      </div>
      <div>
        <h3>Current Room</h3>
        <p>{title}</p>
        <p>{description}</p>
      </div>
      <div>
        <Controller />
      </div>

      <div>
        <h5>Players</h5>
      </div>
    </div>
  );
};

const mapStateToProps = state => {
  return {
    ...state.world
  };
};

export default connect(mapStateToProps, { initWorld })(World);
