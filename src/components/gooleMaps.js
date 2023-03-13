import { GoogleMap, Marker } from "@react-google-maps/api";
import { useMemo } from "react";

export const Map = () => {
  const center = useMemo(() => ({ lat: 34.419778, lng: 8.79124 }), []);
  return (
    <GoogleMap zoom={10} center={center} mapContainerClassName="map-container">
      <Marker position={{ lat: 34.419778, lng: 8.79124 }} />
    </GoogleMap>
  );
};