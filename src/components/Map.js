import React, { useEffect, useState } from "react";

import { getMap } from "../store/app/actions";
import { connect } from "react-redux";
import { FlexibleXYPlot, LineSeries, MarkSeries } from "react-vis";

const Map = props => {
  const [location, setLocation] = useState({});

  useEffect(() => {
    props.getMap();
    // eslint-disable-nextd-line react-hooks/exhaustive-deps
  }, []);

  useEffect(() => {
    setLocation(props.player.location);
  }, [props.player]);

  const coordinates = [];
  const links = [];
  const room_data = props.map;
  const currentRoom = [];

  for (let room in room_data) {
    let data = room_data[room][0];
    coordinates.push(data);

    if (
      location !== undefined &&
      JSON.stringify(location) === JSON.stringify(data)
    ) {
      currentRoom.push(data);
      console.log("this is working a little", location, data);
    }
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

  // console.log("testing", currentRoom);
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
          current={props.player.title}
          highlight="#1b00ff"
          strokeWidth={3}
          opacity="1"
          size="5"
          color="green"
          data={coordinates}
          style={{ cursor: "pointer" }}
        />
        <MarkSeries
          current={1}
          highlight="#1b00ff"
          strokeWidth={3}
          opacity="1"
          size="5"
          color="red"
          data={currentRoom}
          style={{ cursor: "pointer" }}
        />
      </FlexibleXYPlot>
    </div>
  );
};
const mapStateToProps = state => {
  return {
    map: state.gameReducer.map,
    player: state.gameReducer.player
  };
};

export default connect(mapStateToProps, { getMap })(Map);
