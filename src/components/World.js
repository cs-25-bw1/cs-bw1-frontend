import React, { useEffect } from "react";
import { connect } from "react-redux";
import { initWorld, movePlayer } from "../store/app/actions";
import Controller from "./Controller";
import Map from "./Map";

const World = props => {
  /** varaibles */
  const { name, title, description, location, items, players } = props.player;

  useEffect(() => {
    props.initWorld();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  useEffect(() => {
    movePlayer();
  }, [props.player]);

  console.log("this is the world", props.player);

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
          </div>
        </div>
        <div className="playersDiv">
          <h5>Players</h5>
          <p>{players}</p>
        </div>
        <Controller />
      </div>

      <Map location={location} />
    </div>
  );
};

const mapStateToProps = state => {
  return {
    map: state.gameReducer.map,
    player: state.gameReducer.player
  };
};

export default connect(mapStateToProps, { initWorld })(World);
