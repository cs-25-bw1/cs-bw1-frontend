import React, { useEffect } from "react";
import { connect } from "react-redux";
import { initWorld } from "../store/app/actions";
import Controller from "./Controller";
import Map from "./Map";

const World = props => {
  const { title, name, description } = props.world;

  useEffect(() => {
    // props.initWorld();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

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
        <Map />
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
