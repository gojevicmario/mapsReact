import React, { useEffect, useState } from 'react';

import { FaInfoCircle } from 'react-icons/fa';

import alertify from 'alertifyjs';
import 'alertifyjs/build/css/alertify.css';

import './MapifyTable.less';

export default function MapifyTable({
  markerData,
  columnData,
  changeVisibleMarker,
  changeVisibleLabel
}) {
  const [columns, setColumns] = useState([]);
  const [rows, setRows] = useState([]);

  useEffect(() => {
    setColumns(columnData);
  }, [columnData.length]);

  useEffect(() => {
    setRows(markerData);
  }, [markerData]);

  return (
    <>
      <span>
        <FaInfoCircle size={30} style={{ marginBottom: '5px' }} /> double click
        a column to make the active label
      </span>

      <table className="table table-hover">
        <thead className="">
          <tr>
            {columns.map((column, index) => (
              <td
                key={index}
                className={column.isLabel ? 'active' : ''}
                onDoubleClick={() => {
                  if (
                    [
                      'Visible',
                      'Id',
                      'Photo',
                      'Website',
                      'Latitude',
                      'Longitude'
                    ].includes(columns[index].columnName)
                  ) {
                    alertify.error("can't set this column as label");
                  } else {
                    changeVisibleLabel({ index });
                  }
                }}
              >
                {column.columnName}
              </td>
            ))}
          </tr>
        </thead>
        <tbody>
          {rows.map((marker, index) => (
            <tr key={index}>
              <td>
                <input
                  type="checkbox"
                  name="checkBoxVisible"
                  id="checkBoxVisible"
                  checked={marker.Visible}
                  onChange={e => {
                    changeVisibleMarker({
                      Visible: !marker.Visible,
                      Index: index
                    });
                  }}
                />
              </td>
              <td>{marker.Id}</td>
              <td>{marker.CompanyName}</td>
              <td>{marker.Founder}</td>
              <td>{marker.City}</td>
              <td>{marker.PostalCode}</td>
              <td>{marker.Street}</td>
              <td>
                <img src={marker.Photo} style={{ maxWidth: '10vw' }} />
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
    </>
  );
}
