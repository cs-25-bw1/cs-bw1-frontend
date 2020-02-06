import React, { useEffect, useState } from "react";
import { connect } from "react-redux";
import { initWorld } from "../store/app/actions";
import Controller from "./Controller";
import Map from "./Map";

const World = props => {
  const { title, name, description, players } = props.world;

  // const [location, setLocation] = useState([]);

  useEffect(() => {
    // console.log("useeffect props", props);
    props.initWorld();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  console.log("this si the init", props.world);

  return (
    <div className="worldDiv">
      <div className="playerDiv">
        <h3>Player name: </h3>
        <p>{name}</p>
      </div>
      <div className="roomDiv">
        <h3>Current Room</h3>
        <p>{title}</p>
        <p>{description}</p>
      </div>

      <Controller />
      <Map />

      <div>
        <h5>Players</h5>
        <p>{players}</p>
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
