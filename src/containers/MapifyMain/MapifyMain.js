import React, { useState, useEffect } from 'react';

import MapifyTable from '../MapifyTable/MapifyTable';
import Map from '../Map/Map';
import InputForm from '../InputForm/InputForm';

import './MapifyMain.less';

export default function MapifyMain({
  markerData,
  columnData,
  onMarkerDataChange,
  onColumnDataChange
}) {
  const [markeri, setMarkeri] = useState([]);
  const [columns, setColumns] = useState([]);

  useEffect(() => {
    console.log('EFFEKT');
    setMarkeri([
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
        Longitude: 16.542341,
        Visible: true
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
        Longitude: -121.943572,
        Visible: false
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
        Longitude: -122.139967,
        Visible: true
      }
    ]);
  }, []);

  useEffect(() => {
    setColumns(columnData);
  }, [columnData]);
  return (
    <div id="main-content">
      <Map markerData={markeri.filter(marker => marker.Visible)} />
      <InputForm
        markerData={markeri}
        saveMarkerData={returnData => {
          setMarkeri([...markeri, returnData]);
        }}
      />
      <MapifyTable
        markerData={markeri}
        columnData={columnData}
        changeVisibleMarker={returnData => {
          let newMarkers = [...markeri];
          newMarkers[returnData.Index].Visible = returnData.Visible;
          setMarkeri([...newMarkers]);
        }}
      />
    </div>
  );
}
