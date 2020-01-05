import React, { useState, useEffect } from 'react';
import ReactMapGL, { Marker, Popup } from 'react-map-gl';

import { FaBeer } from 'react-icons/fa';

import './Map.less';

function Map({ markerData, label }) {
  const [markers, setMarkers] = useState([]);
  const [selectedMarker, setSelectedMarker] = useState(null);
  const [labelColumn, setLabelColumn] = useState('Founder');

  const [viewport, setViewport] = useState({
    latitude: 43.978497,
    longitude: 15.383245,
    zoom: 15,
    width: '100%',
    height: '50vh'
  });

  useEffect(() => {
    setMarkers(markerData);
  }, [markerData.length]);

  useEffect(() => {
    if (typeof label !== 'undefined')
      setLabelColumn(label.columnName.replace(/ /g, ''));
  }, [label]);

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
          className="marker"
        >
          <button
            className="marker-btn"
            onClick={e => {
              e.preventDefault();
              setSelectedMarker(marker);
            }}
          >
            <FaBeer size={20} />
          </button>
        </Marker>
      ))}

      {selectedMarker && (
        <Popup
          latitude={selectedMarker.Latitude}
          longitude={selectedMarker.Longitude}
          onClose={() => setSelectedMarker(null)}
        >
          <div style={{ margin: '0px 10px' }}>
            {selectedMarker[labelColumn]}
          </div>
        </Popup>
      )}
    </ReactMapGL>
  );
}

export default Map;
