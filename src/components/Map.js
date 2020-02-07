import React, { useEffect, useState } from 'react'

import { getMap, initWorld } from '../store/app/actions'
import { connect } from 'react-redux'
import { FlexibleXYPlot, LineSeries, MarkSeries } from 'react-vis'

const Map = props => {
  const [location, setLocation] = useState({})

  useEffect(() => {
    props.getMap()
    // eslint-disable-nextd-line react-hooks/exhaustive-deps
  }, [])

  useEffect(() => {
    setLocation(props.player.location)
  }, [props.player])

  useEffect(() => {
    props.initWorld()
  }, [props, props.player])

  const coordinates = []
  const links = []
  const room_data = props.map
  const currentRoom = []

  for (let room in room_data) {
    let data = room_data[room][0]
    coordinates.push(data)

    if (location !== undefined) {
      if (JSON.stringify(location) === JSON.stringify(data)) {
        currentRoom.push(data)
      }
    }
  }

  for (let room in room_data) {
    let data = room_data[room][0]
    coordinates.push(data)
    for (let adjacentRoom in room_data[room][1]) {
      links.push([
        room_data[room][0],
        room_data[room_data[room][1][adjacentRoom]][0],
      ])
    }
  }

  // console.log("testing", currentRoom);
  return (
    <>
      <FlexibleXYPlot width={600} height={600}>
        {links.map(link => (
          <LineSeries
            strokeWidth='3'
            color='green'
            data={link}
            key={Math.random() * 100}
          />
        ))}
        <MarkSeries
          current={props.player.title}
          highlight='#1b00ff'
          strokeWidth={3}
          opacity='1'
          size='5'
          color='#90ee90'
          data={coordinates}
          style={{ cursor: 'pointer' }}
        />
        <MarkSeries
          current={1}
          highlight='#1b00ff'
          strokeWidth={3}
          opacity='1'
          size='5'
          color='red'
          data={currentRoom}
          style={{ cursor: 'pointer' }}
        />
      </FlexibleXYPlot>
    </>
  )
}
const mapStateToProps = state => {
  return {
    map: state.gameReducer.map,
    player: state.gameReducer.player,
  }
}

export default connect(mapStateToProps, { getMap, initWorld })(Map)
