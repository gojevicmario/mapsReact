import React, { useState, useEffect } from 'react';

import MapifyTable from '../MapifyTable/MapifyTable';
import Map from '../Map/Map';

export default function MapifyMain({ markerData, columnData }) {
  const [markeri, setMarkeri] = useState([]);
  const [columns, setColumns] = useState([]);

  useEffect(() => {
    setMarkeri(markerData);
  }, [markerData]);

  useEffect(() => {
    setColumns(columnData);
  }, [columnData]);
  return (
    <>
      <Map markerData={markeri} />
      <input
        type="number"
        onChange={e => {
          setMarkeri([
            ...markeri,
            {
              Id: markeri[markeri.length - 1].Id + 1,
              Latitude: parseFloat(e.target.value),
              Longitude: parseFloat(e.target.value)
            }
          ]);
          console.log(markeri);
        }}
      />
      <MapifyTable markerData={markeri} columnData={columnData} />
    </>
  );
}
