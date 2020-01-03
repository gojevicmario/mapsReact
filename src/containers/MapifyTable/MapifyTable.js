import React, { useEffect, useState } from 'react';

export default function MapifyTable({ markerData, columnData }) {
  const [columns, setColumns] = useState([]);
  const [rows, setRows] = useState([]);

  useEffect(() => {
    setColumns(columnData);
    console.log(columnData);
  }, [columnData.length]);

  useEffect(() => {
    setRows(markerData);
    console.log(markerData);
  }, [markerData.length]);

  return (
    <table className="table table-striped">
      <thead>
        <tr>
          {columns.map((column, index) => (
            <td key={index}>{column.columnName}</td>
          ))}
        </tr>
      </thead>
      <tbody>
        {rows.map(marker => (
          <tr key={marker.Id}>
            <td>{marker.Id}</td>
            <td>{marker.CompanyName}</td>
            <td>{marker.Founder}</td>
            <td>{marker.City}</td>
            <td>{marker.PostalCode}</td>
            <td>{marker.Street}</td>
            <td>
              <img src={marker.Photo} style={{ maxWidth: '10vw' }} alt="" />
            </td>
            <td>
              <a
                className="btn btn-success"
                href={marker.Website}
                target="_blank"
              >
                {marker.CompanyName} Website
              </a>
            </td>
            <td>{marker.Latitude}</td>
            <td>{marker.Longitude}</td>
          </tr>
        ))}
      </tbody>
    </table>
  );
}
