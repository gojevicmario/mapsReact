import React, { useState, useEffect } from 'react';

import ReactMapGL, { Marker, Popup } from 'react-map-gl';

function Map({ markerData }) {
  const [markers, setMarkers] = useState([]);
  const [selectedMarker, setSelectedMarker] = useState(null);

  const [viewport, setViewport] = useState({
    latitude: 46,
    longitude: 16.54,
    zoom: 10,
    width: '50vw',
    height: '50vw'
  });
  useEffect(() => {
    setMarkers(markerData);
  }, [markerData.length]);

  useEffect(() => {
    const listener = e => {
      if (e.key === 'Escape') {
        setSelectedMarker(null);
      }
    };
    window.addEventListener('keydown', listener);

    return () => {
      window.removeEventListener('keydown', listener);
    };
  }, []);
  return (
    <ReactMapGL
      {...viewport}
      mapboxApiAccessToken="pk.eyJ1IjoiemVsZW5iaWMiLCJhIjoiY2s0eDNwOGdmMDNhOTNwcGN3ZHV4d3BsNiJ9.Bxh4B3rODag6GeTQZRgJpw"
      mapStyle="mapbox://styles/zelenbic/ck4x3ty34113c1crt4iuf9knc"
      onViewportChange={viewport => setViewport(viewport)}
    >
      {markers.map(marker => (
        <Marker
          key={marker.Id}
          latitude={marker.Latitude}
          longitude={marker.Longitude}
        >
          <button
            className="marker-btn"
            onClick={e => {
              e.preventDefault();
              setSelectedMarker(marker);
            }}
          >
            <img src="https://www.placecage.com/50/50" alt="" />
          </button>
        </Marker>
      ))}

      {selectedMarker && (
        <Popup
          latitude={selectedMarker.Latitude}
          longitude={selectedMarker.Longitude}
          onClose={() => setSelectedMarker(null)}
        >
          <div> {selectedMarker.Founder}</div>
        </Popup>
      )}
    </ReactMapGL>
  );
}

export default Map;
