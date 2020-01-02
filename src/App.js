import React, { useState } from 'react';

import Layout from './components/Layout/layout';

import markerData from './assets/sample.json';

import Map from './containers/Map/Map';

import './test.less';

function App() {
  return (
    <div>
      <Layout>
        {/* <MapifyMain /> */}
        <div className="container">
          <Map style={mapStyle} />
        </div>
      </Layout>
    </div>
  );
}
export default App;

const mapStyle = {
  width: '100%',
  height: '400px',
  backgroundColor: 'grey'
};
