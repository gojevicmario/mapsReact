import React, { useState, useEffect, useCallback } from 'react';
import { useDropzone } from 'react-dropzone';
import Papa from 'papaparse';

import MapifyTable from '../MapifyTable/MapifyTable';
import Map from '../Map/Map';
import InputForm from '../InputForm/InputForm';
import alertify from 'alertifyjs';

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
          setMarkeri(returnData);
        }}
      />
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

var fromCsv = [];
const FileUploader = ({ updateSomething }) => {
  const onDrop = useCallback(acceptedFiles => {
    if (acceptedFiles[0].name.split('.')[1].toLowerCase() === 'csv') {
      Papa.parse(acceptedFiles[0], {
        complete: function(result) {
          let columnsFromCsv = result.data[0].map(column => ({
            columnName: column,
            selector: column.replace(/\s/g, ''),
            isLabel: column === 'Founder' ? true : false
          }));
          console.table(result.data[1]);
          //Caution shitty code below
          fromCsv = result.data.slice(1).map((row, index) => ({
            Visible: true,
            Id: row[0],
            CompanyName: row[1],
            Founder: row[2],
            City: row[3],
            Country: row[4],
            PostalCode: row[5],
            Street: row[6],
            Photo: row[7],
            Website: row[8],
            Latitude: parseFloat(row[9]),
            Longitude: parseFloat(row[10])
          }));
          //hax for badly formated csv
          fromCsv.pop();
          updateSomething(fromCsv);
        }
      });
    } else {
      alertify.error('Only CSV files are allowed');
    }
  }, []);
  const { getRootProps, getInputProps, isDragActive } = useDropzone({ onDrop });

  return (
    <div {...getRootProps()}>
      <input {...getInputProps()} />
      {isDragActive ? (
        <p>Drop the files here ...</p>
      ) : (
        <p>Drag 'n' drop some files here, or click to select files</p>
      )}
    </div>
  );
};
