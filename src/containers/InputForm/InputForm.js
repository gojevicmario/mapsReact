import React, { useEffect, useState } from 'react';
import { useForm } from 'react-hook-form';
import './inputForm.less';

export default function InputForm({ markerData, saveMarkerData }) {
  const [markers, setMarkers] = useState([]);
  const { register, handleSubmit, watch, errors } = useForm();

  console.log(`Erorrs:`);
  console.log(errors);

  const onSubmit = data => {
    saveMarkerData({
      Id:
        markers.length === 0 ? 0 : parseInt(markers[markers.length - 1].Id) + 1,
      CompanyName: data.CompanyName,
      Founder: data.Founder,
      City: data.City,
      Street: data.Street,
      PostalCode: data.PostalCode,
      Photo: data.Photo,
      Website: data.Website,
      Latitude: parseFloat(data.Latitude),
      Longitude: parseFloat(data.Longitude),
      Visible: data.Visible
    });
    document.getElementById('markerForm').reset();
  };

  useEffect(() => {
    setMarkers(markerData);
  }, [markerData.length]);

  return (
    <form
      onSubmit={handleSubmit(onSubmit)}
      className="marker-form"
      id="markerForm"
    >
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
        name="PostalCode"
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
        step="any"
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
        step="any"
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
      <div class="custom-control custom-checkbox">
        <input
          type="checkbox"
          class="custom-control-input"
          id="Visible"
          name="Visible"
          ref={register}
        />
        <label class="custom-control-label" htmlFor="Visible">
          Displayed on map?
        </label>
      </div>
      <input
        className="form-control"
        className="form-control"
        type="submit"
        value="Save"
      />
    </form>
  );
}
