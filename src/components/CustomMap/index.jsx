import React, { useState, useRef, useCallback } from "react";

// import global context
import { useGlobalContext } from "../../contexts";

// import packages
import MapGL, {
  Marker,
  NavigationControl,
  FullscreenControl,
} from "react-map-gl";
import Geocoder from "react-map-gl-geocoder";

// geocode style
import "mapbox-gl/dist/mapbox-gl.css";
import "react-map-gl-geocoder/dist/mapbox-gl-geocoder.css";

// icon
import PersonPinCircleIcon from "@mui/icons-material/PersonPinCircle";

/* eslint-disable import/no-webpack-loader-syntax */
import mapboxgl from "mapbox-gl";
// @ts-ignore
mapboxgl.workerClass =
  require("worker-loader!mapbox-gl/dist/mapbox-gl-csp-worker").default;

// mapbox token
const MAPBOX_TOKEN =
  "pk.eyJ1Ijoic2Fpa2F0eHNocmV5IiwiYSI6ImNrcHJ3cDQ0NzBiYWgycXA4NW53dGIzdjQifQ.NASg72RH5BGwOFLBTU6LvA";

const CustomMap = () => {
  // context-api
  const { counter, updateSearchLocation, searchLocation } = useGlobalContext();

  // hooks
  const [viewport, setViewport] = useState({
    longitude: 77.5913,
    latitude: 12.97912,
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
        onResult={(e) =>
          updateSearchLocation(
            e.result.text,
            e.result.center[0],
            e.result.center[1]
          )
        }
      />
      {counter > 0 && (
        <Marker
          longitude={searchLocation.longitude}
          latitude={searchLocation.latitude}
          anchor="bottom"
        >
          <PersonPinCircleIcon style={{ fontSize: 69 }} color="primary" />
        </Marker>
      )}
    </MapGL>
  );
};

export default CustomMap;
