import React from 'react';
import TableComponent from './Components/TableComponent.js'
import makedata from './makedata.js'
import Papa from '../node_modules/papaparse/papaparse.js'
import './App.css';

function App() {
  const columns = React.useMemo(
    () => [
      {
        Header: 'Lotz companies, much wow',
        columns: [
          {
            Header: 'Id',
            accessor: 'Id',
          },
          {
            Header: 'Company Name',
            accessor: 'Company Name',
          },
          {
            Header: 'Founder',
            accessor: 'Founder',
          },
          {
            Header: 'City',
            accessor: 'City',
          },
          {
            Header: 'Country',
            accessor: 'Country',
          },
          {
            Header: 'Street',
            accessor: 'Street',
          },
          {
            Header: 'Photo',
            accessor: 'Photo',
          }, 
          {
            Header: 'Website',
            accessor: 'Website',
          }, 
          {
            Header: 'Latitude',
            accessor: 'Latitude',
          },
          {
            Header: 'Longitude',
            accessor: 'Longitude',
          }]
      }
    ],
    []
  )
  const data = React.useMemo(() => [
    {
      "Id": 1,
      "Company Name": "Speck",
      "Founder": "Tomislav Tenodi",
      "City": "Križevci",
      "Country": "Croatia",
      "Postal Code": 48260,
      "Street": "Franje Tuđmana 20",
      "Photo": "https://www.speck.agency/static/media/About%E2%80%93WhoWeAre1.0fab5945.webp",
      "Website": "https://speck.agency",
      "Latitude": 46.019339,
      "Longitude": 16.542341
    },
    {
      "Id": 2,
      "Company Name": "Tesla",
      "Founder": "Elon Musk",
      "City": "Fremont",
      "Country": "USA",
      "Postal Code": "CA 94538",
      "Street": "45500 Fremont Blvd",
      "Photo": "https://cdn.motor1.com/images/mgl/QE00B/s3/tesla-cybertruck-reveal.jpg",
      "Website": "https://www.tesla.com/",
      "Latitude": 37.49234,
      "Longitude": -121.943572
    },
    {
      "Id": 3,
      "Company Name": "Pied Piper",
      "Founder": "Richard Hendricks",
      "City": "Palo Alto",
      "Country": "USA",
      "Postal Code": "CA 94303",
      "Street": "5230 Newell Rd",
      "Photo": "https://scontent.fktw1-1.fna.fbcdn.net/v/t1.0-9/16142502_613171428874596_6979525158109093888_n.jpg?_nc_cat=101&_nc_ohc=q5jBs0ZJjpkAQncbSwevrcJnUwl63xlMP3006z3WZwouY8nxd3IH7rrwA&_nc_ht=scontent.fktw1-1.fna&oh=4feb3c5eace1ea1e3367e1ebe7b3845e&oe=5E881C9A",
      "Website": "http://www.piedpiper.com/",
      "Latitude": 37.449084,
      "Longitude": -122.139967
    }
  ], [])

  var csvToJSON = Papa.parse(
    `Id,Company Name,Founder,City,Country,Postal Code,Street,Photo,Website,Latitude,Longitude
  1,Speck,Tomislav Tenodi,Križevci,Croatia,48260,Franje Tuđmana 20,https://www.speck.agency/static/media/About%E2%80%93WhoWeAre1.0fab5945.webp,https://speck.agency,46.019339,16.542341
  2,Tesla,Elon Musk,Fremont,USA,CA 94538,45500 Fremont Blvd,https://cdn.motor1.com/images/mgl/QE00B/s3/tesla-cybertruck-reveal.jpg,https://www.tesla.com/,37.49234,-121.943572
  3,Pied Piper ,Richard Hendricks,Palo Alto,USA,CA 94303,5230 Newell Rd,https://scontent.fktw1-1.fna.fbcdn.net/v/t1.0-9/16142502_613171428874596_6979525158109093888_n.jpg?_nc_cat=101&_nc_ohc=q5jBs0ZJjpkAQncbSwevrcJnUwl63xlMP3006z3WZwouY8nxd3IH7rrwA&_nc_ht=scontent.fktw1-1.fna&oh=4feb3c5eace1ea1e3367e1ebe7b3845e&oe=5E881C9A,http://www.piedpiper.com/,37.449084,-122.139967`,  {
    delimiter: "",	// auto-detect
    newline: "",	// auto-detect
    quoteChar: '"',
    escapeChar: '"',
    header: false,
    transformHeader: undefined,
    dynamicTyping: false,
    preview: 0,
    encoding: "",
    worker: false,
    comments: false,
    step: undefined,
    complete: undefined,
    error: undefined,
    download: false,
    downloadRequestHeaders: undefined,
    skipEmptyLines: false,
    chunk: undefined,
    fastMode: undefined,
    beforeFirstChunk: undefined,
    withCredentials: undefined,
    transform: undefined,
    delimitersToGuess: [',', '\t', '|', ';', Papa.RECORD_SEP, Papa.UNIT_SEP]
  }
  )
  console.table(csvToJSON.data);
  console.log(...csvToJSON.data);
  // console.log(...csvToJSON)

  const data2 = React.useMemo(() => [
      {
      "Id": 1,
      "Company Name": "Speck",
      "Founder": "Tomislav Tenodi",
      "City": "Križevci",
      "Country": "Croatia",
      "Postal Code": 48260,
      "Street": "Franje Tuđmana 20",
      "Photo": "https://www.speck.agency/static/media/About%E2%80%93WhoWeAre1.0fab5945.webp",
      "Website": "https://speck.agency",
      "Latitude": 46.019339,
      "Longitude": 16.542341
      }
    ], [])

  return (
    <div className="App">
      <div className="container">
        <TableComponent columns= {columns} data= {data} /> 
      </div>
    </div>
  );
}

export default App;
