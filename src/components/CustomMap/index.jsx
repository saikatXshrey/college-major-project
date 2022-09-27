import React, { useState, useRef, useCallback } from "react";

// import global context
import { useGlobalContext } from "../../contexts";

// import packages
import MapGL, {
  Marker,
  Popup,
  NavigationControl,
  FullscreenControl,
  GeolocateControl,
} from "react-map-gl";
import Geocoder from "react-map-gl-geocoder";

// geocode style
import "react-map-gl-geocoder/dist/mapbox-gl-geocoder.css";

// mapbox token
const MAPBOX_TOKEN =
  "pk.eyJ1Ijoic2Fpa2F0eHNocmV5IiwiYSI6ImNrcHJ3cDQ0NzBiYWgycXA4NW53dGIzdjQifQ.NASg72RH5BGwOFLBTU6LvA";

const CustomMap = () => {
  // context-api
  const { updateSearchLocation } = useGlobalContext();

  // hooks
  const [viewport, setViewport] = useState({
    longitude: 77.580649,
    latitude: 12.972442,
    zoom: 12.9,
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
      mapStyle="mapbox://styles/mapbox/navigation-day-v1"
      onViewportChange={handleViewportChange}
      mapboxApiAccessToken={MAPBOX_TOKEN}
    >
      <NavigationControl position="top-left" />
      <FullscreenControl position="top-left" />
      <Geocoder
        mapRef={mapRef}
        onViewportChange={handleGeocoderViewportChange}
        mapboxApiAccessToken={MAPBOX_TOKEN}
        position="top-right"
        onResult={(e) => updateSearchLocation(e.result.text)}
      />
    </MapGL>
  );
};

export default CustomMap;
