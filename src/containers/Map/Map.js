import React, { useEffect, useState } from 'react';

export default function Map({ markerData }) {
  const [markers, setMarkers] = useState(markerData);

  useEffect(() => {
    renderMap();
  }, []);

  return (
    <div>
      <div id="map"></div>
    </div>
  );
}

const initMap = () => {
  var map = new window.google.maps.Map(document.getElementById('map'), {
    center: { lat: 46.16278, lng: 16.8275 },
    zoom: 12
  });

  var marker = new window.google.maps.Marker({
    center: new window.google.maps.LatLng(46.16278, 16.8275),
    map: map,
    title: 'test'
  });
};

const loadScript = url => {
  var index = window.document.getElementsByTagName('script')[0];
  var script = window.document.createElement('script');
  script.src = url;
  script.async = true;
  script.defer = true;
  index.parentNode.insertBefore(script, index);
};

const renderMap = () => {
  loadScript(
    'https://maps.googleapis.com/maps/api/js?key=AIzaSyAbeLIXWRISF3eMy928AQP7ZYbfFJ7pptM&callback=initMap'
  );
  window.initMap = initMap;
};

/*
https://maps.googleapis.com/maps/api/js?key=AIzaSyAbeLIXWRISF3eMy928AQP7ZYbfFJ7pptM&callback=initMap" async defer
 */
