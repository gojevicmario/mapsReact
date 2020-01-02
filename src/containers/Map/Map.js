import React, { useEffect } from 'react';

export default function Map() {
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
    center: { lat: -34.397, lng: 150.644 },
    zoom: 8
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
