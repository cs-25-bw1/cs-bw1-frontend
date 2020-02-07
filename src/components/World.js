import React, { useEffect } from "react";
import { connect } from "react-redux";
import { initWorld, movePlayer } from "../store/app/actions";
import Controller from "./Controller";
import Map from "./Map";
import "./world.scss";
import { Link } from "react-router-dom";

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

  return (
    <>
      <div className="world">
        <div className="map">
          <Map location={location} />
        </div>
        <div className="side">
          <div className="playerDiv">
            <h3>Player name: </h3>
            <p>{name}</p>
            <h3>Current Room</h3>
            <p>{title}</p>
            <h3>Description</h3>
            <p>{description}</p>
            <h3>Items in this room</h3>
            {items}
            <h3>Players</h3>
            <p>{players}</p>
          </div>
          <div>
            <Controller />
          </div>
        </div>
      </div>
      <div className="logoutDiv">
        <Link
          to="/"
          className="logout"
          onClick={() => localStorage.removeItem("token")}
        >
          Logout
        </Link>
      </div>
    </>
  );
};

const mapStateToProps = state => {
  return {
    map: state.gameReducer.map,
    player: state.gameReducer.player
  };
};

export default connect(mapStateToProps, { initWorld })(World);
