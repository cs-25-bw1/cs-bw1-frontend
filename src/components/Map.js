import React, { useEffect, useState } from "react";

import { getMap } from "../store/app/actions";
import { connect } from "react-redux";
import { FlexibleXYPlot, LineSeries, MarkSeries } from "react-vis";

const Map = props => {
  useEffect(() => {
    props.getMap();
    // eslint-disable-nextd-line react-hooks/exhaustive-deps
  }, []);

  const coordinates = [];
  const links = [];
  const room_data = props.map;

  for (let room in room_data) {
    let data = room_data[room][0];
    coordinates.push(data);
  }

  for (let room in room_data) {
    let data = room_data[room][0];
    coordinates.push(data);
    for (let adjacentRoom in room_data[room][1]) {
      links.push([
        room_data[room][0],
        room_data[room_data[room][1][adjacentRoom]][0]
      ]);
    }
  }

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
        <MarkSeries
          // current={currentRoom}
          highlight="#1b00ff"
          strokeWidth={3}
          opacity="1"
          size="5"
          color="red"
          data={coordinates}
          style={{ cursor: "pointer" }}
        />
        {/* <MarkSeries
          // current={currentRoom}
          highlight="#1b00ff"
          strokeWidth={3}
          opacity="1"
          size="5"
          color="blue"
          data={{ x: 2, y: 3 }}
          style={{ cursor: "pointer" }}
        /> */}
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
