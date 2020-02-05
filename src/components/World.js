import React, { useEffect } from "react";
import { connect } from "react-redux";
import { initWorld } from "../store/app/actions";

const World = props => {
  useEffect(() => {
    props.initWorld();
  }, []);

  const { title, name, description, players } = props.world;
  return (
    <>
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
        <h5>Players</h5>
      </div>
    </>
  );
};

const mapStateToProps = state => {
  return {
    ...state.world
  };
};

export default connect(mapStateToProps, { initWorld })(World);
