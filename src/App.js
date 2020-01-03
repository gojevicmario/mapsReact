import React, { useState, useEffect } from 'react';

import Layout from './components/Layout/layout';
import MapifyMain from './containers/MapifyMain/MapifyMain';

import ReactMapGL, { Marker, Popup } from 'react-map-gl';

function App() {
  return (
    <div>
      <Layout>
        <MapifyMain
          markerData={[
            {
              Id: 1,
              CompanyName: 'Speck',
              Founder: 'Tomislav Tenodi',
              City: 'Križevci',
              Country: 'Croatia',
              PostalCode: 48260,
              Street: 'Franje Tuđmana 20',
              Photo:
                'https://www.speck.agency/static/media/About%E2%80%93WhoWeAre1.0fab5945.webp',
              Website: 'https://speck.agency',
              Latitude: 46.019339,
              Longitude: 16.542341
            },
            {
              Id: 2,
              CompanyName: 'Tesla',
              Founder: 'Elon Musk',
              City: 'Fremont',
              Country: 'USA',
              PostalCode: 'CA 94538',
              Street: '45500 Fremont Blvd',
              Photo:
                'https://cdn.motor1.com/images/mgl/QE00B/s3/tesla-cybertruck-reveal.jpg',
              Website: 'https://www.tesla.com/',
              Latitude: 37.49234,
              Longitude: -121.943572
            },
            {
              Id: 3,
              CompanyName: 'Pied Piper',
              Founder: 'Richard Hendricks',
              City: 'Palo Alto',
              Country: 'USA',
              PostalCode: 'CA 94303',
              Street: '5230 Newell Rd',
              Photo:
                'https://scontent.fktw1-1.fna.fbcdn.net/v/t1.0-9/16142502_613171428874596_6979525158109093888_n.jpg?_nc_cat=101&_nc_ohc=q5jBs0ZJjpkAQncbSwevrcJnUwl63xlMP3006z3WZwouY8nxd3IH7rrwA&_nc_ht=scontent.fktw1-1.fna&oh=4feb3c5eace1ea1e3367e1ebe7b3845e&oe=5E881C9A',
              Website: 'http://www.piedpiper.com/',
              Latitude: 37.449084,
              Longitude: -122.139967
            }
          ]}
          columnData={[
            {
              columnName: 'Id',
              isLabel: 'false'
            },
            {
              columnName: 'Company Name',
              isLabel: 'false'
            },
            {
              columnName: 'Founder',
              isLabel: 'false'
            },
            {
              columnName: 'City',
              isLabel: 'false'
            },
            {
              columnName: 'Postal Code',
              isLabel: 'false'
            },
            {
              columnName: 'Street',
              isLabel: 'false'
            },
            {
              columnName: 'Photo',
              isLabel: 'false'
            },
            {
              columnName: 'Website',
              isLabel: 'false'
            },
            {
              columnName: 'Latitude',
              isLabel: 'false'
            },
            {
              columnName: 'Longitude',
              isLabel: 'false'
            }
          ]}
        />
      </Layout>
    </div>
  );
}
export default App;
