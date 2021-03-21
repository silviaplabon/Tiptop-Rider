import React, { useContext, useState } from "react";
import {
  DirectionsRenderer,
  DirectionsService,
  GoogleMap,
  LoadScript,
} from "@react-google-maps/api";
import { Marker } from "@react-google-maps/api";
import { UserContext } from "../../App";

const containerStyle = {
  width: "100%",
  height: "30rem",
};

const location = {
  lat: 23.810331,
  lng: 90.412521,
};

function Direction(props) {
    const {pickfrom,pickto}=props.searchData;
  const [directionResponse, setDirectionResponse] = useState("");
  return (
    <LoadScript googleMapsApiKey="AIzaSyBXtJ8vnXNTmwDDgQw_q0_WlmUPP8cch9A">
      <GoogleMap mapContainerStyle={containerStyle} center={location} zoom={10}>
        <DirectionsService
          // required
          options={{
            destination: pickto,
            origin: pickfrom,
            travelMode: "DRIVING",
          }}
          // required
          callback={(res) => {
            if (res !== null) {
              setDirectionResponse(res);
            }
          }}
        />
        {directionResponse && (
          <DirectionsRenderer
            // required
            options={{
              directions: directionResponse,
            }}
          />
        )}
      </GoogleMap>
    </LoadScript>
  );
}

export default React.memo(Direction);