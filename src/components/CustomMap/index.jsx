import React, { useState, useRef, useCallback } from "react";

// import packages
import MapGL from "react-map-gl";
import Geocoder from "react-map-gl-geocoder";

// geocode style
import "react-map-gl-geocoder/dist/mapbox-gl-geocoder.css";

// mapbox token
const MAPBOX_TOKEN =
  "pk.eyJ1Ijoic2Fpa2F0eHNocmV5IiwiYSI6ImNrcHJ3cDQ0NzBiYWgycXA4NW53dGIzdjQifQ.NASg72RH5BGwOFLBTU6LvA";

const CustomMap = () => {
  // hooks
  const [viewport, setViewport] = useState({
    longitude: 77.580649,
    latitude: 12.972442,
    zoom: 13.9,
  });
  const mapRef = useRef();

  // callback methods
  const handleViewportChange = useCallback(
    (newViewport) => setViewport(newViewport),
    []
  );

  const handleGeocoderViewportChange = useCallback(
    (newViewport) => {
      const geocoderDefaultOverrides = { transitionDuration: 2000 };

      return handleViewportChange({
        ...newViewport,
        ...geocoderDefaultOverrides,
      });
    },
    [handleViewportChange]
  );

  return (
    <MapGL
      ref={mapRef}
      {...viewport}
      width="100%"
      height="98vh"
      mapStyle="mapbox://styles/mapbox/streets-v9"
      onViewportChange={handleViewportChange}
      mapboxApiAccessToken={MAPBOX_TOKEN}
    >
      <Geocoder
        onResult={(e) => console.log(e)}
        mapRef={mapRef}
        onViewportChange={handleGeocoderViewportChange}
        mapboxApiAccessToken={MAPBOX_TOKEN}
        position="top-left"
      />
    </MapGL>
  );
};

export default CustomMap;
