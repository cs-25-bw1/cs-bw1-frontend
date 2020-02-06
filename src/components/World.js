import React, { useState, useEffect } from "react";
import { connect } from "react-redux";
import { initWorld } from "../store/app/actions";
import Controller from "./Controller";

const World = props => {
  const [location, setLocation] = useState(props);
  const { title, name, description, players } = props.world;

  useEffect(() => {
    props.initWorld();
    setLocation(props.world);
  }, [location]);

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
