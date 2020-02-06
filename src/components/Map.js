import React, { useEffect, useState } from "react";

import { getMap } from "../store/app/actions";
import { connect } from "react-redux";
import room_data from "../util/example-room";
import {
  XAxis,
  YAxis,
  VerticalGridLines,
  XYPlot,
  FlexibleXYPlot,
  HorizontalGridLines,
  LineMarkSeries,
  LineSeries,
  MarkSeries
} from "react-vis";

const Map = props => {
  console.log("map props:::::::", props);
  useEffect(() => {
    props.getMap();
    // propsMovePlayer();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  //   const getPosition = props.map;
  //   console.log("this is the map props", getPosition);
  const coordinates = [];
  const links = [];
  const room_data = props.map;
  const currentRoom = [];
  currentRoom.push(props.location);
  // Loop through each room in the room_data object
  for (let room in room_data) {
    // Set data equal to the first element (x, y coordinates)
    // in each room of the room_data object
    let data = room_data[room][0];
    coordinates.push(data);
  }

  for (let room in room_data) {
    // Set data equal to the first element (x, y coordinates)
    // in each room of the room_data object
    let data = room_data[room][0];
    coordinates.push(data);
    for (let adjacentRoom in room_data[room][1]) {
      links.push([
        room_data[room][0],
        room_data[room_data[room][1][adjacentRoom]][0]
      ]);
    }
  }
  console.log("testing", typeof currentRoom);

  return (
    <div className="mapDiv">
      <FlexibleXYPlot width={600} height={600}>
        {links.map(link => (
          <LineSeries
            strokeWidth="3"
            color="green"
            data={link}
            key={Math.random() * 100}
          />
        ))}
        {/* <MarkSeries
          current={this.props.location}
          highlight="#1b00ff"
          strokeWidth={3}
          opacity="1"
          size="5"
          color="green"
          data={coordinates}
          style={{ cursor: "pointer" }}
        /> */}
        <MarkSeries
          // current={currentRoom}
          highlight="#1b00ff"
          strokeWidth={3}
          opacity="1"
          size="5"
          color="red"
          // data={currentRoom}
          style={{ cursor: "pointer" }}
        />
      </FlexibleXYPlot>
    </div>
  );
};
const mapStateToProps = state => {
  return {
    ...state.map
  };
};

export default connect(mapStateToProps, { getMap })(Map);
