import React, { useEffect, useState } from 'react';
import { useForm } from 'react-hook-form';
import './inputForm.less';

export default function InputForm({ markerData, saveMarkerData }) {
  const [markers, setMarkers] = useState([]);
  const { register, handleSubmit, watch, errors } = useForm();

  console.log(errors);

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
    <form onSubmit={handleSubmit(onSubmit)} className="marker-form">
      <input
        className="form-control"
        type="text"
        placeholder="Company name"
        name="CompanyName"
        ref={register({ required: true })}
      />
      {errors.CompanyName && (
        <div className="alert alert-danger">This field is required</div>
      )}
      <input
        className="form-control"
        type="text"
        placeholder="Founder"
        name="Founder"
        ref={register}
      />
      <input
        className="form-control"
        type="text"
        placeholder="City"
        name="City"
        ref={register}
      />
      <input
        className="form-control"
        type="text"
        placeholder="Postal Code"
        name="Postal Code"
        ref={register}
      />
      <input
        className="form-control"
        type="text"
        placeholder="Street"
        name="Street"
        ref={register}
      />
      <input
        className="form-control"
        type="url"
        placeholder="Photo"
        name="Photo"
        ref={register}
      />
      <input
        className="form-control"
        type="url"
        placeholder="Website"
        name="Website"
        ref={register}
      />
      <input
        className="form-control"
        type="number"
        placeholder="Latitude"
        name="Latitude"
        ref={register({ required: true, max: 90, min: -90 })}
      />
      {errors.Latitude &&
        (((errors.Latitude.type === 'max' ||
          errors.Latitude.type === 'min') && (
          <div className="alert alert-danger">
            The input must be between 90 and -90
          </div>
        )) ||
          (errors.Latitude.type = 'required' && (
            <div className="alert alert-danger">This is requred</div>
          )))}
      <input
        className="form-control"
        type="number"
        placeholder="Longitude"
        name="Longitude"
        ref={register({ required: true, max: 180, min: -180 })}
      />
      {errors.Longitude &&
        (((errors.Longitude.type === 'max' ||
          errors.Longitude.type === 'min') && (
          <div className="alert alert-danger">
            The input must be between -180 and 180{' '}
          </div>
        )) ||
          (errors.Longitude.type = 'required' && (
            <div className="alert alert-danger">This is requred</div>
          )))}
      <input className="form-control" type="submit" />
    </form>
  );
}
