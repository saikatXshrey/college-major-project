import React from 'react'

import Map from 'react-map-gl';

const CustomMap = () => {
  return (
    <Map
      // mapboxAccessToken={process.env.MAPBOX_KEY}
      mapboxAccessToken='pk.eyJ1Ijoic2Fpa2F0eHNocmV5IiwiYSI6ImNrcHJ3cDQ0NzBiYWgycXA4NW53dGIzdjQifQ.NASg72RH5BGwOFLBTU6LvA'
      initialViewState={{
        // Bangalore
        longitude: 77.580649,
        latitude: 12.972442,
        zoom: 13
      }}
      style={{width: '100%', height: '98vh'}}
      mapStyle="mapbox://styles/mapbox/streets-v9"
    />
  )
}

export default CustomMap