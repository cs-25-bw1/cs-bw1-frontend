import React, { useState, useEffect } from 'react'
import { getMap } from '../store/app/actions'
import { connect } from 'react-redux'
import room_data from '../util/example-room'
import {
  XAxis,
  YAxis,
  VerticalGridLines,
  XYPlot,
  FlexibleXYPlot,
  HorizontalGridLines,
  LineMarkSeries,
  LineSeries,
  MarkSeries,
} from 'react-vis'

const Map = props => {
  console.log('map props', props)
  useEffect(() => {
    props.getMap()
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])

  //   const getPosition = props.map;
  //   console.log("this is the map props", getPosition);
  const coordinates = []
  const links = []

  // Loop through each room in the room_data object
  //   for (let room in room_data) {
  //     // Set data equal to the first element (x, y coordinates)
  //     // in each room of the room_data object
  //     let data = room_data[room][0];
  //     coordinates.push(data);
  //   }

  for (let room in room_data) {
    // Set data equal to the first element (x, y coordinates)
    // in each room of the room_data object
    let data = room_data[room][0]
    coordinates.push(data)
    for (let adjacentRoom in room_data[room][1]) {
      links.push([
        room_data[room][0],
        room_data[room_data[room][1][adjacentRoom]][0],
      ])
    }
  }

  return (
    <>
      <FlexibleXYPlot width={600} height={600}>
        {links.map(link => (
          <LineSeries
            strokeWidth='5'
            color='green'
            data={link}
            key={Math.random() * 100}
          />
        ))}
        <MarkSeries
          // current={[43, 34]}
          highlight='#1b00ff'
          strokeWidth={3}
          opacity='1'
          size='5'
          color='green'
          data={coordinates}
          style={{ cursor: 'pointer' }}
        />
        <MarkSeries
          // current={[4, 6]}
          highlight='#1b00ff'
          strokeWidth={3}
          opacity='1'
          size='5'
          color='blue'
          data={[8, 8]}
          style={{ cursor: 'pointer' }}
        />
      </FlexibleXYPlot>
    </>
  )
}

/***
 *     {coordinates.map(location => {
          <LineSeries
            strokeWidth="2"
            color="#FF0"
            data={location}
            key={Math.random() * 100}
          />;
        })}
 */

const mapStateToProps = state => {
  return {
    ...state.map,
  }
}

export default connect(mapStateToProps, { getMap })(Map)
