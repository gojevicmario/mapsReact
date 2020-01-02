import React, { useState, useEffect } from 'react';

import Layout from './components/Layout/layout';

import ReactMapGL, { Marker, Popup } from 'react-map-gl';

function App() {
  const [viewport, setViewport] = useState({
    latitude: 46,
    longitude: 16.54,
    zoom: 10,
    width: '50vw',
    height: '50vw'
  });

  const [selectedMarker, setSelectedMarker] = useState(null);
  const [markers, setMarkers] = useState([
    {
      Id: 1,
      'Company Name': 'Speck',
      Founder: 'Tomislav Tenodi',
      City: 'Križevci',
      Country: 'Croatia',
      'Postal Code': 48260,
      Street: 'Franje Tuđmana 20',
      Photo:
        'https://www.speck.agency/static/media/About%E2%80%93WhoWeAre1.0fab5945.webp',
      Website: 'https://speck.agency',
      Latitude: 46.019339,
      Longitude: 16.542341
    },
    {
      Id: 2,
      'Company Name': 'Tesla',
      Founder: 'Elon Musk',
      City: 'Fremont',
      Country: 'USA',
      'Postal Code': 'CA 94538',
      Street: '45500 Fremont Blvd',
      Photo:
        'https://cdn.motor1.com/images/mgl/QE00B/s3/tesla-cybertruck-reveal.jpg',
      Website: 'https://www.tesla.com/',
      Latitude: 37.49234,
      Longitude: -121.943572
    },
    {
      Id: 3,
      'Company Name': 'Pied Piper',
      Founder: 'Richard Hendricks',
      City: 'Palo Alto',
      Country: 'USA',
      'Postal Code': 'CA 94303',
      Street: '5230 Newell Rd',
      Photo:
        'https://scontent.fktw1-1.fna.fbcdn.net/v/t1.0-9/16142502_613171428874596_6979525158109093888_n.jpg?_nc_cat=101&_nc_ohc=q5jBs0ZJjpkAQncbSwevrcJnUwl63xlMP3006z3WZwouY8nxd3IH7rrwA&_nc_ht=scontent.fktw1-1.fna&oh=4feb3c5eace1ea1e3367e1ebe7b3845e&oe=5E881C9A',
      Website: 'http://www.piedpiper.com/',
      Latitude: 37.449084,
      Longitude: -122.139967
    }
  ]);

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
    <div>
      <Layout>
        {/* <MapifyMain /> */}
        <div className="container">
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
        </div>
      </Layout>
    </div>
  );
}
export default App;
