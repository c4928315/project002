import React from 'react';
import './serviceLocationsMap.css'
import { useEffect } from 'react';
import L from 'leaflet';
import 'leaflet.markercluster';
import { useMap } from 'react-leaflet';

const CustomMarkerClusterGroup = ({ children }) => {
  const map = useMap();

  useEffect(() => {
    const markers = L.markerClusterGroup({
      iconCreateFunction: (cluster) => {
        let childCount = cluster.getChildCount();

        let className = 'marker-cluster-small';
        if (childCount < 10) {
          className = 'marker-cluster-small';
        } else if (childCount < 100) {
          className = 'marker-cluster-medium';
        } else {
          className = 'marker-cluster-large';
        }

        return L.divIcon({
          html: `<div><span>${childCount}</span></div>`,
          className: className,
        });
      },
    });
    map.addLayer(markers);

    React.Children.forEach(children, (child) => {
      if (child.props.position) {
        const marker = L.marker(child.props.position, {
          icon: child.props.icon,
        }).bindPopup(child.props.children);
        markers.addLayer(marker);
      }
    });

    return () => {
      map.removeLayer(markers);
    };
  }, [map, children]);

  return null;
};

export default CustomMarkerClusterGroup;
