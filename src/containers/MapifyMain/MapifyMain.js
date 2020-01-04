import React, { useState, useEffect, useCallback } from 'react';

import MapifyTable from '../MapifyTable/MapifyTable';
import Map from '../Map/Map';
import InputForm from '../InputForm/InputForm';
import alertify from 'alertifyjs';
import FileUploader from '../FileUploader/FileUploader';

import './MapifyMain.less';
import 'alertifyjs/build/css/alertify.css';

export default function MapifyMain({
  markerData,
  columnData,
  onMarkerDataChange,
  onColumnDataChange
}) {
  const [markeri, setMarkeri] = useState([]);
  const [columns, setColumns] = useState([]);

  useEffect(() => {
    setColumns(columnData);
  }, [columnData]);

  return (
    <div id="main-content">
      <FileUploader
        updateSomething={returnData => {
          setMarkeri([...markeri, ...returnData]);
          alertSuccess();
        }}
      />
      <Map markerData={markeri.filter(marker => marker.Visible)} />
      <InputForm
        markerData={markeri}
        saveMarkerData={returnData => {
          setMarkeri([...markeri, returnData]);
          alertSuccess();
        }}
      />
      <MapifyTable
        markerData={markeri}
        columnData={columnData}
        changeVisibleMarker={returnData => {
          let newMarkers = [...markeri];
          newMarkers[returnData.Index].Visible = returnData.Visible;
          setMarkeri([...newMarkers]);
          alertSuccess();
        }}
      />
    </div>
  );
}

const alertSuccess = () => {
  alertify.success('Operation was successful');
};
