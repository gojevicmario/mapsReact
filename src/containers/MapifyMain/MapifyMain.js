import React, { useState, useEffect } from 'react';

import MapifyTable from '../MapifyTable/MapifyTable';
import Map from '../Map/Map';
import InputForm from '../InputForm/InputForm';
import alertify from 'alertifyjs';
import FileUploader from '../FileUploader/FileUploader';

import './MapifyMain.less';
import 'alertifyjs/build/css/alertify.css';

export default function MapifyMain({}) {
  const [markers, setMarkers] = useState([]);
  const [columns, setColumns] = useState([]);
  const [showTable, setShowTable] = useState(false);
  const [showForm, setShowForm] = useState(false);

  useEffect(() => {
    setColumns([
      {
        columnName: 'Visible',
        isLabel: false
      },
      {
        columnName: 'Id',
        isLabel: false
      },
      {
        columnName: 'Company Name',
        isLabel: false
      },
      {
        columnName: 'Founder',
        isLabel: true
      },
      {
        columnName: 'City',
        isLabel: false
      },
      {
        columnName: 'Postal Code',
        isLabel: false
      },
      {
        columnName: 'Street',
        isLabel: false
      },
      {
        columnName: 'Photo',
        isLabel: false
      },
      {
        columnName: 'Website',
        isLabel: false
      },
      {
        columnName: 'Latitude',
        isLabel: false
      },
      {
        columnName: 'Longitude',
        isLabel: false
      }
    ]);
  }, []);

  useEffect(() => {
    markers.length > 0 ? setShowTable(true) : setShowTable(false);
  }, [markers]);

  return (
    <div id="main-content">
      <div className="map-toggle-container">
        <Map
          markerData={markers.filter(marker => marker.Visible)}
          label={columns.filter(column => column.isLabel === true)[0]}
        />
        <button
          className="btn btn-primary"
          onClick={() => {
            setShowForm(!showForm);
          }}
        >
          Toggle manual input
        </button>
        {showForm && (
          <InputForm
            markerData={markers}
            saveMarkerData={returnData => {
              setMarkers([...markers, returnData]);
              alertSuccess();
            }}
          />
        )}
      </div>
      <FileUploader
        updateMarkers={returnData => {
          setMarkers([...markers, ...returnData]);
          alertSuccess();
        }}
      />
      {showTable && (
        <MapifyTable
          markerData={markers}
          columnData={columns}
          changeVisibleLabel={returnData => {
            let newColumns = [...columns];
            let IndexOfCurrentLabel = newColumns.indexOf(
              newColumns.filter(col => col.isLabel === true)[0]
            );
            newColumns[IndexOfCurrentLabel].isLabel = false;
            newColumns[returnData.index].isLabel = true;
            setColumns([...newColumns]);
            alertSuccess();
          }}
          changeVisibleMarker={returnData => {
            let newMarkers = [...markers];
            newMarkers[returnData.Index].Visible = returnData.Visible;
            setMarkers([...newMarkers]);
            alertSuccess();
          }}
        />
      )}
    </div>
  );
}

const alertSuccess = () => {
  alertify.success('Operation was successful');
};
