

    //   AIzaSyBXtJ8vnXNTmwDDgQw_q0_WlmUPP8cch9A
    // AIzaSyALmEZRA7_aq1LRnVeYdZ45YHCqt7Gkz0k
import React from "react";
import { GoogleMap, LoadScript } from "@react-google-maps/api";
import { Marker } from "@react-google-maps/api";

const containerStyle = {
  width: "100%",
  height: "30rem",
};

const location = {
  lat: 23.810331,
  lng: 90.412521,
};

const onLoad = (marker) => {
  
};

function LocationGoogleMap() {
  return (
    <LoadScript googleMapsApiKey="AIzaSyBXtJ8vnXNTmwDDgQw_q0_WlmUPP8cch9A">
      <GoogleMap mapContainerStyle={containerStyle} center={location} zoom={10}>
        <Marker onLoad={onLoad} position={location} />
      </GoogleMap>
    </LoadScript>
  );
}

export default React.memo(LocationGoogleMap);