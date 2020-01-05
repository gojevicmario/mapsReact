import React from 'react';

import Layout from './components/Layout/layout';
import MapifyMain from './containers/MapifyMain/MapifyMain';

function App() {
  return (
    <div>
      <Layout>
        <MapifyMain />
      </Layout>
    </div>
  );
}
export default App;
