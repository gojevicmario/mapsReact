import React, { useState, useEffect } from 'react';

import Layout from './components/Layout/layout';
import MapifyMain from './containers/MapifyMain/MapifyMain';

import ReactMapGL, { Marker, Popup } from 'react-map-gl';

function App() {
  return (
    <div>
      <Layout>
        <MapifyMain
          columnData={[
            {
              columnName: 'Visible',
              isLabel: 'false'
            },
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
