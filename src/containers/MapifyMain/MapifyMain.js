import React, { useState, useEffect } from 'react';

import MapifyTable from '../MapifyTable/MapifyTable';
import Map from '../Map/Map';
import InputForm from '../InputForm/InputForm';

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
      <InputForm
        markerData={markeri}
        saveMarkerData={returnData => {
          setMarkeri([...markeri, returnData]);
        }}
      />
      <MapifyTable markerData={markeri} columnData={columnData} />
    </>
  );
}
