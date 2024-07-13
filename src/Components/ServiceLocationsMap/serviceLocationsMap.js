import React from 'react';
import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet';
import 'leaflet/dist/leaflet.css';
import {Icon} from 'leaflet';
import MarkerClusterGroup from 'react-leaflet-cluster';

// Fix default icon issue in Leaflet
// delete L.Icon.Default.prototype._getIconUrl;
// L.Icon.Default.mergeOptions({
//   iconRetinaUrl: require('leaflet/dist/images/marker-icon-2x.png').default,
//   iconUrl: require('leaflet/dist/images/marker-icon.png').default,
//   shadowUrl: require('leaflet/dist/images/marker-shadow.png').default,
// });

const customPinIcon = new Icon({
    iconUrl: 'https://i.postimg.cc/66cmBFm2/placeholder-2.png',
    iconSize: [20,20]
});


// <a href="https://www.flaticon.com/free-icons/pin" title="pin icons">Pin icons created by Freepik - Flaticon</a>

const ServiceLocationsMap = () => {
    const locations = [
        { lat: -1.286389, lng: 36.817223, name: 'Nairobi, Kenya' },
        { lat: -6.792354, lng: 39.208328, name: 'Dar es Salaam, Tanzania' },
        { lat: 0.313611, lng: 32.581111, name: 'Kampala, Uganda' },
        { lat: -17.829222, lng: 31.052222, name: 'Harare, Zimbabwe' },
        { lat: 52.229676, lng: 21.012229, name: 'Warsaw, Poland' },
        { lat: -1.970579, lng: 30.104429, name: 'Kigali, Rwanda' },
      ];
    console.log("locations", locations);
  return (
    <MapContainer center={[0, 20]} zoom={2} minZoom={2} style={{ height: '80vh', width: '100%' }}>
      <TileLayer
        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
      />
      {locations?.map((location, index) => (
        <Marker key={index} position={[location.lat, location.lng]} icon={customPinIcon}>
          <Popup>{location.name}</Popup>
        </Marker>
      ))}
    </MapContainer>
  );
};

export default ServiceLocationsMap;
