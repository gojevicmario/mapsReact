import React, { useCallback } from 'react';
import { useDropzone } from 'react-dropzone';
import Papa from 'papaparse';

import alertify from 'alertifyjs';
import 'alertifyjs/build/css/alertify.css';
export default function FileUploader({ updateSomething }) {
  const onDrop = acceptedFiles => {
    if (acceptedFiles[0].name.split('.')[1].toLowerCase() === 'csv') {
      Papa.parse(acceptedFiles[0], {
        complete: function(result) {
          let columnsFromCsv = result.data[0].map(column => ({
            columnName: column,
            selector: column.replace(/\s/g, ''),
            isLabel: column === 'Founder' ? true : false
          }));
          //Caution shitty code below
          let fromCsv = result.data.slice(1).map((row, index) => ({
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
            Longitude: parseFloat(row[10]),
            Visible: true
          }));
          //hax for badly formated csv
          fromCsv.pop();
          updateSomething(fromCsv);
        }
      });
    } else {
      alertify.error('Only CSV files are allowed');
    }
  };
  const { getRootProps, getInputProps, isDragActive } = useDropzone({ onDrop });

  return (
    <div className="card">
      <div {...getRootProps()} className="card-body">
        <input {...getInputProps()} />
        {isDragActive ? (
          <p>Drop a csv file here</p>
        ) : (
          <p>Drag 'n' drop a CSV file here, or click to select a file</p>
        )}
      </div>
    </div>
  );
}
