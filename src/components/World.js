import React, { useEffect, useState } from "react";
import { connect } from "react-redux";
import { initWorld } from "../store/app/actions";
import Controller from "./Controller";
import Map from "./Map";

const World = props => {
  const { title, name, description, players, items } = props.world;

  // const [location, setLocation] = useState([]);

  useEffect(() => {
    // console.log("useeffect props", props);
    props.initWorld();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  console.log("this si the init", props.world);

  return (
    <div className="worldDiv">
      <div className="sideDiv">
        <div className="playerDiv">
          <h3>Player name: </h3>
          <p>{name}</p>
        </div>
        <div className="roomDiv">
          <h3>Current Room</h3>
          <p>{title}</p>
          <p>{description}</p>
          <div className="itemsDiv">
            <p>Items in this room</p>
            <p>{items}</p>
          </div>
        </div>
        <div className="playersDiv">
          <h5>Players</h5>
          <p>{players}</p>
        </div>
        <Controller />
      </div>

      <Map />
      <div>
        <h1>hello</h1>
      </div>
    </div>
  );
};

const mapStateToProps = state => {
  return {
    ...state.start
  };
};

export default connect(mapStateToProps, { initWorld })(World);
