import React, { useEffect, useState } from 'react';
import { useForm } from 'react-hook-form';

export default function InputForm({ markerData, saveMarkerData }) {
  const [markers, setMarkers] = useState([]);
  const { register, handleSubmit, watch, errors } = useForm();

  const onSubmit = data => {
    saveMarkerData({
      Id: markers[markers.length - 1].Id + 1,
      Latitude: parseFloat(data.Latitude),
      Longitude: parseFloat(data.Longitude)
    });
  };

  useEffect(() => {
    setMarkers(markerData);
  }, [markerData.length]);

  return (
    // <form
    //   onSubmit={event => {
    //     event.preventDefault();
    //     console.log(event.target);
    //     saveMarkerData({
    //       Id: markers[markers.length - 1].Id + 1,
    //       Latitude: parseFloat(document.getElementById('Latitude').value),
    //       Longitude: parseFloat(document.getElementById('Longitude').value)
    //     });
    //   }}
    // >
    //   <input type="text" name="Latitude" id="Latitude" />
    //   <input type="text" name="Longitude" id="Longitude" />
    //   <button className="btn btn-danger">SUBMIT</button>
    // </form>
    <form onSubmit={handleSubmit(onSubmit)}>
      <label>Latitude</label>
      <input name="Latitude" ref={register} />
      <label>Longitude</label>
      <input
        name="Longitude"
        ref={register({ required: true, maxLength: 10 })}
      />
      {errors.exampleRequired && <p>This field is required</p>}
      <button className="btn btn-danger" type="submit">
        SUBMIT
      </button>
    </form>
  );
}
